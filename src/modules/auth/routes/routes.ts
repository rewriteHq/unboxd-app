import { lazy } from 'react';
import RouteType from '../../../routes/types';

// const home = lazy(() => import('../pages/Home'));
const newhome = lazy(() => import('../pages/Home/new-index'));
const homeHeader = lazy(() => import('../pages/Home/header'));
const newFooter = lazy(() => import('../pages/Home/new-footer'));
// const homeFooter = lazy(() => import('../pages/Home/footer'));

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
    component: newhome,
    header: homeHeader,
    footer: newFooter,
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
  },
];

export default routes;
