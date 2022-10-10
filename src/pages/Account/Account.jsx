import './Account.styles.css'

import { useNavigate } from 'react-router-dom'
import TopMatchesCard from '../../components/TopMatchesCard/TopMatchesCard'
import SavedGrants from './images/savedGrants.png'
import InProcess from './images/inProcess.png'
import AppliedGrants  from './images/appliedGrants.png'
import {supabase} from "../../utils/supabase";
import { useState , useEffect} from "react"

const Account = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [isBusy, setBusy] = useState(true)
  const [isBusySaved, setBusySaved] = useState(true)
  const [isBusyApplied, setBusyApplied] = useState(true)
  const [resultData, setResultData] = useState([]);

  useEffect(function () {
    async function getResultData() {
      const {data:questions, err}  = await supabase
      .from('user_profile')
      .select('*')
      .eq('userID', user.id);
      const userData = questions[0];
   
      // const zipcode = questions[0].zipcode;
      // const role = questions[0].role;
      // const amount = questions[0].amount;
      const {zipcode, role, amount} = userData;
      // console.log (role + " " + zipcode )
      
      const { data, error } = await supabase
      .from('grants_data')
      .select('*')
      .in('state', [zipcode, 'All'])
      .ilike('tags', '%'+role+'%')
      .order('opp_type', { ascending: false })
      .limit(3)
        setBusy(false);
        setResultData(data);
    }
    
    getResultData();
}, []);

const [savedData, setSavedData] = useState("");
const [appliedData, setAppliedData] = useState("");
const [appliedCount, setAppliedCount] = useState(0);
const [savedCount, setSavedCount] = useState(0);

useEffect(function () {
  async function getSavedData() {
    const {data, error, count}  = await supabase
    .from('user_grants')
    .select('*', { count: 'exact' })
    .match({ userID: user.id, saved:true })

    const {data:grantData, error:grantError}  = await supabase
    .from('grants_data')
    .select('*')
    .match({ id:data[0].grantID})

    setBusySaved(false);
    // console.log(grantData[0].title)
    if (data.length===0) {
      setSavedData('Your saved grants will appear here!');
    } else {
      setSavedData(grantData[0].title);
    }
  
    setSavedCount(count)
  }
  
  getSavedData();
}, []);

useEffect(function () {
async function getAppliedData() {
  const {data, error, count}  = await supabase
  .from('user_grants')
  .select('*', { count: 'exact' })
  .match({ userID: user.id, applied:true })

  const {data:grantData, error:grantError}  = await supabase
  .from('grants_data')
  .select('*')
  .match({ id:data[0].grantID})
    setBusyApplied(false);
    if (data.length===0) {
      setAppliedData('Your applied grants will appear here!');
    } else {
      // console.log(grantData[0])
      setAppliedData(grantData[0].title);
    }
    // console.log(appliedData)
    setAppliedCount(count)
}

getAppliedData();
}, []);

const resultCards = resultData.map((data, idx) => {
  return ( 
    <TopMatchesCard defaultStateCard={false} imageIcon={""} grantCardText="" key={`key-${idx}`} isBusy={isBusy} data={data} user={user}/>
  )
})

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/results");
  }

  // console.log(user.user_metadata.first_name)
  return (
    <div className='accountWrapper'>
      <h3>Welcome, {user.user_metadata.first_name}!</h3>
      <div>
      <form onSubmit={handleSubmit}><button className='btn grantMatches'>View my grant matches</button></form>
      </div>
      <br />

      <div className='topMatchesSectionWrapper'>
        <h4>Top matches</h4>
        <div className="rowWrapper">
        {resultCards}
          
          {/* <TopMatchesCard />
          <TopMatchesCard />
          <TopMatchesCard /> */}
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>Saved Grants</h4>
        <p>{savedCount} grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={SavedGrants} grantCardText={savedData} key={""} isBusy={isBusySaved} data={""} user={user}/>
          
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>Applied Grants</h4>
        <p>{appliedCount} grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={AppliedGrants} grantCardText={appliedData} key={""} isBusy={isBusyApplied} data={""} user={user}/>
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>In Process</h4>
        <p>0 grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={InProcess} grantCardText="Keep track of your applied grants !" key={""} isBusy={isBusy} data={""} user={user}/>
          
        </div>
      </div>

    </div>
  )
}

export default Account