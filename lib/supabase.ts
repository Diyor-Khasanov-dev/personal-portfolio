import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://adnwsculqdyxptlwhzay.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_c279TpgS08FNEZTg38ATEQ_p3i9PkLG";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
