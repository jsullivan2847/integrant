import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import DropDown from '../DropDown/DropDown'
import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabase'
import getGrants from '../../utils/usergrants'

export default function Notifications({user}) {

    // const getGrants = ( async () => {
    //     const {data:questions, err}  = await supabase
    //   .from('user_profile')
    //   .select('*')
    //   .eq('userID', user.id);
    //   return questions;
    // })

    // console.log(getGrants())

    const [grants,setGrants] = useState([])

    useEffect(() => {
        getGrants(user)
        .then((data) => setGrants(data))
    }, [])



    

    const [active, setActive] = useState(true)
    const [open, setOpen] = useState(false);

    function handleBellClick(){
        !open ? setOpen(true) : setOpen(false)
        !open && active ? setActive(false) : <></>
  }
  return (
    <div style={{position: "relative"}}>
    <FontAwesomeIcon 
        onClick={handleBellClick}
        style={{marginRight: "35px", cursor: "pointer"}} 
        icon={faBell} size="2x" 
        className="highlight"/>
        {active && <div className='red-dot'></div>}
        {open &&  <DropDown grants={grants}/>}
    </div>
  )
}
