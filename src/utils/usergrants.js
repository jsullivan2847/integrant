import { supabase } from "./supabase";

const getGrants = ( async (user) => {
    console.log(user)
const {data:questions, err}  = await supabase
  .from('user_profile')
  .select('*')
  .eq('userID', user.id);


const zipcode = questions[0].zipcode;
const role = questions[0].role;
const amount = questions[0].amount;
console.log (role + " " + zipcode )

const { data, error } = await supabase
.from('grants_data')
.select('*')
.in('state', [zipcode, 'All'])
.ilike('tags', '%'+role+'%')
.order('opp_type', { ascending: false })

    return data
})

export default getGrants;