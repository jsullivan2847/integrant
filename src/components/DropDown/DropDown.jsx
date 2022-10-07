import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function DropDown() {

    const [grants,SetGrants] = useState([])
    
    useEffect(() => {
        SetGrants(['New Grant','New Grant','New Grant','New Grant','New Grant',])
    })

  return (
    <div className='dropdown'>
        <ul className='list'>
            {grants && grants.map((grant) => {
                return <li>
                    <a href="">{grant}</a>
                </li>
            })}
        </ul>
    </div>
  )
}
