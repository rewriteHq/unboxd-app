import { lazy } from 'react';
import RouteType from '../../../routes/types';

const home = lazy(() => import('../pages/Home'));
const homeHeader = lazy(() => import('../pages/Home/header'));

const login = lazy(() => import('../pages/Login'));

const register = lazy(() => import('../pages/Register'));
const registerHeader = lazy(() => import('../pages/Register/header'));

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: home,
    header: homeHeader,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: login,
    header: homeHeader,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: register,
    header: homeHeader,
  },
];

export default routes;
