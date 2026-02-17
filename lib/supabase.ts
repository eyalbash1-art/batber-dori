import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export type ServiceRow = { id: string; name: string; price: string; description: string | null; sort_order: number };
export type BookingInsert = { booking_date: string; booking_time: string; service_id?: string; client_name?: string; notes?: string };
