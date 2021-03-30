import { lazy } from 'react';
import RouteType from '../../../routes/types';

const event = lazy(() => import('../pages/Event'));
const homeHeader = lazy(() => import('../../auth/pages/Home/header'));

const routes: RouteType[] = [
  {
    path: '/give/:id',
    exact: true,
    auth: false,
    component: event,
    header: homeHeader,
  },
];

export default routes;
