import { allEvents } from './src/data/eventsData.ts';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://jiuunexjrmhpzrubjefr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzY5NjYsImV4cCI6MjA5NjA1Mjk2Nn0.b3dgImhslbIifiTsgevsAOf5y8tVmlrLMbg3mgEp1uI'
);

async function seed() {
  const { count } = await supabase.from('events').select('*', { count: 'exact', head: true });
  console.log('Current rows in events table:', count);

  if (count === 0) {
    for (const event of allEvents) {
      const { error } = await supabase.from('events').insert({
        slug: event.slug,
        title: event.title,
        page_title: event.pageTitle,
        badge: event.badge || '',
        subtitle: event.subtitle || '',
        date: event.date,
        sort_date: event.sortDate,
        month_year: event.monthYear,
        time: event.time || '',
        venue: event.venue || '',
        description: event.description || '',
        paragraphs: event.paragraphs || [],
        is_visible: true,
      });
      if (error) {
        console.error(`Error inserting ${event.slug}:`, error.message);
      } else {
        console.log(`✅ Inserted: ${event.title}`);
      }
    }
    console.log('Seeding complete!');
  } else {
    console.log('Table already has data, skipping seed.');
  }
}

seed().catch(console.error);
