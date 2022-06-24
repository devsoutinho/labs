import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);



// const users = await supabase.from('users').select();
// console.log('oi', users.data[0].username);
