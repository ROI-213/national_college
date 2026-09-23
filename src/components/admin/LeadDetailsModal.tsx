import React, { useState, useEffect } from 'react';
import { X, Save, Calendar, FileText, Phone, Mail, User, Clock, Tag, MapPin, GraduationCap } from 'lucide-react';
import { supabase, EnquiryStatus } from '@/lib/supabase';
import { format } from 'date-fns';

interface LeadModalProps {
  lead: Record<string, any>;
  table: 'home_enquiries' | 'apply_online_enquiries' | 'contact_enquiries';
  onClose: () => void;
  onSaved: () => void;
}

const STATUS_OPTIONS: { value: EnquiryStatus; color: string }[] = [
  { value: 'Not Contacted', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'Called', color: 'bg-blue-100 text-blue-800' },
  { value: 'Interested', color: 'bg-green-100 text-green-800' },
  { value: 'Not Interested', color: 'bg-red-100 text-red-800' },
  { value: 'Admitted', color: 'bg-purple-100 text-purple-800' },
  { value: 'Follow Up', color: 'bg-orange-100 text-orange-800' },
];

export function getStatusBadge(status: string) {
  const found = STATUS_OPTIONS.find(s => s.value === status);
  return found?.color || 'bg-gray-100 text-gray-700';
}

