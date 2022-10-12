// import './ProfileCompletePage.css';
import { useState , useEffect} from "react"

import { useNavigate } from "react-router-dom";
import {supabase} from "../../utils/supabase";
import NewResultCard from "../../components/ResultCard/NewResultCard";
import './ResultPage.styles.css'
import ToggleSwitch from "../../components/toggleSwitch/toggleSwitch";



const ResultPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  
  const [isBusy, setBusy] = useState(true)
  const [resultData, setResultData] = useState([]);

  useEffect(function () {
    async function getResultData() {
      const {data:questions, err}  = await supabase
      .from('user_profile')
      .select('*')
      .eq('userID', user.id);
      // console.log(questions)
   
      const zipcode = questions[0].zipcode;
      const role = questions[0].role;
      const amount = questions[0].amount;
      // console.log (role + " " + zipcode )
      
      const { data, error } = await supabase
      .from('grants_data')
      .select('*')
      .in('state', [zipcode, 'All'])
      .ilike('tags', '%'+role+'%')
      .order('opp_type', { ascending: false })
      // console.log(data);
        setBusy(false);
        setResultData(data);
    }
    
    getResultData();
}, []);


  
  const resultCards = resultData.map((data, idx) => {
    return ( 
      <NewResultCard key={`key-${idx}`} isBusy={isBusy} dataValue={data} user={user}/>
    )
  })

  return (
    <div className="resultsPageWrapper">
      <div className="resultsContainer">
        <div className="resultPageTopHeader">
          <h3>Your grant matches!</h3>

          <div style={{display: 'flex'}}>
            <ToggleSwitch label="Notifications"/>
          </div>
        </div>

        <div>
          <div>
            {resultCards}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResultPage
