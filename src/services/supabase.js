import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Y2FreGl0dmloaWFuYWRibW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MjgxNjQsImV4cCI6MjA0MjUwNDE2NH0.tYzON0H46G_2AKOR-L42_3Wv8SIhq0-Zc9j8_i5EV9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
