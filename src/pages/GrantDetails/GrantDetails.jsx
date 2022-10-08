import { Link } from 'react-router-dom'
import './GrantDetails.styles.css'
import GoBackArrow from './images/goBackArrow.svg'
import { useState, useEffect } from "react"
import { supabase } from "../../utils/supabase";


const GrantDetails = ({ user, setUser }) => {

  const [isBusy, setBusy] = useState(true)
  const [activeTab, setActiveTab] = useState('Overview')
  let url = `${window.location.pathname.toString()}`
  const idToDisplay = url.split('=')[1];
  let [eligible, setEligible] = useState("");
  const [resultData, setResultData] = useState([]);

  useEffect(function () {
    async function getResultData() {
      const { data, error } = await supabase
        .from('grants_data')
        .select('*')
        .match({ id: idToDisplay })
      setBusy(false);
      setResultData(data);
    }
    getResultData();
  }, []);


  const handleTabChange = (e) => {
    setActiveTab(e.target.innerText)
  }

  const appliedGrant = async () => {
    let grantId = resultData[0].id;
    const { data, error } = await supabase
      .from('user_grants')
      .insert([{ grantID:grantId, applied: true, userID: user.id }])

    if (error) {
      const { data, error } = await supabase
    .from('user_grants')
    .update([{ applied: true, }])
    .match({  grantID:grantId,  userID: user.id })
    } 
  }

  const savedGrant = async () => {
    let grantId = resultData[0].id;
    const { data, error } = await supabase
      .from('user_grants')
      .insert([{ grantID:grantId, saved: true, userID: user.id }])

      if (error) {
        const { data, error } = await supabase
      .from('user_grants')
      .update([{ saved: true, }])
      .match({  grantID:grantId,  userID: user.id })
      
      } 
  }

  const Overview = () => {
    return (
      <>
        <div className='container-info-div'>
          <div className='genInfo-div'>
            <h5>General Information</h5>
            <p id="grantDetails">{resultData[0].desc.substring(0, 1000) + "..."}</p>
          </div>
          <div className='applicationInfo-div'>
            <h5>Application Information</h5>
            <p id="grantDetails">This program funds projects that help expand high-speed internet access and use.
              It supports infrastructure deployment, mapping, and adoption.
              This includes planning and capacity-building in state offices.
              And it supports outreach and coordination with local communities.
              We aim to expand internet access to these priority areas:
              Unserved locations (No access to 25/3 Mbps)
              Underserved locations (No access to 100/20 Mbps)</p>
          </div>
          <div className='question-div'>
            <h5>Key questions to consider when preparing your application:</h5>

            <ul id='grants-list'>
              <li> Will these projects result in coverage for everyone in this state or territory?</li>
              <li> How will this project serve communities of color and address historic lack of investment in underrepresented communities?</li>
              <li> Will this project result in affordable internet service for consumers?</li>
              <li> What technology will be used to deploy the network and what speed will it provide to consumers? How easily will this technology scale over time?</li>
              <li> How long will it take to build the network?</li>
              <li> Does the applicant have a demonstrated record of compliance with federal labor and employment laws?</li>
              <li> How does this project account for climate change risks?</li>
              <li> Is this project sustainable, and can it provide a lasting solution for the community it serves?</li>
            </ul>
            <p id="grantDetails">
              States and Territories will be required to offer a low-cost plan to all their subscribers. The details and rules around the low-cost plans will be part of each state or territory's proposal and will require approval.
            </p>
          </div>
        </div>
      </>
    )
  }

  const WhoCanApply = () => {
    return (
      <>
        <div className='container-info-div'>
          <h5>Eligible Applicants:</h5>

          <div>
            The following government entities may apply to this program:
          </div>
          <br/>
          <div>
            {resultData[0].eligible_applicants}
          </div>
        </div>

      </>
    )
  }

  const Timeline = () => {
    return (
      <>
         <div className='container-info-div'>
          <h5>Application Timeline:</h5>
          <div>
            {resultData[0].close_date} - Application due date.
          </div>
        </div>
      </>
    )
  }

  const Resources = () => {
    return (
      <>
        <div className='container-info-div'>
          <div>
            All applicants should carefully review and prepare their applications according to instructions in the ReConnect Program Application Guide and program resources.
            This Application Guide and program resources can be found at https://www.usda.gov/reconnect/forms-and-resources.
            Applications must be submitted through the RUS on-line application system available on the program web site at https://www.usda.gov/reconnect/.
          </div>
          <div>
            <h5>A list of grant writers can be found at </h5> <button type="submit" id="matchesBtn">Grant Writer</button>
          </div>
          <div>
            Grantor Contact Information: 
            <p id="grantDetails">
              If you are having difficulty accessing the full announcement electronically, please contact Chris Troy CTroy@ctroy.com
            </p>
          </div>
        </div>

      </>
    )
  }

  // yo

  return (
    <>
      {isBusy ? (<p></p>) : (
        <div className="grantDetailsWrapper">
          <div className='grantDetailsContainer'>
            <div style={{ marginBottom: "80px" }} className='grantDetailsBackToBrowse'>
              <Link to={`/results`} style={{ textDecoration: 'none' }}><img style={{ marginRight: "6px", width: "20px" }} src={GoBackArrow} alt="Go back arrow" />Back to browse</Link>
            </div>

            <div className='grantBoxButtonHolder'>
              <div className='grantDetailsBox'>
                <h3 style={{ marginBlockStart: "0", marginBlockEnd: "0", textAlign: "start" }}>{resultData[0].title}</h3>
                <div style={{ marginTop: "10px" }} className='grantDetailsBoxApplicationStatus'>
                  <div style={{ marginRight: "10px" }} className='applicationStatus' />
                  <p style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>Application: Open</p>
                </div>
                <div className='grantDetailsBoxDeadline'>
                  <p style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>Deadline: {resultData[0].close_date}</p>
                </div>
              </div>

              <div className='grantButtons'>
                <a href={resultData[0].url} target='_blank' textDecoration = 'none' className='grantBtn'> <button className='grantBtn' onClick={appliedGrant}>Apply</button></a>
                <button className='grantBtn' onClick={savedGrant}>Save</button>
                <a href='https://www.linkedin.com' target='blank' rel='noreferrer'><button className='grantBtn'>Share</button></a>
              </div>
            </div>

            <div className="grantDetailsActualData">
              <div className='grantDetailsActualDataTop'>

                <div className={activeTab === 'Overview' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
                  Overview
                </div>

                <div className={activeTab === 'Who can Apply' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
                  Who can Apply
                </div>

                <div className={activeTab === 'Timeline' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
                  Timeline
                </div>

                <div className={activeTab === 'Resources' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
                  Resources
                </div>
              </div>

              <div className='grantDetailsActualDataBody'>
                {activeTab === 'Overview' && <Overview />}
                {activeTab === 'Who can Apply' && <WhoCanApply />}
                {activeTab === 'Timeline' && <Timeline />}
                {activeTab === 'Resources' && <Resources />}
              </div>
            </div>

          </div>

        </div>
      )
      }
    </>
  )
}

export default GrantDetails