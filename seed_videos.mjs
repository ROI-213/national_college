import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://jiuunexjrmhpzrubjefr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzY5NjYsImV4cCI6MjA5NjA1Mjk2Nn0.b3dgImhslbIifiTsgevsAOf5y8tVmlrLMbg3mgEp1uI'
);

const videoIds = [
  'iWltsRevd_E',
  'wG-4lNBk1ZU',
  'p6h74uVPOjg',
  'PIo3jFcRO9E',
  'vujdBxnnC-Q',
  '1jpm2-SzJvg',
  '5rzqskk1gzc',
  '0OMXwg7doxQ',
  '-8gcH7FpACk',
  'Q51Zaq_kOeE',
  'aBZWtcgnCVA',
  '-419c12TT84',
  'YOlPl_ISufQ',
  '5ERMTdzy__A',
];

async function seed() {
  const { count } = await supabase.from('gallery_videos').select('*', { count: 'exact', head: true });
  console.log('Current gallery_videos count:', count);
  if (count === 0) {
    const rows = videoIds.map((id, index) => ({
      title: `Campus Video ${index + 1}`,
      youtube_id: id,
      url: `https://www.youtube.com/watch?v=${id}`,
      display_order: index + 1,
    }));
    const { error } = await supabase.from('gallery_videos').insert(rows);
    if (error) console.error('Error inserting videos:', error);
    else console.log(`✅ Seeded ${rows.length} videos!`);
  } else {
    console.log('Videos already present, skipping seed.');
  }
}

seed().catch(console.error);
