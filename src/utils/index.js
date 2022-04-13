import { intersection } from 'lodash';

export function isLoggedIn() {
	
	return 'ADMIN';
    // !!localStorage.getItem('roles')
}

export function isArrayWithLength(arr) {
 return (Array.isArray(arr) && arr.length)
}

export function getAllowedRoutes(routes) {
  var tab=[];
 const roles = JSON.parse('ADMIN');

//  return routes.filter(({ permission }) => {
// //   if(!permission) return true;

// //   else if(!isArrayWithLength(permission)) return true;
// //   else return intersection(permission, roles).length;


//  });

routes.map((route)=>{
    if (route.permission){
        route.permission.map((permi)=>{ if(permi==roles){tab.push(route)} } ) }
    return tab 
    }

)


}
