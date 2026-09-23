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
  console.log('Connected!');

  // Create events table
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.events (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      slug        TEXT NOT NULL UNIQUE,
      title       TEXT NOT NULL,
      page_title  TEXT NOT NULL,
      badge       TEXT NOT NULL DEFAULT '',
      subtitle    TEXT NOT NULL DEFAULT '',
      date        TEXT NOT NULL,
      sort_date   TEXT NOT NULL,
      month_year  TEXT NOT NULL,
      time        TEXT NOT NULL DEFAULT '',
      venue       TEXT NOT NULL DEFAULT '',
      description TEXT NOT NULL DEFAULT '',
      paragraphs  JSONB NOT NULL DEFAULT '[]',
      is_visible  BOOLEAN NOT NULL DEFAULT true,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX IF NOT EXISTS idx_events_slug ON public.events(slug);
    CREATE INDEX IF NOT EXISTS idx_events_sort_date ON public.events(sort_date DESC);

    ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='events' AND policyname='Allow public read events') THEN
        CREATE POLICY "Allow public read events" ON public.events FOR SELECT USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='events' AND policyname='Allow anon insert events') THEN
        CREATE POLICY "Allow anon insert events" ON public.events FOR INSERT WITH CHECK (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='events' AND policyname='Allow anon update events') THEN
        CREATE POLICY "Allow anon update events" ON public.events FOR UPDATE USING (true);
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='events' AND policyname='Allow anon delete events') THEN
        CREATE POLICY "Allow anon delete events" ON public.events FOR DELETE USING (true);
      END IF;
    END
    $$;
  `);

  console.log('✅ events table created with RLS!');
  await client.end();
}

run().catch(console.error);
