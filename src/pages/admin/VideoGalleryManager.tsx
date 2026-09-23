import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap, LogOut, Key, Code2, FileText, MessageSquare,
  Images, CalendarDays, Camera, Video, Plus, Trash2,
  AlertCircle, X, Loader2, Search, ExternalLink, RefreshCw, Play,
  Youtube
} from 'lucide-react';
import {
  fetchGalleryVideos,
  createGalleryVideo,
  deleteGalleryVideo,
  extractYouTubeId,
  GalleryVideoRecord
} from '@/services/mediaGalleryService';
import ChangePasswordModal from '@/components/admin/ChangePasswordModal';
import { useToast } from '@/components/ui/use-toast';

const SESSION_KEY = 'ncb_admin_session';

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

const VideoGalleryManager: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [videos, setVideos] = useState<GalleryVideoRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Add video modal / drawer
  const [showAddModal, setShowAddModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [saving, setSaving] = useState(false);

  // Delete modal state
  const [videoToDelete, setVideoToDelete] = useState<GalleryVideoRecord | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Preview state for newly entered URL
  const detectedYtId = extractYouTubeId(videoUrl);

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

  const loadVideos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGalleryVideos();
      setVideos(data);
    } catch (err: any) {
      toast({
        title: 'Error loading videos',
        description: err.message || 'Failed to fetch video gallery',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) {
      toast({
        title: 'Video Link Required',
        description: 'Please enter a YouTube video URL or ID.',
        variant: 'destructive',
      });
      return;
    }

    const ytId = extractYouTubeId(videoUrl);
    if (!ytId) {
      toast({
        title: 'Invalid YouTube Link',
        description: 'Please enter a valid YouTube link (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      const created = await createGalleryVideo({
        title: videoTitle.trim() || 'National College Video',
        url: videoUrl.trim(),
      });

      toast({
        title: 'Video Added!',
        description: `"${created.title}" is now visible on the website video gallery.`,
      });

      setVideoUrl('');
      setVideoTitle('');
      setShowAddModal(false);
      await loadVideos();
    } catch (err: any) {
      toast({
        title: 'Failed to add video',
        description: err.message || 'An error occurred while saving video',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!videoToDelete) return;
    setDeleting(true);
    try {
      await deleteGalleryVideo(videoToDelete.id);
      toast({
        title: 'Video Deleted',
        description: `"${videoToDelete.title}" has been removed from video gallery.`,
      });
      setVideos(prev => prev.filter(v => v.id !== videoToDelete.id));
      setVideoToDelete(null);
    } catch (err: any) {
      toast({
        title: 'Delete Failed',
        description: err.message || 'Could not delete video',
        variant: 'destructive',
      });
    } finally {
      setDeleting(false);
    }
  };

  // Filtered videos
  const filteredVideos = videos.filter(v => {
    if (!search.trim()) return true;
    return v.title.toLowerCase().includes(search.toLowerCase()) ||
           v.youtube_id.toLowerCase().includes(search.toLowerCase());
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
          <SidebarLink icon={Camera} label="Photo Gallery" onClick={() => navigate('/admin/photo-gallery')} />
          <SidebarLink icon={Video} label="Video Gallery" onClick={() => navigate('/admin/video-gallery')} active />
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
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Video size={16} className="text-red-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base">Video Gallery Manager</h1>
              <p className="text-xs text-gray-500">
                Add YouTube videos using links, preview them live, and manage the website video section
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadVideos}
              disabled={loading}
              title="Refresh videos"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
            </button>

            <a
              href="/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-200"
            >
              <ExternalLink size={13} />
              View on Website
            </a>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#1a3a6e] hover:bg-[#142e57] text-white transition-all shadow-sm"
            >
              <Plus size={14} />
              Add Video
            </button>
          </div>
        </header>

        {/* Filter / Search Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            Total Videos: <span className="font-bold text-gray-900">{videos.length}</span>
          </p>

          <div className="relative min-w-[280px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or video ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
          </div>
        </div>

        {/* Videos Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center text-gray-400">
              <Loader2 size={32} className="animate-spin text-red-600 mb-2" />
              <p className="text-sm">Loading video gallery...</p>
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="h-64 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-3">
                <Youtube size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-800">No videos found</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm">
                {search
                  ? 'No videos match your search query.'
                  : 'Add YouTube videos using links to showcase college events, interviews, campus tours, and guest lectures.'}
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold"
              >
                <Plus size={14} />
                Add Your First Video
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredVideos.map((video) => {
                const thumbUrl = `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
                const ytUrl = `https://www.youtube.com/watch?v=${video.youtube_id}`;

                return (
                  <div
                    key={video.id}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                      <img
                        src={thumbUrl}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback to mqdefault if hqdefault is unavailable
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`;
                        }}
                      />
                      {/* Play Button Icon */}
                      <a
                        href={ytUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                          <Play size={20} className="fill-white ml-0.5" />
                        </div>
                      </a>

                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded">
                        YouTube
                      </span>
                    </div>

                    {/* Info & Actions */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-700 transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-[11px] font-mono text-gray-400 mt-1">
                          ID: {video.youtube_id}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <a
                          href={ytUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <ExternalLink size={12} />
                          Open Link
                        </a>

                        <button
                          onClick={() => setVideoToDelete(video)}
                          className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* ── Add Video Modal ── */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                  <Youtube size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Add YouTube Video</h3>
                  <p className="text-[11px] text-gray-500">Paste any YouTube URL or Video ID</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  YouTube Video Link or ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ or youtu.be/..."
                  value={videoUrl}
                  onChange={e => setVideoUrl(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-mono"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Supports standard watch links, youtu.be short links, embeds, and YouTube Shorts.
                </p>
              </div>

              {/* Live Preview If Detected */}
              {detectedYtId ? (
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                    ✓ Valid Video Detected (ID: {detectedYtId})
                  </span>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                    <img
                      src={`https://img.youtube.com/vi/${detectedYtId}/hqdefault.jpg`}
                      alt="Thumbnail preview"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow">
                        <Play size={18} className="fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : videoUrl.trim() ? (
                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  Cannot detect a valid YouTube ID yet. Check the link format.
                </div>
              ) : null}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Video Title <span className="text-gray-400 font-normal">(Optional, defaults to "National College Video")</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. College Annual Day Celebrations 2026"
                  value={videoTitle}
                  onChange={e => setVideoTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  disabled={saving}
                  className="px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || !detectedYtId}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-sm disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Adding Video...
                    </>
                  ) : (
                    <>
                      <Plus size={14} />
                      Add to Gallery
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {videoToDelete && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
              <Trash2 size={20} />
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Delete Video?</h3>
            <p className="text-xs text-gray-500 mt-1">
              Are you sure you want to delete <span className="font-semibold text-gray-800">"{videoToDelete.title}"</span>? This will immediately remove it from the public website video gallery.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setVideoToDelete(null)}
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

export default VideoGalleryManager;
