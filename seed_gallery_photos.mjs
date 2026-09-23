import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://jiuunexjrmhpzrubjefr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzY5NjYsImV4cCI6MjA5NjA1Mjk2Nn0.b3dgImhslbIifiTsgevsAOf5y8tVmlrLMbg3mgEp1uI'
);

const initialPhotos = [
  { src: '/gallery/gallery-campus1.jpg', title: 'Campus View 1', category: 'Campus', views: 1200 },
  { src: '/gallery/gallery-event1.jpg', title: 'Cultural Event', category: 'Events', views: 980 },
  { src: '/gallery/gallery-labs1.jpg', title: 'Computer Lab', category: 'Labs', views: 850 },
  { src: '/gallery/gallery-sports1.jpg', title: 'Cricket Team', category: 'Sports', views: 1320 },
  { src: '/gallery/gallery-students1.jpg', title: 'Students with Laptop', category: 'Students', views: 910 },
  { src: '/gallery/gallery-campus2.jpg', title: 'Campus View 2', category: 'Campus', views: 1100 },
  { src: '/gallery/gallery-event2.jpg', title: 'Annual Day', category: 'Events', views: 1450 },
  { src: '/gallery/gallery-labs2.jpg', title: 'Animation Lab', category: 'Labs', views: 780 },
  { src: '/gallery/gallery-sports2.jpg', title: 'Sports Action', category: 'Sports', views: 1150 },
  { src: '/gallery/gallery-students2.jpg', title: 'Campus Hangout', category: 'Students', views: 870 },
  { src: '/gallery/gallery-campus3.jpg', title: 'Campus View 3', category: 'Campus', views: 920 },
  { src: '/gallery/gallery-event3.jpg', title: 'Sports Day', category: 'Events', views: 1300 },
  { src: '/gallery/gallery-labs3.jpg', title: 'Design Studio', category: 'Labs', views: 690 },
  { src: '/gallery/gallery-sports3.jpg', title: 'Athletics Meet', category: 'Sports', views: 1080 },
  { src: '/gallery/gallery-students3.jpg', title: 'Study Group', category: 'Students', views: 820 },
  { src: '/gallery/gallery-campus4.jpg', title: 'Campus View 4', category: 'Campus', views: 780 },
  { src: '/gallery/gallery-event4.jpg', title: 'Seminar Hall Event', category: 'Events', views: 1050 },
  { src: '/gallery/gallery-labs4.jpg', title: 'Electronics Lab', category: 'Labs', views: 730 },
  { src: '/gallery/gallery-sports4.jpg', title: 'Sports Day Awards', category: 'Sports', views: 960 },
  { src: '/gallery/gallery-event5.jpg', title: 'Award Ceremony', category: 'Events', views: 1600 },
  { src: '/gallery/gallery-womensday1.jpg', title: "Women's Day 2026 - 1", category: 'Events', views: 0 },
  { src: '/gallery/gallery-womensday2.jpg', title: "Women's Day 2026 - 2", category: 'Events', views: 0 },
  { src: '/gallery/gallery-womensday3.jpg', title: "Women's Day 2026 - 3", category: 'Events', views: 0 },
  { src: '/gallery/gallery-womensday4.jpg', title: "Women's Day 2026 - 4", category: 'Events', views: 0 },
  { src: '/gallery/gallery-drama1.jpg', title: 'Intersection Drama - 1', category: 'Intersection Drama', views: 0 },
  { src: '/gallery/gallery-drama2.jpg', title: 'Intersection Drama - 2', category: 'Intersection Drama', views: 0 },
  { src: '/gallery/gallery-drama3.jpg', title: 'Intersection Drama - 3', category: 'Intersection Drama', views: 0 },
  { src: '/gallery/gallery-drama4.jpg', title: 'Intersection Drama - 4', category: 'Intersection Drama', views: 0 },
];

async function seed() {
  const { count } = await supabase.from('gallery_photos').select('*', { count: 'exact', head: true });
  console.log('Current gallery_photos count:', count);
  if (count === 0) {
    const rows = initialPhotos.map((p, idx) => ({
      title: p.title,
      src: p.src,
      category: p.category,
      views: p.views,
      display_order: idx + 1,
    }));
    const { error } = await supabase.from('gallery_photos').insert(rows);
    if (error) console.error('Error inserting photos:', error);
    else console.log(`✅ Seeded ${rows.length} gallery photos!`);
  } else {
    console.log('gallery_photos already present, skipping seed.');
  }
}

seed().catch(console.error);
