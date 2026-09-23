import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, LogOut, Key, Code2, FileText, MessageSquare,
  Images, CalendarDays, Plus, Pencil, Trash2, X, Save, Loader2,
  ExternalLink, CheckCircle2, AlertCircle, RefreshCw, Eye, EyeOff,
} from 'lucide-react';
import {
  EventRecord, fetchAllEventsFromDB, createEvent, updateEvent,
  deleteEvent, generateSlug, parseDateToSortDate, getMonthYear,
} from '@/services/eventsService';
import ChangePasswordModal from '@/components/admin/ChangePasswordModal';
import { useToast } from '@/components/ui/use-toast';

const SESSION_KEY = 'ncb_admin_session';

// ─── Sidebar Link ─────────────────────────────────────────────────────────────
const SidebarLink: React.FC<{
  icon: React.ElementType; label: string; onClick: () => void; active?: boolean;
}> = ({ icon: Icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-1 ${
      active ? 'bg-white/15 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Icon size={16} />
    {label}
    {active && <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full" />}
  </button>
);

// ─── Empty form state ─────────────────────────────────────────────────────────
function emptyForm(): Partial<EventRecord> {
  return {
    slug: '',
    title: '',
    page_title: '',
    badge: '',
    subtitle: '',
    date: '',
    sort_date: '',
    month_year: '',
    time: '',
    venue: '',
    description: '',
    paragraphs: [''],
    is_visible: true,
  };
}

// ─── Main Component ───────────────────────────────────────────────────────────
const EventManager: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  // Modal state
  const [showForm, setShowForm] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<EventRecord>>(emptyForm());
  const [confirmDelete, setConfirmDelete] = useState<EventRecord | null>(null);

  // Auth guard
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== 'authenticated') {
      navigate('/admin');
    }
  }, [navigate]);

  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchAllEventsFromDB();
      setEvents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadEvents(); }, [loadEvents]);

  // Listen for updates from Gallery manager
  useEffect(() => {
    const handler = () => loadEvents();
    window.addEventListener('events-updated', handler);
    return () => window.removeEventListener('events-updated', handler);
  }, [loadEvents]);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/admin');
  };

  // ── Form helpers ──
  const handleFieldChange = (field: keyof EventRecord, value: any) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      // Auto-derive fields when title changes
      if (field === 'title') {
        updated.slug = generateSlug(value);
        updated.page_title = value;
        updated.subtitle = value;
        updated.badge = value;
      }
      // Auto-derive sort_date and month_year when date or time changes
      if (field === 'date' || field === 'time') {
        const dateVal = field === 'date' ? value : (prev.date || '');
        const timeVal = field === 'time' ? value : (prev.time || '10:00');
        if (dateVal) {
          updated.sort_date = parseDateToSortDate(dateVal, timeVal);
          updated.month_year = getMonthYear(updated.sort_date);
        }
      }
      return updated;
    });
  };

  const handleParagraphChange = (index: number, value: string) => {
    setForm(prev => {
      const paras = [...(prev.paragraphs || [''])];
      paras[index] = value;
      return { ...prev, paragraphs: paras };
    });
  };

  const addParagraph = () => {
    setForm(prev => ({ ...prev, paragraphs: [...(prev.paragraphs || ['']), ''] }));
  };

  const removeParagraph = (index: number) => {
    setForm(prev => {
      const paras = [...(prev.paragraphs || [''])];
      paras.splice(index, 1);
      return { ...prev, paragraphs: paras.length > 0 ? paras : [''] };
    });
  };

  // ── Open form for Add ──
  const openAddForm = () => {
    setEditingSlug(null);
    setForm(emptyForm());
    setShowForm(true);
  };

  // ── Open form for Edit ──
  const openEditForm = (event: EventRecord) => {
    setEditingSlug(event.slug);
    setForm({
      ...event,
      paragraphs: event.paragraphs || [''],
    });
    setShowForm(true);
  };

  // ── Save (Create or Update) ──
  const handleSave = async () => {
    // Validate required fields
    if (!form.title?.trim()) { toast({ title: 'Title is required', variant: 'destructive' }); return; }
    if (!form.date?.trim()) { toast({ title: 'Date is required', variant: 'destructive' }); return; }
    if (!form.venue?.trim()) { toast({ title: 'Venue is required', variant: 'destructive' }); return; }
    if (!form.description?.trim()) { toast({ title: 'Short description is required', variant: 'destructive' }); return; }

    setSaving(true);
    try {
      const payload: Omit<EventRecord, 'id' | 'created_at' | 'updated_at'> = {
        slug: form.slug || generateSlug(form.title || ''),
        title: form.title!,
        page_title: form.page_title || form.title!,
        badge: form.badge || form.title!,
        subtitle: form.subtitle || form.title!,
        date: form.date!,
        sort_date: form.sort_date || parseDateToSortDate(form.date!, form.time || '10:00'),
        month_year: form.month_year || getMonthYear(form.sort_date || parseDateToSortDate(form.date!, form.time || '10:00')),
        time: form.time || '',
        venue: form.venue!,
        description: form.description!,
        paragraphs: (form.paragraphs || ['']).filter(p => p.trim() !== ''),
        is_visible: form.is_visible !== false,
      };

      if (editingSlug) {
        await updateEvent(editingSlug, payload);
        toast({ title: 'Event Updated!', description: `"${payload.title}" has been updated successfully.` });
      } else {
        await createEvent(payload);
        toast({ title: 'Event Created!', description: `"${payload.title}" is now live on the website.` });
      }

      setShowForm(false);
      setEditingSlug(null);
      setForm(emptyForm());
      await loadEvents();
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Save Failed', description: err.message || 'An error occurred.', variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ──
  const handleDelete = async (event: EventRecord) => {
    setDeleting(event.slug);
    try {
      await deleteEvent(event.slug);
      toast({ title: 'Event Deleted', description: `"${event.title}" has been removed.` });
      setConfirmDelete(null);
      await loadEvents();
    } catch (err: any) {
      toast({ title: 'Delete Failed', description: err.message, variant: 'destructive' });
    } finally {
      setDeleting(null);
    }
  };

  // ── Toggle visibility ──
  const handleToggleVisibility = async (event: EventRecord) => {
    try {
      await updateEvent(event.slug, { is_visible: !event.is_visible });
      await loadEvents();
      toast({
        title: event.is_visible ? 'Event Hidden' : 'Event Visible',
        description: `"${event.title}" is now ${event.is_visible ? 'hidden from' : 'visible on'} the website.`,
      });
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── Sidebar ── */}
      <aside className="w-56 bg-[#1a1f2e] text-white flex flex-col flex-shrink-0">
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

        <nav className="flex-1 p-3">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-2">Enquiries</p>
          <SidebarLink icon={FileText} label="Apply Online" onClick={() => navigate('/admin/dashboard')} />
          <SidebarLink icon={MessageSquare} label="Contact Page" onClick={() => navigate('/admin/dashboard')} />

          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-4">Programmes</p>
          <SidebarLink icon={Code2} label="MCA Applications" onClick={() => navigate('/admin/mca-applications')} />

          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-3 mb-2 mt-4">Content</p>
          <SidebarLink icon={CalendarDays} label="Events" onClick={() => navigate('/admin/events')} active />
          <SidebarLink icon={Images} label="Event Gallery" onClick={() => navigate('/admin/event-gallery')} />
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <button onClick={() => setShowPasswordModal(true)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all">
            <Key size={16} />Change Password
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-all">
            <LogOut size={16} />Logout
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <CalendarDays size={16} className="text-indigo-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base">Events Manager</h1>
              <p className="text-xs text-gray-500">{events.length} events live on the website</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={loadEvents}
              disabled={loading}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              title="Refresh"
            >
              <RefreshCw size={15} className={loading ? 'animate-spin text-indigo-500' : ''} />
            </button>
            <a
              href="/events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-200"
            >
              <ExternalLink size={13} />View Events Page
            </a>
            <button
              onClick={openAddForm}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              <Plus size={14} />Add New Event
            </button>
          </div>
        </header>

        {/* Events List */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <Loader2 size={32} className="animate-spin text-indigo-500 mb-3" />
              <p className="text-sm">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <CalendarDays size={40} className="opacity-30 mb-4" />
              <p className="text-base font-semibold text-gray-600 mb-1">No Events Yet</p>
              <p className="text-sm text-gray-400 mb-6">Click "Add New Event" to create your first event.</p>
              <button onClick={openAddForm} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
                <Plus size={15} />Add New Event
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-w-5xl">
              {events.map(event => (
                <div
                  key={event.slug}
                  className={`bg-white rounded-xl border shadow-sm p-4 flex items-start gap-4 transition-all ${
                    event.is_visible ? 'border-gray-200' : 'border-gray-200 opacity-60'
                  }`}
                >
                  {/* Date badge */}
                  <div className="flex-shrink-0 text-center bg-indigo-50 border border-indigo-100 rounded-xl px-3 py-2 min-w-[64px]">
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                      {event.month_year?.split(' ')[0]?.substring(0, 3) || ''}
                    </p>
                    <p className="text-2xl font-black text-indigo-700 leading-none">
                      {event.date?.match(/\d+/)?.[0] || ''}
                    </p>
                    <p className="text-[10px] text-indigo-400">
                      {event.month_year?.split(' ')[1] || ''}
                    </p>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-sm leading-tight truncate">{event.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {event.time && <span>{event.time} · </span>}
                          <span>{event.venue}</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{event.description}</p>
                      </div>

                      {!event.is_visible && (
                        <span className="flex-shrink-0 text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase">
                          Hidden
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 mt-3">
                      <a
                        href={event.slug === 'college-day-2026' ? '/events/college-day-2026' : `/events/${event.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors border border-gray-200"
                      >
                        <ExternalLink size={11} />View
                      </a>
                      <button
                        onClick={() => openEditForm(event)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors border border-blue-100"
                      >
                        <Pencil size={11} />Edit
                      </button>
                      <button
                        onClick={() => handleToggleVisibility(event)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 hover:bg-amber-100 text-amber-700 transition-colors border border-amber-100"
                      >
                        {event.is_visible ? <EyeOff size={11} /> : <Eye size={11} />}
                        {event.is_visible ? 'Hide' : 'Show'}
                      </button>
                      <button
                        onClick={() => setConfirmDelete(event)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-red-50 hover:bg-red-100 text-red-600 transition-colors border border-red-100"
                      >
                        <Trash2 size={11} />Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Add / Edit Event Modal ── */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-end overflow-hidden">
          <div className="w-full max-w-2xl h-full bg-white flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white flex-shrink-0">
              <div>
                <h2 className="font-bold text-gray-900 text-base">
                  {editingSlug ? 'Edit Event' : 'Add New Event'}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {editingSlug ? 'Update event details' : 'Fill in the details to create a new event'}
                </p>
              </div>
              <button
                onClick={() => { setShowForm(false); setEditingSlug(null); setForm(emptyForm()); }}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  Event Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.title || ''}
                  onChange={e => handleFieldChange('title', e.target.value)}
                  placeholder="e.g. Annual Sports Day 2026"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              {/* URL Slug */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  URL Slug <span className="text-gray-400 font-normal">(auto-generated)</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-2 rounded-lg border border-gray-200 whitespace-nowrap">/events/</span>
                  <input
                    type="text"
                    value={form.slug || ''}
                    onChange={e => handleFieldChange('slug', e.target.value)}
                    placeholder="annual-sports-day-2026"
                    className="flex-1 px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Badge & Subtitle in grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Badge / Category Tag
                  </label>
                  <input
                    type="text"
                    value={form.badge || ''}
                    onChange={e => handleFieldChange('badge', e.target.value)}
                    placeholder="e.g. Sports · Annual Day 2026"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Subtitle (Hero Text)
                  </label>
                  <input
                    type="text"
                    value={form.subtitle || ''}
                    onChange={e => handleFieldChange('subtitle', e.target.value)}
                    placeholder="Short description for the hero"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Date & Time & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.date || ''}
                    onChange={e => handleFieldChange('date', e.target.value)}
                    placeholder="e.g. 15th Aug 2026"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Time
                  </label>
                  <input
                    type="text"
                    value={form.time || ''}
                    onChange={e => handleFieldChange('time', e.target.value)}
                    placeholder="e.g. 10:00 AM"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Venue <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.venue || ''}
                    onChange={e => handleFieldChange('venue', e.target.value)}
                    placeholder="e.g. College Quadrangle"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Auto-derived info */}
              {form.sort_date && (
                <div className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                  📅 Sort date: <strong>{form.sort_date}</strong> · Month: <strong>{form.month_year}</strong>
                </div>
              )}

              {/* Short Description */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  Short Description <span className="text-red-500">*</span>
                  <span className="text-gray-400 font-normal ml-1">(shown on Events listing card)</span>
                </label>
                <textarea
                  value={form.description || ''}
                  onChange={e => handleFieldChange('description', e.target.value)}
                  rows={2}
                  placeholder="A brief summary of the event (shown on the events listing page)"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                />
              </div>

              {/* Paragraphs */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  Event Description Paragraphs
                  <span className="text-gray-400 font-normal ml-1">(shown on event detail page)</span>
                </label>
                <div className="space-y-2">
                  {(form.paragraphs || ['']).map((para, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="flex-shrink-0 mt-2.5 text-[11px] font-bold text-gray-400 w-5 text-center">
                        {idx + 1}
                      </span>
                      <textarea
                        value={para}
                        onChange={e => handleParagraphChange(idx, e.target.value)}
                        rows={3}
                        placeholder={idx === 0 ? 'First paragraph (shown in bold)...' : `Paragraph ${idx + 1}...`}
                        className="flex-1 px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                      />
                      {(form.paragraphs || ['']).length > 1 && (
                        <button
                          onClick={() => removeParagraph(idx)}
                          className="mt-2 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addParagraph}
                    className="w-full py-2 border-2 border-dashed border-gray-200 hover:border-indigo-300 rounded-lg text-xs text-gray-500 hover:text-indigo-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus size={12} />Add Paragraph
                  </button>
                </div>
              </div>

              {/* Visibility */}
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Event Visibility</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {form.is_visible ? 'Event is visible on the public events page' : 'Event is hidden from the public website'}
                  </p>
                </div>
                <button
                  onClick={() => handleFieldChange('is_visible', !form.is_visible)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    form.is_visible ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                      form.is_visible ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Info alert */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">
                  After saving, the event will appear immediately on the Events page. To add gallery photos, go to <strong>Event Gallery</strong> in the sidebar and select this event.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3 flex-shrink-0">
              <button
                onClick={() => { setShowForm(false); setEditingSlug(null); setForm(emptyForm()); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-all disabled:opacity-50"
              >
                {saving ? (
                  <><Loader2 size={14} className="animate-spin" />Saving...</>
                ) : (
                  <><Save size={14} />{editingSlug ? 'Update Event' : 'Create Event'}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 size={18} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Delete Event?</h3>
                <p className="text-xs text-gray-500">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 mb-5">
              "{confirmDelete.title}"
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                disabled={deleting === confirmDelete.slug}
                className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {deleting === confirmDelete.slug ? (
                  <><Loader2 size={14} className="animate-spin" />Deleting...</>
                ) : (
                  'Yes, Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPasswordModal && <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />}
    </div>
  );
};

export default EventManager;
