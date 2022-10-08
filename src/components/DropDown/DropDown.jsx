import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function DropDown({grants}) {
  return (
    <div className='dropdown'>
        <ul className='list'>
            {grants && grants.map((grant) => {
                return <li key={grant.id} ><a href="">{grant.title}</a></li>
            })}
        </ul>
    </div>
  )
}
