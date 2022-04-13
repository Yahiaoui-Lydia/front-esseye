import React, { memo } from 'react';
import history from '../utils/history';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function Routage() {
	return (
		// <Router history={history}>
		// 	<Routes>
		// 		<Route path="/app">
		// 			<PrivateRoutes />
		// 		</Route>
		// 		<Route path="">
		// 			<Auth />
		// 		</Route>
		// 	</Routes>
		// </Router>

		 	<Routes>
				<Route path="/app/*"  element={<PrivateRoutes />}/>
				<Route path="/*"  element={<Auth />}/>	
		 		
		 	</Routes>
		
					
	)
}

export default Routage;