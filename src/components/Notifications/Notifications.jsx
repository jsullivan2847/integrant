import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import DropDown from '../DropDown/DropDown'
import { useState, useEffect } from 'react'
import dbChanges from '../../utils/db_listener'
import getGrants from '../../utils/usergrants'

export default function Notifications({user}) {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false);
    const [grants,setGrants] = useState([])
    
    dbChanges.on('INSERT', (e) => {
        // console.log(e)
        setActive(true)
    });
    useEffect(() => {
        getGrants(user)
        .then((data) => setGrants(data))
    }, [active])

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
