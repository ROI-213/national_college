import { supabase } from '@/lib/supabase';

export interface EventRecord {
  id?: string;
  slug: string;
  title: string;
  page_title: string;
  badge: string;
  subtitle: string;
  date: string;
  sort_date: string;
  month_year: string;
  time: string;
  venue: string;
  description: string;
  paragraphs: string[];
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

const EVENTS_CACHE_KEY = 'ncb_events_all';

/** Fetch all visible events from Supabase, sorted by sort_date descending */
export async function fetchAllEventsFromDB(): Promise<EventRecord[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_visible', true)
      .order('sort_date', { ascending: false });

    if (!error && data && data.length > 0) {
      try {
        localStorage.setItem(EVENTS_CACHE_KEY, JSON.stringify(data));
      } catch (e) { /* ignore */ }
      return data as EventRecord[];
    }
  } catch (err) {
    console.warn('[eventsService] Failed to fetch events from DB:', err);
  }

  // Fallback to localStorage cache
  try {
    const cached = localStorage.getItem(EVENTS_CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch (e) { /* ignore */ }

  return [];
}

/** Fetch a single event by slug */
export async function fetchEventBySlug(slug: string): Promise<EventRecord | null> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) return data as EventRecord;
  } catch (err) {
    console.warn('[eventsService] Failed to fetch event:', err);
  }
  return null;
}

/** Create a new event */
export async function createEvent(event: Omit<EventRecord, 'id' | 'created_at' | 'updated_at'>): Promise<EventRecord> {
  const { data, error } = await supabase
    .from('events')
    .insert(event)
    .select()
    .single();

  if (error) throw new Error(error.message);

  // Invalidate cache
  try { localStorage.removeItem(EVENTS_CACHE_KEY); } catch (e) { /* ignore */ }

  // Notify listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('events-updated'));
  }

  return data as EventRecord;
}

/** Update an existing event */
export async function updateEvent(slug: string, updates: Partial<EventRecord>): Promise<void> {
  const { error } = await supabase
    .from('events')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('slug', slug);

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(EVENTS_CACHE_KEY); } catch (e) { /* ignore */ }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('events-updated'));
  }
}

/** Delete an event */
export async function deleteEvent(slug: string): Promise<void> {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('slug', slug);

  if (error) throw new Error(error.message);

  try { localStorage.removeItem(EVENTS_CACHE_KEY); } catch (e) { /* ignore */ }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('events-updated'));
  }
}

/** Convert DB record to URL-safe slug */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60);
}

/** Parse "12th Sep 2026" style date to ISO sort string */
export function parseDateToSortDate(dateStr: string, time = '10:00'): string {
  const monthMap: Record<string, string> = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
    January: '01', February: '02', March: '03', April: '04', June: '06',
    July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
  };

  const match = dateStr.match(/(\d+)(?:st|nd|rd|th)?\s+(\w+)\s+(\d{4})/i);
  if (match) {
    const day = match[1].padStart(2, '0');
    const month = monthMap[match[2]] || '01';
    const year = match[3];
    const t = time.includes(':') ? time.substring(0, 5) : '10:00';
    return `${year}-${month}-${day}T${t}`;
  }
  return new Date().toISOString().substring(0, 16);
}

/** Get month-year string from sortDate */
export function getMonthYear(sortDate: string): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(sortDate);
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}
