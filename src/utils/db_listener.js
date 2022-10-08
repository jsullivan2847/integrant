import { RealtimeClient } from "@supabase/realtime-js";


    const client = new RealtimeClient('wss://kpynmdboeqcwxzexzgjy.supabase.co/realtime/v1',{
params: {apikey: process.env.REACT_APP_SUPABASE_ANON_KEY}
})

  client.connect()
  client.onOpen(() => console.log('socket opened'));
  client.onClose(() => console.log('socket closed'));
  client.onError(() => console.log('Socket error'));

  const dbChanges = client.channel('realtime:public:grants_data:state=eq.Nevada');
//   dbChanges.on('*', (e) => console.log(e));
  dbChanges.on('INSERT', (e) => console.log(e));
//   dbChanges.on('UPDATE', (e) => console.log(e));
//   dbChanges.on('DELETE', (e) => console.log(e));
  dbChanges.subscribe()


export default dbChanges;