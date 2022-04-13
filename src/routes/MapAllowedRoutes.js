import React, { memo } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import NotFound  from '../components/commun/NotFound';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/function MapAllowedRoutes({routes, basePath, isAddNotFound}) {
 const match = useMatch(basePath);
 return (
  
  <Routes>
   {routes.map((route) => {


    const { 
     path, 
     component: Component,
     children, 
     title,
     permission,
     ...rest 
    } = route;    return (
      console.log( Component),
     <Route
      {...rest}
      key={path}

      path={match.pathnameBase + path}
     element={<Component children={children} />}/>
      
     
    )
   })}
    {isAddNotFound && <Route element={<NotFound />}/>}
  </Routes>
 )
}

export default memo(MapAllowedRoutes);