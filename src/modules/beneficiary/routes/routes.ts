import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: dashboard,
  },
];

export default routes;
