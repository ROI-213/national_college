import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://jiuunexjrmhpzrubjefr.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDQ3Njk2NiwiZXhwIjoyMDk2MDUyOTY2fQ.jzV8JF85bIkuShKdZa8ntLRvO_4Oa5Q9RzNI5u4DkgM';

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
};

async function check() {
  console.log('Fetching OpenAPI spec from Supabase...');
  const res = await fetch(`${PROJECT_URL}/rest/v1/`, { headers });
  const spec = await res.json();
  
  console.log('Available tables/views:');
  const paths = Object.keys(spec.paths);
  paths.forEach(p => {
    if (!p.startsWith('/rpc/')) {
      console.log('  -', p);
    }
  });

  console.log('\nAvailable RPC functions:');
  paths.forEach(p => {
    if (p.startsWith('/rpc/')) {
      console.log('  -', p);
    }
  });
}

check();
