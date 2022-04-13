
import { Navigate, useMatch} from 'react-router-dom';
import isLoggedIn from '../utils/isLoggedIn';
import getAllowedRoutes  from '../utils/getAllowedRoutes';
import PrivateRoutesConfig from '../config/PrivateRoutesConfig ';
import Module1 from '../components/Module1';
import MapAllowedRoutes from './MapAllowedRoutes';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 

function PrivateRoutes() {
 const match = useMatch('/app');
 let allowedRoutes = [];

 if (isLoggedIn()) {
 
   allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
   

 } else {
   return <Navigate to="/" />;
 }

 return (
<>
<div>
< Navbar>
< Nav>
<Link to='/app/M' >
<Nav.Item>
  bravo
</Nav.Item>

</Link>
</Nav>
</Navbar>
</div>
<Routes>
       
       <Route path="/M" element={<Module1/>}/>
        
       </Routes></>
  // <>
  //  <TopNav 
  //    routes={allowedRoutes} 
  //    path={match.pathnameBase}
  //    className="bg-white" 
  //  />
  //  <MapAllowedRoutes 
  //    routes={allowedRoutes} 
  //    basePath="/app" 
  //    isAddNotFound 
  //  />
  // </>
 );
}

export default PrivateRoutes;