import { lazy } from 'react';
import RouteType from '../../../routes/types';

const home = lazy(() => import('../pages/Home'));
const homeHeader = lazy(() => import('../pages/Home/header'));
const homeFooter = lazy(() => import('../pages/Home/footer'));

const login = lazy(() => import('../pages/Login'));
const authHeader = lazy(() => import('../pages/Login/header'));
const register = lazy(() => import('../pages/Register'));
const forgotPassword = lazy(() => import('../pages/ForgotPassword'));
const verifyUser = lazy(() => import('../pages/VerifyUser'));

const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: home,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: login,
    header: authHeader,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: register,
    header: authHeader,
  },
  {
    path: '/auth-reset',
    exact: true,
    auth: false,
    component: forgotPassword,
    header: authHeader,
  },
  {
    path: '/verify-user',
    exact: true,
    auth: false,
    component: verifyUser,
    header: authHeader,
  }
];

export default routes;
