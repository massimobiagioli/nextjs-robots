import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.SUPABASE_URL || "";
const supabaseKey: string = process.env.SUPABASE_SERVICE_KEY || "";

const SupabaseAdmin = createClient(supabaseUrl, supabaseKey);

export { SupabaseAdmin };
