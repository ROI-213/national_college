import { supabase } from '@/lib/supabase';

export interface GalleryPhotoRecord {
  id: string;
  title: string;
  src: string;
  category: string;
  views: number;
  display_order: number;
  created_at?: string;
}

export interface GalleryVideoRecord {
  id: string;
  title: string;
  youtube_id: string;
  url: string;
  display_order: number;
  created_at?: string;
}

export const GALLERY_CATEGORIES = [
  'All',
  'Events',
  'Intersection Drama',
  'Campus',
  'Labs',
  'Sports',
  'Students',
];

const PHOTOS_CACHE_KEY = 'ncb_gallery_photos';
const VIDEOS_CACHE_KEY = 'ncb_gallery_videos';

// ─── PHOTO GALLERY ────────────────────────────────────────────────────────────

export async function fetchGalleryPhotos(): Promise<GalleryPhotoRecord[]> {
  try {
    const { data, error } = await supabase
      .from('gallery_photos')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      try {
        localStorage.setItem(PHOTOS_CACHE_KEY, JSON.stringify(data));
      } catch (e) {}
      return data as GalleryPhotoRecord[];
    }
  } catch (err) {
    console.warn('[mediaGalleryService] Error fetching gallery photos:', err);
  }

  try {
    const cached = localStorage.getItem(PHOTOS_CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (e) {}

  return [];
}

export async function uploadGalleryPhotoFile(file: File): Promise<string> {
  const sanitizedName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, '_')
    .replace(/_+/g, '_');
  const filename = `gallery/${Date.now()}_${sanitizedName}`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('enquiry-documents')
    .upload(filename, file, {
      contentType: file.type || 'image/jpeg',
      upsert: true,
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  const { data: urlData } = supabase.storage
    .from('enquiry-documents')
    .getPublicUrl(uploadData.path);

  if (!urlData?.publicUrl) {
    throw new Error('Could not retrieve public URL for uploaded file');
  }

  return urlData.publicUrl;
}

export async function createGalleryPhoto(photo: {
  title: string;
  src: string;
  category: string;
}): Promise<GalleryPhotoRecord> {
  const { data, error } = await supabase
    .from('gallery_photos')
    .insert({
      title: photo.title,
      src: photo.src,
      category: photo.category || 'Events',
      views: 0,
      display_order: 1,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(PHOTOS_CACHE_KEY); } catch (e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('gallery-photos-updated'));
  }

  return data as GalleryPhotoRecord;
}

export async function deleteGalleryPhoto(id: string): Promise<void> {
  const { error } = await supabase
    .from('gallery_photos')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(PHOTOS_CACHE_KEY); } catch (e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('gallery-photos-updated'));
  }
}

// ─── VIDEO GALLERY ────────────────────────────────────────────────────────────

export function extractYouTubeId(urlOrId: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();

  // If already just the 11 character ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Handle formats:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://m.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://www.youtube.com/shorts/VIDEO_ID
  const patterns = [
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i,
  ];

  for (const regex of patterns) {
    const match = trimmed.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export async function fetchGalleryVideos(): Promise<GalleryVideoRecord[]> {
  try {
    const { data, error } = await supabase
      .from('gallery_videos')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      try {
        localStorage.setItem(VIDEOS_CACHE_KEY, JSON.stringify(data));
      } catch (e) {}
      return data as GalleryVideoRecord[];
    }
  } catch (err) {
    console.warn('[mediaGalleryService] Error fetching gallery videos:', err);
  }

  try {
    const cached = localStorage.getItem(VIDEOS_CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (e) {}

  return [];
}

export async function createGalleryVideo(video: {
  title: string;
  url: string;
}): Promise<GalleryVideoRecord> {
  const ytId = extractYouTubeId(video.url);
  if (!ytId) {
    throw new Error('Please enter a valid YouTube video link or Video ID.');
  }

  const { data, error } = await supabase
    .from('gallery_videos')
    .insert({
      title: video.title || `Campus Video`,
      youtube_id: ytId,
      url: video.url.startsWith('http') ? video.url : `https://www.youtube.com/watch?v=${ytId}`,
      display_order: 1,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(VIDEOS_CACHE_KEY); } catch (e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('gallery-videos-updated'));
  }

  return data as GalleryVideoRecord;
}

export async function deleteGalleryVideo(id: string): Promise<void> {
  const { error } = await supabase
    .from('gallery_videos')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(VIDEOS_CACHE_KEY); } catch (e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('gallery-videos-updated'));
  }
}
