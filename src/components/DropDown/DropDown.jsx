import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function DropDown({grants}) {

    // const [list,setList] = useState(null)
    
    // useEffect(() => {
    //     grants ? setList(grants) : <></>
    // },[grants])
    console.log(grants)
  return (
    <div className='dropdown'>
        <ul className='list'>
            {grants && grants.map((grant, index) => {
                return <li>
                    <a key={index} href="">{grant.id}</a>
                </li>
            })}
        </ul>
    </div>
  )
}
