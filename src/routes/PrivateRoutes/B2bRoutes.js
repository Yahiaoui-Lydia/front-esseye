
import { Navigate} from 'react-router-dom';
import isLoggedIn from '../../utils/isLoggedIn';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import B2bhome from '../../composants/B2bhome';
import PublicRoutes from '../PublicRoutes';
import React, {  useEffect } from 'react';
import Auth from '../Router';
function verify() { 
     if (isLoggedIn()=== 'a') {   
             return  <Navigate to="/" />
    }else{ 
             <Navigate to="/" /> 
             return <Auth />
    } }

function B2bRoutes() {

    useEffect(() => { verify()
         });
   
  
 
  return (
 <div>
 <div>
 < Navbar>
 < Nav>
 <Link to='/' >
 <Nav.Item>
   bravo
 </Nav.Item>
 
 </Link>
 </Nav>
 </Navbar>
 </div>
 <Routes>
        
        <Route path="/" element={<B2bhome/>}/>
         
        </Routes></div>
  )}
  export default B2bRoutes;