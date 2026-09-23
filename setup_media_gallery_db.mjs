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
  console.log('Connected to Supabase Postgres!');

  // 1. Create gallery_photos table
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.gallery_photos (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title         TEXT NOT NULL DEFAULT '',
      src           TEXT NOT NULL,
      category      TEXT NOT NULL DEFAULT 'Events',
      views         INT NOT NULL DEFAULT 0,
      display_order INT NOT NULL DEFAULT 0,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX IF NOT EXISTS idx_gallery_photos_cat ON public.gallery_photos(category);
    CREATE INDEX IF NOT EXISTS idx_gallery_photos_order ON public.gallery_photos(display_order ASC, created_at DESC);

    ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_photos' AND policyname='Allow public read gallery_photos') THEN
        CREATE POLICY "Allow public read gallery_photos" ON public.gallery_photos FOR SELECT USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_photos' AND policyname='Allow anon insert gallery_photos') THEN
        CREATE POLICY "Allow anon insert gallery_photos" ON public.gallery_photos FOR INSERT WITH CHECK (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_photos' AND policyname='Allow anon update gallery_photos') THEN
        CREATE POLICY "Allow anon update gallery_photos" ON public.gallery_photos FOR UPDATE USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_photos' AND policyname='Allow anon delete gallery_photos') THEN
        CREATE POLICY "Allow anon delete gallery_photos" ON public.gallery_photos FOR DELETE USING (true);
      END IF;
    END
    $$;
  `);
  console.log('✅ gallery_photos table created with RLS!');

  // 2. Create gallery_videos table
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.gallery_videos (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title         TEXT NOT NULL DEFAULT '',
      youtube_id    TEXT NOT NULL,
      url           TEXT NOT NULL DEFAULT '',
      display_order INT NOT NULL DEFAULT 0,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX IF NOT EXISTS idx_gallery_videos_order ON public.gallery_videos(display_order ASC, created_at DESC);

    ALTER TABLE public.gallery_videos ENABLE ROW LEVEL SECURITY;

    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_videos' AND policyname='Allow public read gallery_videos') THEN
        CREATE POLICY "Allow public read gallery_videos" ON public.gallery_videos FOR SELECT USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_videos' AND policyname='Allow anon insert gallery_videos') THEN
        CREATE POLICY "Allow anon insert gallery_videos" ON public.gallery_videos FOR INSERT WITH CHECK (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_videos' AND policyname='Allow anon update gallery_videos') THEN
        CREATE POLICY "Allow anon update gallery_videos" ON public.gallery_videos FOR UPDATE USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='gallery_videos' AND policyname='Allow anon delete gallery_videos') THEN
        CREATE POLICY "Allow anon delete gallery_videos" ON public.gallery_videos FOR DELETE USING (true);
      END IF;
    END
    $$;
  `);
  console.log('✅ gallery_videos table created with RLS!');

  await client.end();
}

run().catch(console.error);
