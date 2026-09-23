import pg from 'pg';
const { Client } = pg;
import { allEvents } from './src/data/eventsData.ts';

const client = new Client({
  host: 'db.jiuunexjrmhpzrubjefr.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'xCX9qLEm0P78yh2q',
  database: 'postgres',
  ssl: { rejectUnauthorized: false }
});

async function seed() {
  await client.connect();
  console.log('Connected to DB for seeding...');

  // Check if table already has data
  const countRes = await client.query('SELECT count(*) FROM public.event_gallery_images');
  console.log('Current rows in event_gallery_images:', countRes.rows[0].count);

  if (parseInt(countRes.rows[0].count, 10) === 0) {
    for (const event of allEvents) {
      if (event.images && event.images.length > 0) {
        console.log(`Seeding ${event.images.length} images for ${event.slug}...`);
        for (let i = 0; i < event.images.length; i++) {
          const img = event.images[i];
          await client.query(
            'INSERT INTO public.event_gallery_images (event_slug, src, alt, display_order) VALUES ($1, $2, $3, $4)',
            [event.slug, img.src, img.alt || '', i + 1]
          );
        }
      }
    }
    console.log('✅ Seeding complete!');
  } else {
    console.log('Table already has data, skipping initial seed.');
  }

  await client.end();
}

seed().catch(console.error);
