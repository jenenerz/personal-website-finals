import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jmfmnoxehtzhzvofgglp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZm1ub3hlaHR6aHp2b2ZnZ2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTUzMjYsImV4cCI6MjA1NjM5MTMyNn0.6Yl0_kpA3Ghoh2bDeEVccuVAr1QgiZ12SpYTei_K_MQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
