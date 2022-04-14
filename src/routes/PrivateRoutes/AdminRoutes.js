import { Navigate} from 'react-router-dom';
import isLoggedIn from '../../utils/isLoggedIn';
import {Link} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Adminhome from '../../composants/Adminhome';
import Auth from '../Router'
import React, {  useEffect } from 'react';
import NavBar from '../../composants/admin/NavBar';


function verify() { 
  if (isLoggedIn()=== 'a') {   
    
          return  <Navigate to="/" />
 }else{ 
          <Navigate to="/" /> 
          return <Auth />
 } }


function AdminRoutes() {
  useEffect(() => { verify()
  }); 
 
 
  return (
 <div>
        <NavBar/>
        <Routes>
        
             <Route path="/" element={<Adminhome/>}/>
         
        </Routes></div>
  )

  } 
export default AdminRoutes;
 
 