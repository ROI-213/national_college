import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

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
