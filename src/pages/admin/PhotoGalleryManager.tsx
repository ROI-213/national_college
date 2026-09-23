import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, LogOut, Key, Code2, FileText, MessageSquare,
  Images, CalendarDays, Camera, Video, Plus, Trash2, Check,
  ImageIcon, AlertCircle, Upload, X, Loader2, Search,
  ExternalLink, RefreshCw, Eye, Tag
} from 'lucide-react';
import {
  fetchGalleryPhotos,
  uploadGalleryPhotoFile,
  createGalleryPhoto,
  deleteGalleryPhoto,
  GALLERY_CATEGORIES,
  GalleryPhotoRecord
} from '@/services/mediaGalleryService';
import ChangePasswordModal from '@/components/admin/ChangePasswordModal';
import { useToast } from '@/components/ui/use-toast';

const SESSION_KEY = 'ncb_admin_session';
const MAX_SIZE_KB = 150;
const TARGET_SIZE_BYTES = MAX_SIZE_KB * 1024;

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

// ─── Image Compression (Canvas API to ≤150KB) ─────────────────────────────────
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

interface PendingUploadItem {
  id: string;
  originalFile: File;
  compressedBlob: Blob;
  previewUrl: string;
  sizeKB: number;
  originalSizeKB: number;
  title: string;
  category: string;
  status: 'idle' | 'uploading' | 'done' | 'error';
  errorMessage?: string;
}

