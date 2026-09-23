import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  GraduationCap, LogOut, Key, Code2, FileText, MessageSquare,
  Images, CalendarDays, ChevronLeft, ChevronRight, Plus, Trash2, Check,
  ImageIcon, AlertCircle, Upload, X, Loader2,
  FolderOpen, CheckCircle2, ArrowRight, ExternalLink, Save, RefreshCw,
} from 'lucide-react';
import { allEvents, EventData, EventGalleryImage } from '@/data/eventsData';
import { fetchEventGallery, uploadEventImageFile, saveEventGallery, fetchAllEventGalleryCounts } from '@/services/eventGalleryService';
import ChangePasswordModal from '@/components/admin/ChangePasswordModal';
import { useToast } from '@/components/ui/use-toast';

const SESSION_KEY = 'ncb_admin_session';
const MAX_SIZE_KB = 150;
const TARGET_SIZE_BYTES = MAX_SIZE_KB * 1024;

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

// ─── Image Compression (Canvas API) ──────────────────────────────────────────
async function compressImage(file: File): Promise<{ blob: Blob; dataUrl: string; sizeKB: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const canvas = document.createElement('canvas');
      let quality = 0.85;
      let width = img.width;
      let height = img.height;

      // Scale down if extremely large, maintaining aspect ratio
      const MAX_W = 1200;
      if (width > MAX_W) {
        height = Math.round((height * MAX_W) / width);
        width = MAX_W;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, width, height);

      const tryCompress = (q: number) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error('Compression failed'));
            if (blob.size <= TARGET_SIZE_BYTES || q <= 0.35) {
              const reader = new FileReader();
              reader.onloadend = () => resolve({
                blob,
                dataUrl: reader.result as string,
                sizeKB: Math.round(blob.size / 1024),
              });
              reader.readAsDataURL(blob);
            } else {
              let newQ = q - 0.08;
              if (newQ < 0.6 && canvas.width > 900) {
                const newW = Math.round(canvas.width * 0.85);
                const newH = Math.round(canvas.height * 0.85);
                canvas.width = newW;
                canvas.height = newH;
                ctx.drawImage(img, 0, 0, newW, newH);
              }
              tryCompress(Math.max(0.35, newQ));
            }
          },
          'image/jpeg',
          q
        );
      };
      tryCompress(quality);
    };
    img.onerror = reject;
    img.src = objectUrl;
  });
}

