import { supabase } from "./supabase";

export const getUserData = ( async (user) => {
const {data:questions, err}  = await supabase
  .from('user_profile')
  .select('*')
  .eq('userID', user.id);
  return questions[0];

})

export const retrieveGrant = async (userData) => {
  const { data, error } = await supabase
    .from('grants_data')
    .select('*')
    .in('state', [userData.zipcode, 'All'])
    .ilike('tags', '%'+userData.role+'%')
    .order('id', { ascending: false })
    .limit(1)
    return data
}
