import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://pdttzezmqrgaukopigoq.supabase.co!;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdHR6ZXptcXJnYXVrb3BpZ29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NzQ4MTgsImV4cCI6MjA3MDA1MDgxOH0.QgY19dE_EZ41UHC_7Ds7h6dxEUuO_I0JjB8HRFvy5XQ!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});