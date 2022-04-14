import React, { memo } from 'react';
import { Navigate} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './PrivateRoutes/AdminRoutes';
import B2bRoutes from './PrivateRoutes/B2bRoutes';
import isLoggedIn from '../utils/isLoggedIn';
function Auth() {

    if (isLoggedIn) {   
        if(isLoggedIn ()==='a'){
            
            return <AdminRoutes />
        }
        if(isLoggedIn() ==='b'){
            return  <B2bRoutes />
        }
        return <PublicRoutes />
     }  
    return <PublicRoutes />

}

export default memo(Auth);