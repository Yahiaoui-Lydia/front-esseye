import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import isLoggedIn from '../../utils/isLoggedIn';

function TopNav(props) {
 let history = useNavigate;

 function handleLogout() {
  localStorage.removeItem('roles');
  history.push('/');
 }

 return (
  <div className={`w3-bar w3-padding w3-card ${props.className}`} >
   <div className="w3-display-topleft w3-padding-large w3-xlarge">
    RBAC-V2
   </div>
   <div className="w3-right">
  
    {props.routes.map(({ path, title }) => (
      console.log("ghjkl"),
      console.log(props.path+path),
     <Link 
       key={path} 
       className="w3-bar-item" 
       to={props.path+path}
     >
       {title}
     </Link>
    ))}
    {isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }
   </div>
  </div>
 );
}

TopNav.propTypes = {
 routes: PropTypes.arrayOf(
  PropTypes.shape({
   path: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired
  })
 ).isRequired,
 prefix: PropTypes.string,
 className: PropTypes.string
};

TopNav.defaultProps ={
 prefix: '',
 className: ''
};

export default TopNav;