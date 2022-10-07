import './NewNavbar.styles.css'
import IntegrantLogo from './images/integrantLogo.svg'
import * as userService from '../../utils/users-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dbChanges from '../../utils/db_listener';
import DropDown from '../DropDown/DropDown';
import Notifications from '../Notifications/Notifications';

const NewNavbar = ({ user, setUser }) => {

  dbChanges.on('INSERT', (e) => console.log(e));

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="navbarWrapper">
      <div className='logoWrapper'>
        <Link to="/"><img className='actualLogo' src={IntegrantLogo} alt="logo" /></Link>
      </div>
      <div className='rightSideWrapper'>
        <Link className='resourcesBtn' style={{ marginRight: "35px" }} to="/resources">Resources</Link>
        {!user ?
        <Link className='resourcesBtn' style={{ marginRight: "35px" }} to="/login">Log in</Link>
        :
        <>
        <Link className='resourcesBtn' style={{marginRight: "35px"}} to="" onClick={handleLogOut}>Log out</Link>
        <Link style={{ marginRight: "35px" }} to="/account"><FontAwesomeIcon icon={faUserCircle} size="2x" className="highlight" /></Link>
        <Notifications user={user}/>
        </>
        }
        
        <FontAwesomeIcon style={{width: '25px'}} icon={faSearch} size="2x" className="highlight" />
        
      </div>
    </div>
  )
}

export default NewNavbar