import pg from 'pg';
const { Client } = pg;

const client = new Client({
  host: 'db.jiuunexjrmhpzrubjefr.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'xCX9qLEm0P78yh2q',
  database: 'postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await client.connect();
  console.log('Connected to Supabase PostgreSQL!');

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.event_gallery_images (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      event_slug TEXT NOT NULL,
      src TEXT NOT NULL,
      alt TEXT NOT NULL DEFAULT '',
      display_order INT NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX IF NOT EXISTS idx_event_gallery_images_slug ON public.event_gallery_images(event_slug, display_order);

    ALTER TABLE public.event_gallery_images ENABLE ROW LEVEL SECURITY;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'event_gallery_images' AND policyname = 'Allow public read on event_gallery_images'
      ) THEN
        CREATE POLICY "Allow public read on event_gallery_images" ON public.event_gallery_images FOR SELECT USING (true);
      END IF;

      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'event_gallery_images' AND policyname = 'Allow anon insert on event_gallery_images'
      ) THEN
        CREATE POLICY "Allow anon insert on event_gallery_images" ON public.event_gallery_images FOR INSERT WITH CHECK (true);
      END IF;

      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'event_gallery_images' AND policyname = 'Allow anon update on event_gallery_images'
      ) THEN
        CREATE POLICY "Allow anon update on event_gallery_images" ON public.event_gallery_images FOR UPDATE USING (true);
      END IF;

      IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'event_gallery_images' AND policyname = 'Allow anon delete on event_gallery_images'
      ) THEN
        CREATE POLICY "Allow anon delete on event_gallery_images" ON public.event_gallery_images FOR DELETE USING (true);
      END IF;
    END
    $$;
  `);

  console.log('✅ Table public.event_gallery_images and RLS policies created successfully!');
  await client.end();
}

run().catch(console.error);
