import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://jiuunexjrmhpzrubjefr.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDQ3Njk2NiwiZXhwIjoyMDk2MDUyOTY2fQ.jzV8JF85bIkuShKdZa8ntLRvO_4Oa5Q9RzNI5u4DkgM';

const supabase = createClient(PROJECT_URL, SERVICE_KEY);

async function run() {
  console.log('Listing folders in enquiry-documents storage bucket...');
  const { data: files, error } = await supabase.storage
    .from('enquiry-documents')
    .list('', { limit: 100 });

  if (error) {
    console.error('Error listing bucket contents:', error);
    return;
  }

  console.log(`Found ${files.length} items in root of enquiry-documents bucket:`);
  for (const item of files) {
    console.log(`  - ${item.name} (${item.metadata ? 'Folder/File' : 'Folder'})`);
    if (!item.metadata) {
      // It's a folder (leadId folder). Let's list files inside it.
      const { data: subFiles, error: subError } = await supabase.storage
        .from('enquiry-documents')
        .list(item.name);
      if (subError) {
        console.error(`    Error listing folder ${item.name}:`, subError);
      } else if (subFiles) {
        console.log(`    Files inside ${item.name}:`);
        subFiles.forEach(sf => console.log(`      * ${sf.name} (${sf.metadata?.size || 0} bytes)`));
      }
    }
  }
}

run();
