import { supabase } from "./supabase";

export const getUserData = ( async (user) => {
const {data:questions, err}  = await supabase
  .from('user_profile')
  .select('*')
  .eq('userID', user.id);

  return questions[0];

})

export const getGrants = (async (userData) => {

  const {zipcode, role, amount} = userData;

  const { grant, error } = await supabase
  .from('grants_data')
  .select('*')
  .in('state', [zipcode, 'All'])
  .ilike('tags', '%'+role+'%')
  .order('id', { ascending: false })
  .limit(1)
  
      return grant
})
 
