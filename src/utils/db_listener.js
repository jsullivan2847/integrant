import { RealtimeClient } from "@supabase/realtime-js";


export const connectDb = () => {
  const client = new RealtimeClient('wss://kpynmdboeqcwxzexzgjy.supabase.co/realtime/v1',{
params: {apikey: process.env.REACT_APP_SUPABASE_ANON_KEY}
})

  client.connect()
  // client.onOpen(() => console.log('socket opened'));
  // client.onClose(() => console.log('socket closed'));
  // client.onError(() => console.log('Socket error'));

  return client
}