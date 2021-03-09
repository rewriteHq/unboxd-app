import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));

const event = lazy(() => import('../pages/Event'));
const addEvent = lazy(() => import('../pages/Event/add'));

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: dashboard,
  },
  {
    path: '/event/create',
    exact: true,
    auth: false,
    component: event,
  },
  {
    path: '/event/add/:id',
    exact: true,
    auth: false,
    component: addEvent,
  },
];

export default routes;