const PhotoGalleryManager: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [photos, setPhotos] = useState<GalleryPhotoRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Upload modal & state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [pendingItems, setPendingItems] = useState<PendingUploadItem[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState('Events');
  const [customCategory, setCustomCategory] = useState('');
  const [isUploadingAll, setIsUploadingAll] = useState(false);

  // Delete modal state
  const [photoToDelete, setPhotoToDelete] = useState<GalleryPhotoRecord | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth check
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== 'authenticated') {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/admin');
  };

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGalleryPhotos();
      setPhotos(data);
    } catch (err: any) {
      toast({
        title: 'Error loading photos',
        description: err.message || 'Failed to fetch gallery photos',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  // Handle files selected for upload
  const handleFilesSelected = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsCompressing(true);

    const validFiles = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (validFiles.length === 0) {
      toast({
        title: 'Invalid files',
        description: 'Please select valid image files (JPEG, PNG, WEBP).',
        variant: 'destructive',
      });
      setIsCompressing(false);
      return;
    }

    const newPending: PendingUploadItem[] = [];

    for (const file of validFiles) {
      try {
        const { blob, dataUrl, sizeKB } = await compressImage(file);
        const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        const formattedTitle = nameWithoutExt
          .replace(/[_-]/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase());

        newPending.push({
          id: Math.random().toString(36).substring(2, 9),
          originalFile: file,
          compressedBlob: blob,
          previewUrl: dataUrl,
          sizeKB,
          originalSizeKB: Math.round(file.size / 1024),
          title: formattedTitle,
          category: defaultCategory === 'Custom' && customCategory.trim() ? customCategory.trim() : defaultCategory,
          status: 'idle',
        });
      } catch (err) {
        console.error('Compression error for', file.name, err);
      }
    }

    setPendingItems(prev => [...prev, ...newPending]);
    setIsCompressing(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemovePending = (id: string) => {
    setPendingItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdatePendingTitle = (id: string, title: string) => {
    setPendingItems(prev => prev.map(item => item.id === id ? { ...item, title } : item));
  };

  const handleUpdatePendingCategory = (id: string, category: string) => {
    setPendingItems(prev => prev.map(item => item.id === id ? { ...item, category } : item));
  };

  const handleUploadAllPending = async () => {
    if (pendingItems.length === 0) return;
    setIsUploadingAll(true);

    let successCount = 0;
    const remainingPending: PendingUploadItem[] = [];

    for (const item of pendingItems) {
      try {
        setPendingItems(prev => prev.map(p => p.id === item.id ? { ...p, status: 'uploading' } : p));
        
        // 1. Upload compressed blob
        const uploadFile = new File([item.compressedBlob], item.originalFile.name, {
          type: 'image/jpeg',
        });
        const publicUrl = await uploadGalleryPhotoFile(uploadFile);

        // 2. Insert into gallery_photos DB
        await createGalleryPhoto({
          title: item.title || 'Campus Photo',
          src: publicUrl,
          category: item.category || 'Events',
        });

        successCount++;
      } catch (err: any) {
        console.error('Failed uploading item:', item.title, err);
        remainingPending.push({
          ...item,
          status: 'error',
          errorMessage: err.message || 'Upload failed',
        });
      }
    }

    setIsUploadingAll(false);
    setPendingItems(remainingPending);

    if (successCount > 0) {
      toast({
        title: 'Photos Uploaded!',
        description: `Successfully added ${successCount} photo${successCount > 1 ? 's' : ''} to Photo Gallery.`,
      });
      await loadPhotos();
      if (remainingPending.length === 0) {
        setShowUploadModal(false);
      }
    } else {
      toast({
        title: 'Upload Failed',
        description: 'None of the photos could be uploaded. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteConfirm = async () => {
    if (!photoToDelete) return;
    setDeleting(true);
    try {
      await deleteGalleryPhoto(photoToDelete.id);
      toast({
        title: 'Photo Deleted',
        description: `"${photoToDelete.title}" has been removed from gallery.`,
      });
      setPhotos(prev => prev.filter(p => p.id !== photoToDelete.id));
      setPhotoToDelete(null);
    } catch (err: any) {
      toast({
        title: 'Delete Failed',
        description: err.message || 'Could not delete photo',
        variant: 'destructive',
      });
    } finally {
      setDeleting(false);
    }
  };

  // Categories list including custom ones found in photos
  const availableCategories = Array.from(
    new Set([
      'All',
      ...GALLERY_CATEGORIES.filter(c => c !== 'All'),
      ...photos.map(p => p.category).filter(Boolean),
    ])
  );

  // Filtered photos
  const filteredPhotos = photos.filter(photo => {
    const matchCat = selectedCategory === 'All' || photo.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = !search.trim() || 
      photo.title.toLowerCase().includes(search.toLowerCase()) ||
      photo.category?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
          <SidebarLink icon={Images} label="Event Gallery" onClick={() => navigate('/admin/event-gallery')} />
          <SidebarLink icon={Camera} label="Photo Gallery" onClick={() => navigate('/admin/photo-gallery')} active />
          <SidebarLink icon={Video} label="Video Gallery" onClick={() => navigate('/admin/video-gallery')} />
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
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Camera size={16} className="text-blue-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base">Photo Gallery Manager</h1>
              <p className="text-xs text-gray-500">
                Upload photos (&le;150KB auto-compression), manage categories, and update site gallery in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadPhotos}
              disabled={loading}
              title="Refresh photos"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
            </button>

            <a
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-200"
            >
              <ExternalLink size={13} />
              View on Website
            </a>

            <button
              onClick={() => {
                setPendingItems([]);
                setShowUploadModal(true);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#1a3a6e] hover:bg-[#142e57] text-white transition-all shadow-sm"
            >
              <Plus size={14} />
              Upload Photos
            </button>
          </div>
        </header>

        {/* Filter bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Category filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-2xl">
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1a3a6e] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${photos.length})` : ` (${photos.filter(p => p.category?.toLowerCase() === cat.toLowerCase()).length})`}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Photos Grid Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center text-gray-400">
              <Loader2 size={32} className="animate-spin text-blue-600 mb-2" />
              <p className="text-sm">Loading photo gallery...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="h-64 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                <ImageIcon size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-800">No photos found</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm">
                {search || selectedCategory !== 'All'
                  ? 'No photos match your filter criteria. Try clearing the search or category.'
                  : 'Start adding photos to showcase campus events, labs, drama, sports, and student activities.'}
              </p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
              >
                <Plus size={14} />
                Upload New Photos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                      <a
                        href={photo.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/90 text-gray-800 hover:bg-white rounded-lg transition-colors"
                        title="View Full Image"
                      >
                        <Eye size={15} />
                      </a>
                      <button
                        onClick={() => setPhotoToDelete(photo)}
                        className="p-1.5 bg-red-600/90 text-white hover:bg-red-600 rounded-lg transition-colors"
                        title="Delete Photo"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[10px] font-medium text-white rounded-md">
                      {photo.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug" title={photo.title}>
                      {photo.title}
                    </p>
                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                      <span>{photo.views || 0} views</span>
                      <button
                        onClick={() => setPhotoToDelete(photo)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Upload Photos Modal ── */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Upload size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Upload Photos to Gallery</h3>
                  <p className="text-[11px] text-gray-500">
                    Images are automatically compressed to &le;{MAX_SIZE_KB}KB before upload
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!isUploadingAll) setShowUploadModal(false);
                }}
                disabled={isUploadingAll}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-5">
              {/* Category selector row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Assign Category
                  </label>
                  <select
                    value={defaultCategory}
                    onChange={e => setDefaultCategory(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {GALLERY_CATEGORIES.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="Custom">+ Custom Category...</option>
                  </select>
                </div>

                {defaultCategory === 'Custom' && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Custom Category Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Science Exhibition"
                      value={customCategory}
                      onChange={e => setCustomCategory(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              {/* Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  handleFilesSelected(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/40 hover:bg-blue-50/70 rounded-xl p-6 text-center cursor-pointer transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={e => handleFilesSelected(e.target.files)}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-2">
                  <Upload size={20} />
                </div>
                <p className="text-xs font-bold text-gray-800">
                  Click to browse or drag &amp; drop photos here
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Supports multiple JPEG, PNG, WEBP. Auto-scaled &amp; compressed to &le;150KB.
                </p>
              </div>

              {/* Compression loader */}
              {isCompressing && (
                <div className="flex items-center justify-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg text-xs">
                  <Loader2 size={16} className="animate-spin" />
                  Compressing images with Canvas API to &le;150KB...
                </div>
              )}

              {/* Selected / Pending Items */}
              {pendingItems.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">
                      Ready to Upload ({pendingItems.length} photos)
                    </span>
                    <button
                      type="button"
                      onClick={() => setPendingItems([])}
                      className="text-xs text-red-600 hover:text-red-700"
                    >
                      Clear all
                    </button>
                  </div>

                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {pendingItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                      >
                        <img
                          src={item.previewUrl}
                          alt="preview"
                          className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <input
                            type="text"
                            value={item.title}
                            onChange={e => handleUpdatePendingTitle(item.id, e.target.value)}
                            placeholder="Photo title"
                            className="w-full text-xs font-medium bg-white px-2 py-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                          />
                          <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500">
                            <span className="font-semibold text-emerald-600">{item.sizeKB} KB</span>
                            <span className="text-gray-400">({item.originalSizeKB} KB orig)</span>
                            <span>&middot;</span>
                            <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded text-[10px]">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {item.status === 'uploading' && (
                          <Loader2 size={16} className="animate-spin text-blue-600 flex-shrink-0" />
                        )}
                        {item.status === 'error' && (
                          <AlertCircle size={16} className="text-red-500 flex-shrink-0" title={item.errorMessage} />
                        )}
                        {item.status === 'idle' && (
                          <button
                            onClick={() => handleRemovePending(item.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <X size={15} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                disabled={isUploadingAll}
                className="px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUploadAllPending}
                disabled={pendingItems.length === 0 || isUploadingAll}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold bg-[#1a3a6e] hover:bg-[#142e57] text-white rounded-lg transition-all shadow-sm disabled:opacity-50"
              >
                {isUploadingAll ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={14} />
                    Upload {pendingItems.length > 0 ? `(${pendingItems.length})` : ''}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {photoToDelete && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
              <Trash2 size={20} />
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Delete Photo?</h3>
            <p className="text-xs text-gray-500 mt-1">
              Are you sure you want to delete <span className="font-semibold text-gray-800">"{photoToDelete.title}"</span>? This will immediately remove it from the public website gallery.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setPhotoToDelete(null)}
                disabled={deleting}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={deleting}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {deleting ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Yes, Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
    </div>
  );
};

export default PhotoGalleryManager;