// ─── Main Component ───────────────────────────────────────────────────────────
const EventGalleryManager: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string>(allEvents[0]?.slug || '');
  const [images, setImages] = useState<EventGalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [search, setSearch] = useState('');
  const [galleryCounts, setGalleryCounts] = useState<Record<string, number>>({});

  // Uploading state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressText, setUploadProgressText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load counts for all events
  const loadCounts = useCallback(async () => {
    try {
      const counts = await fetchAllEventGalleryCounts();
      setGalleryCounts(counts);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadCounts();
    window.addEventListener('event-gallery-updated', loadCounts);
    return () => window.removeEventListener('event-gallery-updated', loadCounts);
  }, [loadCounts]);

  // Auth guard
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== 'authenticated') {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/admin');
  };

  const selectedEvent = allEvents.find(e => e.slug === selectedSlug) || allEvents[0];

  // Load images whenever selectedSlug changes
  const loadGalleryForSlug = useCallback(async (slug: string) => {
    if (!slug) return;
    setLoading(true);
    setSavedSuccess(false);
    try {
      const fetched = await fetchEventGallery(slug);
      setImages(fetched);
    } catch (err) {
      console.error(err);
      const fallback = allEvents.find(e => e.slug === slug)?.images || [];
      setImages(fallback);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedSlug) {
      loadGalleryForSlug(selectedSlug);
    }
  }, [selectedSlug, loadGalleryForSlug]);

  // Filter events
  const filteredEvents = allEvents.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.slug.toLowerCase().includes(search.toLowerCase())
  );

  // ── Handle Upload & Compress ──
  const handleUploadFiles = async (files: File[]) => {
    const imgFiles = files.filter(f => f.type.startsWith('image/'));
    if (!imgFiles.length) {
      toast({
        title: 'No Images Selected',
        description: 'Please select valid image files (JPG, PNG, WEBP).',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    const newItems: EventGalleryImage[] = [];

    try {
      for (let i = 0; i < imgFiles.length; i++) {
        const file = imgFiles[i];
        setUploadProgressText(`Compressing image ${i + 1} of ${imgFiles.length}: ${file.name}...`);
        
        // 1. Compress to < 150KB
        const compressed = await compressImage(file);

        setUploadProgressText(`Uploading image ${i + 1} of ${imgFiles.length} (${compressed.sizeKB} KB)...`);
        
        // 2. Upload to Supabase Storage
        const publicUrl = await uploadEventImageFile(selectedEvent.slug, compressed.blob, file.name);

        const cleanAlt = file.name
          .replace(/\.[^.]+$/, '')
          .replace(/[-_]+/g, ' ')
          .trim();

        newItems.push({
          src: publicUrl,
          alt: cleanAlt || `${selectedEvent.title} photo`,
        });
      }

      const updated = [...images, ...newItems];
      setImages(updated);

      toast({
        title: 'Images Uploaded & Added',
        description: `${newItems.length} image(s) compressed and uploaded. Click "Save to Website" to publish.`,
      });
    } catch (error: any) {
      console.error(error);
      toast({
        title: 'Upload Error',
        description: error.message || 'Could not upload image. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      setUploadProgressText('');
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleUploadFiles(Array.from(e.target.files));
    }
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleUploadFiles(Array.from(e.dataTransfer.files));
    }
  };

  // ── Save to Supabase & Live Website ──
  const handleSaveToWebsite = async () => {
    if (!selectedEvent) return;
    setSaving(true);
    setSavedSuccess(false);

    try {
      // Filter out empty rows
      const validImages = images.filter(img => img.src && img.src.trim() !== '');
      await saveEventGallery(selectedEvent.slug, validImages);

      setImages(validImages);
      setGalleryCounts(prev => ({ ...prev, [selectedEvent.slug]: validImages.length }));
      setSavedSuccess(true);
      toast({
        title: 'Gallery Saved Live!',
        description: `All ${validImages.length} images for "${selectedEvent.title}" are now live on the website!`,
      });

      setTimeout(() => setSavedSuccess(false), 6000);
    } catch (err: any) {
      console.error(err);
      toast({
        title: 'Failed to Save',
        description: err.message || 'An error occurred while saving. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  // ── Row Reorder & Edit ──
  const handleImageChange = (index: number, field: keyof EventGalleryImage, value: string) => {
    setImages(prev => prev.map((img, i) => i === index ? { ...img, [field]: value } : img));
    setSavedSuccess(false);
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setSavedSuccess(false);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setImages(prev => {
      const copy = [...prev];
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return copy;
    });
    setSavedSuccess(false);
  };

  const handleMoveDown = (index: number) => {
    if (index === images.length - 1) return;
    setImages(prev => {
      const copy = [...prev];
      [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
      return copy;
    });
    setSavedSuccess(false);
  };

  const handleAddManualRow = () => {
    setImages(prev => [...prev, { src: '', alt: '' }]);
    setSavedSuccess(false);
  };

  const liveEventUrl = selectedEvent.slug === 'college-day-2026'
    ? '/events/college-day-2026'
    : `/events/${selectedEvent.slug}`;

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
          <SidebarLink icon={CalendarDays} label="Events" onClick={() => navigate('/admin/events')} />
          <SidebarLink icon={Images} label="Event Gallery" onClick={() => navigate('/admin/event-gallery')} active />
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <button
            onClick={() => setShowPasswordModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-all"
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

      {/* ── Main Area ── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Images size={16} className="text-indigo-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base">Event Gallery Manager</h1>
              <p className="text-xs text-gray-500">Upload photos, compress to &le;150KB, and save live to website</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={liveEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-200"
            >
              <ExternalLink size={13} />
              View on Website
            </a>

            <button
              onClick={handleSaveToWebsite}
              disabled={saving || isUploading}
              className="inline-flex items-center gap-2 bg-[#1a3a6e] hover:bg-[#142e57] text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Saving Live...
                </>
              ) : savedSuccess ? (
                <>
                  <Check size={14} className="text-green-300" />
                  Saved!
                </>
              ) : (
                <>
                  <Save size={14} />
                  Save to Website
                </>
              )}
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* ── Event List (Left Panel) ── */}
          <div className="w-72 border-r border-gray-200 bg-white flex flex-col">
            <div className="p-3 border-b border-gray-100">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search events..."
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredEvents.map(event => (
                <button
                  key={event.slug}
                  onClick={() => setSelectedSlug(event.slug)}
                  className={`w-full text-left px-4 py-3.5 border-b border-gray-100 transition-colors hover:bg-indigo-50/50 ${
                    selectedSlug === event.slug ? 'bg-indigo-50 border-l-4 border-l-indigo-600' : ''
                  }`}
                >
                  <p className={`text-sm font-semibold leading-tight ${selectedSlug === event.slug ? 'text-indigo-900' : 'text-gray-800'}`}>
                    {event.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">{event.date}</span>
                    <span className="text-xs text-gray-300">&middot;</span>
                    <span className="text-xs font-medium text-indigo-600">
                      {event.slug === selectedSlug ? images.length : (galleryCounts[event.slug] ?? event.images?.length ?? 0)} photos
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right Content Area ── */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Event Header Banner */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                  {selectedEvent.badge}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-2">{selectedEvent.title}</h2>
                <p className="text-xs text-gray-500 mt-0.5">{selectedEvent.date} &middot; {selectedEvent.time} &middot; {selectedEvent.venue}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => loadGalleryForSlug(selectedEvent.slug)}
                  disabled={loading}
                  title="Reload from database"
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <RefreshCw size={15} className={loading ? 'animate-spin text-indigo-600' : ''} />
                </button>
                <div className="text-right">
                  <p className="text-2xl font-black text-indigo-600">{images.length}</p>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Total Photos</p>
                </div>
              </div>
            </div>

            {/* Success alert banner */}
            {savedSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between text-green-800 text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span>
                    <strong>Changes saved live!</strong> The gallery photos for <strong>{selectedEvent.title}</strong> are now active on the public website.
                  </span>
                </div>
                <a
                  href={liveEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold underline text-green-900 hover:text-green-700 ml-4 whitespace-nowrap"
                >
                  View Live <ArrowRight size={13} />
                </a>
              </div>
            )}

            {/* ── 1. DRAG & DROP UPLOAD BOX ── */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <Upload size={16} className="text-indigo-600" />
                    Upload &amp; Add New Images
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Images are automatically compressed to &le;150KB with high visual quality and uploaded to storage.
                  </p>
                </div>
              </div>

              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                  isDragging
                    ? 'border-indigo-500 bg-indigo-50/70 scale-[0.99]'
                    : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/20'
                }`}
                onClick={() => !isUploading && fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  multiple
                  className="hidden"
                  onChange={handleFileInput}
                />

                {isUploading ? (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <Loader2 size={36} className="text-indigo-600 animate-spin" />
                    <p className="text-sm font-semibold text-gray-800">Processing &amp; Uploading Images...</p>
                    <p className="text-xs text-indigo-600 font-medium max-w-sm truncate">{uploadProgressText}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                      <Upload size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {isDragging ? 'Drop your images here' : 'Click to select or drag & drop event images'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        JPG, PNG, or WEBP &middot; Select multiple files at once &middot; Automatically optimized under 150KB
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Plus size={14} />
                      Choose Images from Computer
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* ── 2. CURRENT GALLERY LIST & REORDER ── */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <Images size={16} className="text-indigo-600" />
                    Gallery Images ({images.length})
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Drag, reorder, edit captions, and click "Save to Website" above.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddManualRow}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border border-gray-200"
                  >
                    <Plus size={13} />
                    Add URL Row
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {loading ? (
                  <div className="py-16 text-center text-gray-400">
                    <Loader2 size={28} className="animate-spin mx-auto text-indigo-500 mb-2" />
                    <p className="text-sm">Loading gallery images...</p>
                  </div>
                ) : images.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <ImageIcon size={36} className="mx-auto mb-2 opacity-40 text-gray-400" />
                    <p className="text-sm font-semibold text-gray-600">No images in this gallery yet</p>
                    <p className="text-xs text-gray-400 mt-1">Use the upload box above to add event photos</p>
                  </div>
                ) : (
                  images.map((img, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-gray-50/80 hover:bg-gray-100/60 rounded-xl border border-gray-200/80 transition-all"
                    >
                      {/* Reorder controls */}
                      <div className="flex flex-col gap-1 mt-1 flex-shrink-0">
                        <button
                          onClick={() => handleMoveUp(i)}
                          disabled={i === 0}
                          title="Move Up"
                          className="w-6 h-6 flex items-center justify-center rounded bg-white hover:bg-gray-200 disabled:opacity-25 disabled:cursor-not-allowed transition-colors border border-gray-200 shadow-xs"
                        >
                          <ChevronLeft size={13} className="rotate-90 text-gray-700" />
                        </button>
                        <span className="w-6 text-center text-[11px] text-gray-500 font-mono font-bold">
                          {i + 1}
                        </span>
                        <button
                          onClick={() => handleMoveDown(i)}
                          disabled={i === images.length - 1}
                          title="Move Down"
                          className="w-6 h-6 flex items-center justify-center rounded bg-white hover:bg-gray-200 disabled:opacity-25 disabled:cursor-not-allowed transition-colors border border-gray-200 shadow-xs"
                        >
                          <ChevronRight size={13} className="rotate-90 text-gray-700" />
                        </button>
                      </div>

                      {/* Image Thumbnail Preview */}
                      <div className="w-20 h-16 rounded-lg overflow-hidden bg-gray-200 border border-gray-300 flex-shrink-0 flex items-center justify-center relative group">
                        {img.src ? (
                          <img
                            src={img.src}
                            alt={img.alt || 'Preview'}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
                            }}
                          />
                        ) : (
                          <ImageIcon size={20} className="text-gray-400" />
                        )}
                        {img.src && (
                          <a
                            href={img.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-semibold transition-opacity"
                          >
                            View
                          </a>
                        )}
                      </div>

                      {/* Input fields */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                            Image URL / Path
                          </label>
                          <input
                            type="text"
                            value={img.src}
                            onChange={e => handleImageChange(i, 'src', e.target.value)}
                            placeholder="https://... or /events/..."
                            className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-mono bg-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                            Caption / Alt Text
                          </label>
                          <input
                            type="text"
                            value={img.alt}
                            onChange={e => handleImageChange(i, 'alt', e.target.value)}
                            placeholder="Describe what is in this photo..."
                            className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                          />
                        </div>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleRemoveImage(i)}
                        title="Delete photo"
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0 mt-3"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom save bar */}
              {images.length > 0 && (
                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {images.length} photo{images.length !== 1 ? 's' : ''} ready &middot; Don't forget to click save!
                  </span>

                  <button
                    onClick={handleSaveToWebsite}
                    disabled={saving || isUploading}
                    className="inline-flex items-center gap-2 bg-[#1a3a6e] hover:bg-[#142e57] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm disabled:opacity-50"
                  >
                    {saving ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Saving Live to Website...
                      </>
                    ) : (
                      <>
                        <Save size={14} />
                        Save to Website
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {showPasswordModal && <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />}
    </div>
  );
};

export default EventGalleryManager;
