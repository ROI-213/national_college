import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://jiuunexjrmhpzrubjefr.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdXVuZXhqcm1ocHpydWJqZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NzY5NjYsImV4cCI6MjA5NjA1Mjk2Nn0.b3dgImhslbIifiTsgevsAOf5y8tVmlrLMbg3mgEp1uI';

const supabaseUrl =
  (import.meta.env?.VITE_SUPABASE_URL as string) || DEFAULT_SUPABASE_URL;
const supabaseAnonKey =
  (import.meta.env?.VITE_SUPABASE_ANON_KEY as string) || DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type EnquiryStatus =
  | 'Not Contacted'
  | 'Called'
  | 'Interested'
  | 'Not Interested'
  | 'Admitted'
  | 'Follow Up';

export interface HomeEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  dob: string;
  address: string;
  message: string;
  source: string;
  status: EnquiryStatus;
  date_of_first_contacted: string | null;
  next_follow_up: string | null;
  notes: string | null;
  created_at: string;
}

export interface ApplyOnlineEnquiry {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  course: string;
  specialization: string;
  twelfth_percentage: string;
  parent_name: string;
  parent_contact: string;
  permanent_address: string;
  source: string;
  status: EnquiryStatus;
  date_of_first_contacted: string | null;
  next_follow_up: string | null;
  notes: string | null;
  created_at: string;
}

export interface ContactEnquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  source: string;
  status: EnquiryStatus;
  date_of_first_contacted: string | null;
  next_follow_up: string | null;
  notes: string | null;
  created_at: string;
}