const LeadDetailsModal: React.FC<LeadModalProps> = ({ lead, table, onClose, onSaved }) => {
  const [status, setStatus] = useState<EnquiryStatus>(lead.status || 'Not Contacted');
  const [dateFirstContacted, setDateFirstContacted] = useState(lead.date_of_first_contacted || '');
  const [nextFollowUp, setNextFollowUp] = useState(
    lead.next_follow_up ? lead.next_follow_up.split('T')[0] : ''
  );
  const [followUpTime, setFollowUpTime] = useState(
    lead.next_follow_up ? lead.next_follow_up.split('T')[1]?.slice(0, 5) : '10:00'
  );
  const [notes, setNotes] = useState(lead.notes || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(false);

  const fetchDocuments = async () => {
    if (table !== 'apply_online_enquiries' || !lead?.id) return;
    setLoadingDocs(true);
      console.log('Fetching documents for lead id', lead.id);
      const { data, error } = await supabase
        .from('enquiry_documents')
        .select('*')
        .eq('lead_id', lead.id);
      console.log('Raw docs data', data, error);
      if (!error && data) {
        const docs = data.map((doc: any) => {
          const { data: urlData } = supabase.storage
            .from('enquiry-documents')
            .getPublicUrl(doc.file_path);
          return {
            ...doc,
            file_url: doc.file_url || urlData?.publicUrl,
          };
        });
        setDocuments(docs);
        console.log('Documents state updated', docs);
      } else if (error) {
        console.error('Error fetching lead documents:', error);
      }
    setLoadingDocs(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, [lead?.id, table]);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
      window.open(url, '_blank');
    }
  };

  const getName = () => {
    if (table === 'contact_enquiries') {
      return `${lead.first_name || ''} ${lead.last_name || ''}`.trim() || 'N/A';
    }
    return lead.name || lead.full_name || 'N/A';
  };

  const getPhone = () => lead.phone || lead.mobile || 'N/A';
  const getEmail = () => lead.email || 'N/A';
  const getMessage = () => lead.message || lead.subject || lead.course || 'N/A';
  const getSource = () => lead.source || 'home';

  const getSubmittedDate = () => {
    if (!lead.created_at) return 'N/A';
    try {
      return format(new Date(lead.created_at), 'dd-MM-yyyy hh:mm a');
    } catch {
      return lead.created_at;
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const nextFollowUpFull = nextFollowUp
      ? `${nextFollowUp}T${followUpTime || '10:00'}:00`
      : null;

    const { error } = await supabase
      .from(table)
      .update({
        status,
        date_of_first_contacted: dateFirstContacted || null,
        next_follow_up: nextFollowUpFull,
        notes,
      })
      .eq('id', lead.id);

    setSaving(false);
    if (!error) {
      setSaved(true);
      setTimeout(() => {
        onSaved();
        onClose();
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900">Lead Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Details Section (2/3 width) */}
          <div className="md:col-span-2 space-y-6">
            {/* Lead Info Grid */}
            <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <User size={12} />
                  <span>Name:</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{getName()}</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <Mail size={12} />
                  <span>Email:</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm break-all">{getEmail()}</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <Phone size={12} />
                  <span>Phone:</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{getPhone()}</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <Tag size={12} />
                  <span>Source:</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm capitalize">{getSource()}</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <Clock size={12} />
                  <span>Submitted:</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{getSubmittedDate()}</p>
              </div>

              {/* Custom fields for Home Enquiries */}
              {table === 'home_enquiries' && (
                <>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <GraduationCap size={12} />
                      <span>Program:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.program || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Calendar size={12} />
                      <span>DOB:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.dob || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <MapPin size={12} />
                      <span>Address:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm whitespace-pre-line">{lead.address || '—'}</p>
                  </div>
                </>
              )}

              {/* Custom fields for Contact Enquiries */}
              {table === 'contact_enquiries' && lead.subject && (
                <div className="col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                    <Tag size={12} />
                    <span>Subject:</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{lead.subject || '—'}</p>
                </div>
              )}

              <div className="col-span-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <FileText size={12} />
                  <span>Message:</span>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">{getMessage()}</p>
              </div>
            </div>

            {/* Additional Application Details */}
            {table === 'apply_online_enquiries' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <User size={14} className="text-[#1a3a6e]" />
                  Application Details
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <User size={12} />
                      <span>Gender:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.gender || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Calendar size={12} />
                      <span>DOB:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.dob || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <FileText size={12} />
                      <span>Aadhaar:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.aadhaar || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Category:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.category || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Nationality:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.nationality || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Religion:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.religion || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Caste:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.caste || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Blood Group:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.blood_group || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Phone size={12} />
                      <span>Alternate Contact:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.alt_contact || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <User size={12} />
                      <span>Parent Name:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.parent_name || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Phone size={12} />
                      <span>Parent Contact:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.parent_contact || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Parent Occupation:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.parent_occupation || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Annual Income:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.annual_income || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Permanent Address:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm whitespace-pre-line">{lead.permanent_address || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Correspondence Address:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm whitespace-pre-line">{lead.correspondence_address || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>10th Board:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.tenth_board || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>10th Year:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.tenth_year || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>10th %:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.tenth_percentage || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>12th Board:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.twelfth_board || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>12th Year:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.twelfth_year || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>12th Stream:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.twelfth_stream || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>12th %:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.twelfth_percentage || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Subjects Studied:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm whitespace-pre-line">{lead.subjects_studied || '—'}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Register Number:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.register_number || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Course:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.course || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Specialization:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.specialization || '—'}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                      <Tag size={12} />
                      <span>Medium:</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{lead.medium || '—'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Documents Section */}
            {table === 'apply_online_enquiries' && (
              <div className="border-t border-gray-100 pt-5">
                <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText size={16} className="text-[#1a3a6e]" />
                  Documents
                </label>
                {loadingDocs ? (
                  <div className="flex items-center gap-2 py-4 text-gray-400 text-sm">
                    <div className="w-4 h-4 border-2 border-gray-200 border-t-[#1a3a6e] rounded-full animate-spin" />
                    Loading documents...
                  </div>
                ) : documents.length === 0 ? (
                  <p className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    No documents uploaded.
                  </p>
                ) : (
                  <div className="space-y-2.5">
                    {documents.map((doc) => {
                      const formattedSize = doc.file_size > 1024 * 1024
                        ? `${(doc.file_size / (1024 * 1024)).toFixed(2)} MB`
                        : `${(doc.file_size / 1024).toFixed(1)} KB`;

                      const isImage = doc.mime_type?.startsWith('image/');

                      return (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-all"
                        >
                          <div className="flex items-center gap-3 overflow-hidden mr-2">
                            <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                              {isImage ? (
                                <span className="text-lg">🖼️</span>
                              ) : doc.mime_type === 'application/pdf' ? (
                                <span className="text-lg">📄</span>
                              ) : (
                                <span className="text-lg">💾</span>
                              )}
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-sm font-semibold text-gray-900 truncate" title={doc.file_name}>
                                {doc.file_name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {formattedSize} • {doc.mime_type?.split('/').pop()?.toUpperCase()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <a
                              href={doc.file_url || doc.file_path || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                            >
                              View
                            </a>
                            <button
                              onClick={() => handleDownload(doc.file_url, doc.file_name)}
                              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                              type="button"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Admin Actions Section (1/3 width) */}
          <div className="space-y-5 md:border-l md:border-gray-100 md:pl-6">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2 md:mt-0 mt-4">
              <Tag size={14} className="text-[#1a3a6e]" />
              Status & Notes
            </h3>
            
            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <div className="relative">
                <select
                  value={status}
                  onChange={e => setStatus(e.target.value as EnquiryStatus)}
                  className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] bg-white"
                >
                  {STATUS_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.value}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date of First Contacted */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date of First Contacted
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  value={dateFirstContacted}
                  onChange={e => setDateFirstContacted(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e]"
                />
              </div>
            </div>

            {/* Next Follow-up */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Next Follow-up
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={nextFollowUp}
                    onChange={e => setNextFollowUp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="time"
                    value={followUpTime}
                    onChange={e => setFollowUpTime(e.target.value)}
                    className="pl-3 pr-3 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] w-32"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Add interaction notes..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] resize-none"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving || saved}
              className="w-full bg-gradient-to-r from-[#1a3a6e] to-[#2557a7] hover:from-[#152e58] hover:to-[#1e4a8a] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </>
              ) : saved ? (
                <>
                  <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  Saved!
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsModal;
