import { lazy } from 'react';
import RouteType from '../../../routes/types';

const home = lazy(() => import('../pages/Home'));
const login = lazy(() => import('../pages/Login'));
const register = lazy(() => import('../pages/Register'));

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: home,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: register,
  },
];

export default routes;
