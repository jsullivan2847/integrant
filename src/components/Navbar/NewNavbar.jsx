import './NewNavbar.styles.css'
import IntegrantLogo from './images/integrantLogo.svg'
import * as userService from '../../utils/users-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import db_listener from '../../utils/db_listener';

const NewNavbar = ({ user, setUser }) => {

  db_listener();

  const [active, setActive] = useState(true)

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
        <div style={{position: 'relative'}}>
        <FontAwesomeIcon style={{marginRight: "35px", }} icon={faBell} size="2x" className="highlight"/>
        {active && <div className='red-dot'></div>}
        </div>
        </>
        }
        
        <FontAwesomeIcon style={{width: '25px'}} icon={faSearch} size="2x" className="highlight" />
        
      </div>
    </div>
  )
}

export default NewNavbar