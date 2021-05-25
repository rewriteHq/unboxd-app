import { lazy } from 'react';
import RouteType from '../../../routes/types';

const event = lazy(() => import('../pages/Event'));
const gift = lazy(() => import('../pages/Event/gift'));

const routes: RouteType[] = [
  {
    path: '/:slug',
    exact: true,
    auth: false,
    component: event,
  },
  {
    path: '/:slug/:id',
    exact: true,
    auth: false,
    component: gift,
  },
];

export default routes;
