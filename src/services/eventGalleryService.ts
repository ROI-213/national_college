import { supabase } from '@/lib/supabase';
import { allEvents, EventGalleryImage } from '@/data/eventsData';

const CACHE_PREFIX = 'ncb_event_gallery_';
const STORAGE_BUCKET = 'enquiry-documents';

/**
 * Fetch images for a specific event slug.
 * Checks Supabase database first, then local storage cache, and finally fallback data.
 */
export async function fetchEventGallery(slug: string): Promise<EventGalleryImage[]> {
  const fallback = allEvents.find(e => e.slug === slug)?.images || [];

  try {
    const { data, error } = await supabase
      .from('event_gallery_images')
      .select('src, alt, display_order')
      .eq('event_slug', slug)
      .order('display_order', { ascending: true });

    if (!error && data && data.length > 0) {
      const mapped: EventGalleryImage[] = data.map(item => ({
        src: item.src,
        alt: item.alt || '',
      }));
      // Cache locally
      try {
        localStorage.setItem(`${CACHE_PREFIX}${slug}`, JSON.stringify(mapped));
      } catch (e) {
        // Storage limit warning ignored
      }
      return mapped;
    }
  } catch (err) {
    console.warn(`[eventGalleryService] Could not fetch from Supabase for ${slug}:`, err);
  }

  // Fallback to local storage cache
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${slug}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // ignore parse error
  }

  return fallback;
}

/**
 * Upload an image blob/file to Supabase Storage and return its public URL.
 */
export async function uploadEventImageFile(slug: string, file: Blob | File, originalName = 'image.jpg'): Promise<string> {
  const cleanName = originalName.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/\.[^.]+$/, '');
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 6);
  const path = `events/${slug}/${timestamp}_${randomStr}_${cleanName}.jpg`;

  const { error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, {
      upsert: true,
      contentType: 'image/jpeg',
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  const { data: urlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(path);

  if (!urlData?.publicUrl) {
    throw new Error('Could not retrieve public URL for uploaded image');
  }

  return urlData.publicUrl;
}

/**
 * Save the entire list of gallery images for an event.
 * Synchronizes with Supabase database and local storage.
 */
export async function saveEventGallery(slug: string, images: EventGalleryImage[]): Promise<void> {
  // Update local storage cache immediately for instant response
  try {
    localStorage.setItem(`${CACHE_PREFIX}${slug}`, JSON.stringify(images));
  } catch (e) {
    // Ignore storage quota
  }

  // 1. Delete old records for this slug
  const { error: delError } = await supabase
    .from('event_gallery_images')
    .delete()
    .eq('event_slug', slug);

  if (delError) {
    console.warn(`[eventGalleryService] Error deleting existing images for ${slug}:`, delError);
  }

  // 2. Insert new records
  if (images.length > 0) {
    const rows = images.map((img, index) => ({
      event_slug: slug,
      src: img.src,
      alt: img.alt || '',
      display_order: index + 1,
    }));

    const { error: insError } = await supabase
      .from('event_gallery_images')
      .insert(rows);

    if (insError) {
      throw new Error(`Failed to save gallery images: ${insError.message}`);
    }
  }

  // Dispatch custom event for any live listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('event-gallery-updated', { detail: { slug, count: images.length } }));
  }
}

/**
 * Fetch image counts for all events from Supabase and local cache.
 * Returns a map of slug -> count.
 */
export async function fetchAllEventGalleryCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};

  // 1. Initial counts from static dataset
  allEvents.forEach(e => {
    counts[e.slug] = e.images?.length || 0;
  });

  // 2. Check localStorage cache
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}all_counts`);
    if (cached) {
      const parsed = JSON.parse(cached);
      Object.assign(counts, parsed);
    }
  } catch (e) {}

  // 3. Fetch current counts from Supabase
  try {
    const { data, error } = await supabase
      .from('event_gallery_images')
      .select('event_slug');

    if (!error && data) {
      const dbCounts: Record<string, number> = {};
      data.forEach(row => {
        dbCounts[row.event_slug] = (dbCounts[row.event_slug] || 0) + 1;
      });
      Object.assign(counts, dbCounts);

      try {
        localStorage.setItem(`${CACHE_PREFIX}all_counts`, JSON.stringify(counts));
      } catch (e) {}
    }
  } catch (err) {
    console.warn('[eventGalleryService] Error fetching all event counts:', err);
  }

  return counts;
}

