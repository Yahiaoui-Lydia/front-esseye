import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
function PublicRoutes() {
	return (
		<>
			{/* <Routes>
				
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				
			</Routes> */}
		
			<Routes>
			
				<Route path="/forgot-password"  element={	<ForgotPassword />}/>
				<Route path="/register"  element={<Register />}/>	
				<Route path="/login"  element={	<Login />}/>	
		 		
		 	</Routes>
			 <div>dida</div>
		</>
	)
}

export default PublicRoutes;