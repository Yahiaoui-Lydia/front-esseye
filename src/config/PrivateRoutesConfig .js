import Roles from '../config/Roles'

// Components
import Module1 from '../components/Module1';
import Module2 from '../components/Module2';
import Module3 from '../components/Module3';
import ModuleN from '../components/ModuleN';
import ModuleNChild1 from '../components/ModuleNChild1';
import ModuleNChild2 from '../components/ModuleNChild2';
import ModuleNChild3 from '../components/ModuleNChild3';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';


// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* */

const PrivateRoutesConfig = [
 {
  component: Module1,
  path: '/',
  title: 'Module1',
  exact: true,
 },
 {
  component: Module2,
  path: '/module-2',
  title: 'Module - 2',
 },
 {
  component: Module3,
  path: '/module-3',
  title: 'Module - 3',
 },
 {
  component: ModuleN,
  path: '/module-n',
  title: 'Module - N',
  permission: [
   Roles.SUPER_ADMIN,
   Roles.ADMIN,
   Roles.MANAGER
  ],
  children: [
   {
    component: ModuleNChild1,
    path: '/child-1',
    title: 'Child - 1',
   },
   {
    component: ModuleNChild2,
    path: '/child-2',
    title: 'Child - 2',
   },
   {
    component: ModuleNChild3,
    path: '/child-3',
    title: 'Child - 3',
    permission: [
     Roles.SUPER_ADMIN,
     Roles.ADMIN
    ]
   }
  ]
 },
 {
  component: Dashboard,
  path: '/dashboard',
  title: 'Dashboard',
  permission: [
   Roles.SUPER_ADMIN,
   Roles.ADMIN,
  ],
 },
 {
  component: Profile,
  path: '/profile',
  title: 'Profile',
  permission: [
   Roles.SUPER_ADMIN,
   Roles.ADMIN,
   Roles.MANAGER,
   Roles.CUSTOMER
  ],
 },
]
export default PrivateRoutesConfig;