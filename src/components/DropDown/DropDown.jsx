import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'

export default function DropDown({grants, setGrants, setActive}) {

  function deleteButton(e){
    setGrants(null)
    setActive(false)
  }

  return (
    <div className='dropdown'>
        <ul className='list'>

            {grants ? grants.map((grant) => {
                return  <Link to="results" onClick={deleteButton} key={grant.id}>{grant.title}</Link>
            }) : <p>No Notifications</p>}
        </ul>
    </div>
  )
}
