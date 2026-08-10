import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

// Loaded lazily (only when a share/fetch actually happens) so a blocked or
// unreachable CDN never breaks the core rating board, which has nothing to
// do with Supabase.
let clientPromise = null;

function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return Promise.reject(
      new Error(
        "Supabase is not configured — fill in SUPABASE_URL and SUPABASE_ANON_KEY in config.js (see README.md)."
      )
    );
  }
  if (!clientPromise) {
    clientPromise = import("https://esm.sh/@supabase/supabase-js@2").then(({ createClient }) =>
      createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    );
  }
  return clientPromise;
}

export async function createSnapshot(data) {
  const client = await getClient();
  const { data: row, error } = await client.from("rating_snapshots").insert({ data }).select("id").single();
  if (error) throw error;
  return row.id;
}

export async function fetchSnapshot(id) {
  const client = await getClient();
  const { data: row, error } = await client.from("rating_snapshots").select("data").eq("id", id).single();
  if (error) throw error;
  return row.data;
}
