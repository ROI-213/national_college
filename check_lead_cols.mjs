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
  console.log('Connected to database to check lead columns...');

  const res = await client.query(`
    SELECT id, full_name, 
           marks_card_10th_path, marks_card_12th_path, transfer_certificate_path, 
           caste_certificate_path, income_certificate_path, passport_photo_path
    FROM apply_online_enquiries
    WHERE id = '753537a8-a07d-4fd1-b9eb-a1472d435817';
  `);
  console.log('Lead record details:');
  console.log(JSON.stringify(res.rows, null, 2));

  await client.end();
}

run().catch(console.error);
