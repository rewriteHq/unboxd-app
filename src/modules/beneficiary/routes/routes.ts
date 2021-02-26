import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));

const event = lazy(() => import('../pages/Event'));

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: dashboard,
  },
  {
    path: '/event',
    exact: true,
    auth: false,
    component: event,
  },
];

export default routes;
