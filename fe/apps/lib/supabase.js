import { createclient } from '@supabase/supabase-js'
import "react-native-url-polyfill";


// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseKey = process.env.SUPABASE.KEY


const supabaseUrl = "https://mjepqqyzxfjrkfgfyiaf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZXBxcXl6eGZqcmtmZ2Z5aWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1MTkzOTYsImV4cCI6MjAzNDA5NTM5Nn0.F5EyO3rSaqIuE71mDHBBjYrhXmsakL_4jFu5dLmqYIc";

export const supabaseClient = createclient(supabaseUrl, supabaseKey)
// let client = createclient(supabaseUrl, supabaseKey)

// export default client