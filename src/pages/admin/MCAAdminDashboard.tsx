import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, Search, Download, Eye, LogOut, Key,
  ChevronDown, LayoutDashboard, RefreshCw, Users, FileText,
  MessageSquare, Code2, CalendarDays, Images, Camera, Video
} from 'lucide-react';
import { supabase, EnquiryStatus } from '@/lib/supabase';
import { format } from 'date-fns';
import LeadDetailsModal, { getStatusBadge } from '@/components/admin/LeadDetailsModal';
import ChangePasswordModal from '@/components/admin/ChangePasswordModal';

const SESSION_KEY = 'ncb_admin_session';

const STATUS_FILTER_OPTIONS: (EnquiryStatus | 'All Statuses')[] = [
  'All Statuses', 'Not Contacted', 'Called', 'Interested', 'Not Interested', 'Admitted', 'Follow Up',
];

// Sidebar nav items — shared across admin pages
const NAV_LINKS = [
  { href: '/admin/dashboard', label: 'Apply Online', icon: FileText },
  { href: '/admin/mca-applications', label: 'MCA Applications', icon: Code2 },
  { href: '/admin/dashboard', label: 'Contact Page', icon: MessageSquare },
];

const MCAAdminDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<EnquiryStatus | 'All Statuses'>('All Statuses');
  const [selectedLead, setSelectedLead] = useState<Record<string, any> | null>(null);
  const [page, setPage] = useState(1);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const PAGE_SIZE = 10;

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== 'authenticated') {
      navigate('/admin');
    }
  }, [navigate]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    // Fetch only MCA applications — filter by source values set from MCAApplicationForm
    const { data: rows, error } = await supabase
      .from('apply_online_enquiries')
      .select('*')
      .in('source', ['mca_apply_online', 'mca_page_apply_online', 'mca_page_embedded'])
      .order('created_at', { ascending: false });
    if (!error && rows) setData(rows);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
    setSearch('');
    setStatusFilter('All Statuses');
    setPage(1);
  }, [fetchData]);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/admin');
  };

  const getName = (row: Record<string, any>) => row.full_name || row.name || '—';
  const getContact = (row: Record<string, any>) => row.mobile || row.phone || '—';
  const getEmail = (row: Record<string, any>) => row.email || '—';
  const getUGDegree = (row: Record<string, any>) => row.notes?.replace('UG Degree: ', '') || row.specialization || '—';

  const getDate = (row: Record<string, any>) => {
    if (!row.created_at) return '—';
    try { return format(new Date(row.created_at), 'dd-MM-yyyy'); } catch { return '—'; }
  };

  const getTime = (row: Record<string, any>) => {
    if (!row.created_at) return '—';
    try { return format(new Date(row.created_at), 'hh:mm a'); } catch { return '—'; }
  };

  const filtered = data.filter(row => {
    const name = getName(row).toLowerCase();
    const email = getEmail(row).toLowerCase();
    const phone = getContact(row).toLowerCase();
    const q = search.toLowerCase();
    const matchSearch = !q || name.includes(q) || email.includes(q) || phone.includes(q);
    const matchStatus = statusFilter === 'All Statuses' || row.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleExportCSV = () => {
    if (filtered.length === 0) return;
    const keys = Object.keys(filtered[0]);
    const csv = [
      keys.join(','),
      ...filtered.map(row => keys.map(k => `"${String(row[k] ?? '').replace(/"/g, '""')}"`).join(','))
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mca_applications_${format(new Date(), 'yyyyMMdd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1a1f2e] text-white flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">National College</p>
              <p className="text-[10px] text-white/50">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-2">
            Enquiries
          </p>

          {/* Apply Online */}
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <FileText size={16} />
            Apply Online
          </button>

          {/* MCA Applications — active */}
          <button
            onClick={() => navigate('/admin/mca-applications')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 bg-white/15 text-white"
          >
            <Code2 size={16} />
            MCA Applications
            <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </button>

          {/* Contact Page */}
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <MessageSquare size={16} />
            Contact Page
          </button>

          {/* Content section */}
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-4">
            Content
          </p>
          <button
            onClick={() => navigate('/admin/events')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <CalendarDays size={16} />
            Events
          </button>
          <button
            onClick={() => navigate('/admin/event-gallery')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <Images size={16} />
            Event Gallery
          </button>
          <button
            onClick={() => navigate('/admin/photo-gallery')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <Camera size={16} />
            Photo Gallery
          </button>
          <button
            onClick={() => navigate('/admin/video-gallery')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 mb-1 text-white/60 hover:bg-white/8 hover:text-white"
          >
            <Video size={16} />
            Video Gallery
          </button>
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-white/10 space-y-1">
          <button
            onClick={() => setShowPasswordModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/8 hover:text-white transition-all"
          >
            <Key size={16} />
            Change Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-all"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Code2 size={16} className="text-blue-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base flex items-center gap-2">
                MCA Applications
                <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                  2026-27 Batch
                </span>
              </h1>
              <p className="text-xs text-gray-500">{filtered.length} total MCA enquiries</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              title="Refresh"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 bg-[#1a3a6e] hover:bg-[#152e58] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Download size={15} />
              Export CSV
            </button>
          </div>
        </header>

        {/* MCA Stats Strip */}
        <div className="bg-blue-50/60 border-b border-blue-100 px-6 py-3 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-blue-800">
            <GraduationCap size={15} className="text-blue-600" />
            <span className="font-semibold">Course:</span>
            <span>Master of Computer Applications (MCA) — AICTE Approved</span>
          </div>
          <div className="h-4 w-px bg-blue-200" />
          <div className="text-blue-700">
            Sources: <span className="font-semibold">MCA Page, Marquee Ticker</span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by name, email, or phone..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/20 focus:border-[#1a3a6e]"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => { setStatusFilter(e.target.value as any); setPage(1); }}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/20 focus:border-[#1a3a6e] bg-white"
            >
              {STATUS_FILTER_OPTIONS.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-6 py-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Mobile</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Specialization</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-gray-200 border-t-[#1a3a6e] rounded-full animate-spin" />
                        <p className="text-gray-400 text-sm">Loading MCA applications...</p>
                      </div>
                    </td>
                  </tr>
                ) : paginated.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                          <GraduationCap size={24} className="text-blue-400" />
                        </div>
                        <p className="text-gray-500 text-sm font-medium">No MCA applications found</p>
                        <p className="text-gray-400 text-xs max-w-xs">
                          {search || statusFilter !== 'All Statuses'
                            ? 'Try adjusting your filters'
                            : 'MCA applications from the website will appear here automatically'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginated.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${
                        i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-4 py-3.5 text-gray-700 whitespace-nowrap">{getDate(row)}</td>
                      <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{getTime(row)}</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-900">{getName(row)}</td>
                      <td className="px-4 py-3.5 text-gray-700">{getContact(row)}</td>
                      <td className="px-4 py-3.5 text-gray-600 max-w-[180px] truncate">{getEmail(row)}</td>
                      <td className="px-4 py-3.5 text-gray-600 max-w-[160px] truncate text-xs">
                        {row.specialization || '—'}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusBadge(row.status)}`}>
                          {row.status || 'Not Contacted'}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <button
                          onClick={() => setSelectedLead(row)}
                          className="inline-flex items-center gap-1.5 text-[#1a3a6e] hover:text-blue-700 font-medium text-sm hover:underline transition-colors"
                        >
                          <Eye size={14} />
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500">
                Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                      page === p
                        ? 'bg-[#1a3a6e] text-white'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  ›
                </button>
              </div>
            </div>
          )}

          {!loading && (
            <p className="text-center text-xs text-gray-400 mt-3">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} MCA records
            </p>
          )}
        </div>
      </main>

      {/* Lead Details Modal */}
      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          table="apply_online_enquiries"
          onClose={() => setSelectedLead(null)}
          onSaved={fetchData}
        />
      )}

      {/* Change Password Modal */}
      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
    </div>
  );
};

export default MCAAdminDashboard;
