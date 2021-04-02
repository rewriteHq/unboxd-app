import { lazy } from 'react';
import RouteType from '../../../routes/types';

const event = lazy(() => import('../pages/Event'));
const gift = lazy(() => import('../pages/Event/gift'));
const homeHeader = lazy(() => import('../../auth/pages/Home/header'));

const routes: RouteType[] = [
  {
    path: '/:slug',
    exact: true,
    auth: false,
    component: event,
    header: homeHeader,
  },
  {
    path: '/:slug/:id',
    exact: true,
    auth: false,
    component: gift,
  },
];

export default routes;
