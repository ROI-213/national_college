-- Run this SQL in your Supabase SQL Editor

-- Home Page Enquiries (from AdmissionDialog / Apply Now on home page)
create table if not exists home_enquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text,
  phone text,
  program text,
  dob text,
  address text,
  message text,
  source text default 'home',
  status text default 'Not Contacted',
  date_of_first_contacted date,
  next_follow_up timestamptz,
  notes text,
  created_at timestamptz default now()
);

-- Apply Online Enquiries (from /admissions/online-application)
create table if not exists apply_online_enquiries (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text,
  mobile text,
  gender text,
  dob text,
  aadhaar text,
  category text,
  nationality text,
  religion text,
  caste text,
  blood_group text,
  alt_contact text,
  parent_name text,
  parent_contact text,
  parent_occupation text,
  annual_income text,
  permanent_address text,
  correspondence_address text,
  tenth_board text,
  tenth_year text,
  tenth_percentage text,
  twelfth_board text,
  twelfth_year text,
  twelfth_stream text,
  twelfth_percentage text,
  subjects_studied text,
  register_number text,
  course text,
  specialization text,
  medium text,
  source text default 'apply_online',
  status text default 'Not Contacted',
  date_of_first_contacted date,
  next_follow_up timestamptz,
  notes text,
  created_at timestamptz default now()
);

-- Contact Page Enquiries (from /contact)
create table if not exists contact_enquiries (
  id uuid default gen_random_uuid() primary key,
  first_name text,
  last_name text,
  email text,
  phone text,
  subject text,
  message text,
  source text default 'contact',
  status text default 'Not Contacted',
  date_of_first_contacted date,
  next_follow_up timestamptz,
  notes text,
  created_at timestamptz default now()
);

-- Enable Row Level Security (optional but recommended)
alter table home_enquiries enable row level security;
alter table apply_online_enquiries enable row level security;
alter table contact_enquiries enable row level security;

-- Allow anonymous inserts (for form submissions)
create policy "Allow anon insert home_enquiries" on home_enquiries for insert with check (true);
create policy "Allow anon insert apply_online_enquiries" on apply_online_enquiries for insert with check (true);
create policy "Allow anon insert contact_enquiries" on contact_enquiries for insert with check (true);

-- Allow authenticated reads and updates (for admin panel)
create policy "Allow authenticated select home_enquiries" on home_enquiries for select using (true);
create policy "Allow authenticated update home_enquiries" on home_enquiries for update using (true);

create policy "Allow authenticated select apply_online_enquiries" on apply_online_enquiries for select using (true);
create policy "Allow authenticated update apply_online_enquiries" on apply_online_enquiries for update using (true);

create policy "Allow authenticated select contact_enquiries" on contact_enquiries for select using (true);
create policy "Allow authenticated update contact_enquiries" on contact_enquiries for update using (true);

-- Enquiry Documents table (links uploaded files to the online application enquiries)
create table if not exists enquiry_documents (
  id uuid default gen_random_uuid() primary key,
  lead_id uuid references apply_online_enquiries(id) on delete cascade,
  file_name text not null,
  file_path text not null,
  file_url text not null,
  mime_type text not null,
  file_size integer not null,
  created_at timestamptz default now()
);

-- Enable RLS for enquiry_documents
alter table enquiry_documents enable row level security;

-- Policies for enquiry_documents
create policy "Allow anon insert enquiry_documents" on enquiry_documents for insert with check (true);
create policy "Allow authenticated select enquiry_documents" on enquiry_documents for select using (true);
create policy "Allow authenticated update enquiry_documents" on enquiry_documents for update using (true);
create policy "Allow authenticated delete enquiry_documents" on enquiry_documents for delete using (true);

-- Public select policy for admin UI (allow any request to read documents)
create policy "Allow anon select enquiry_documents" on enquiry_documents for select using (true);

// -------------------------------------------------------------------
// New private bucket for admission documents (private)
// -------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('admission-documents', 'admission-documents', false)
on conflict (id) do nothing;

// Storage policies for admission-documents bucket
create policy "Allow anon upload to admission-documents"
  on storage.objects for insert
  with check (bucket_id = 'admission-documents');

create policy "Allow admin select from admission-documents"
  on storage.objects for select
  using (bucket_id = 'admission-documents');

// -------------------------------------------------------------------
// Extend apply_online_enquiries with document path columns
// -------------------------------------------------------------------
alter table apply_online_enquiries
  add column if not exists marks_card_10th_path text,
  add column if not exists marks_card_12th_path text,
  add column if not exists transfer_certificate_path text,
  add column if not exists caste_certificate_path text,
  add column if not exists income_certificate_path text,
  add column if not exists passport_photo_path text;

insert into storage.buckets (id, name, public)
values ('enquiry-documents', 'enquiry-documents', true)
on conflict (id) do nothing;

-- Storage policies for the 'enquiry-documents' bucket
create policy "Allow public uploads to enquiry-documents"
on storage.objects for insert
with check (bucket_id = 'enquiry-documents');

create policy "Allow public access to enquiry-documents"
on storage.objects for select
using (bucket_id = 'enquiry-documents');

