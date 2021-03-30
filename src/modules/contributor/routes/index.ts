import { lazy } from 'react';
import RouteType from '../../../routes/types';

const event = lazy(() => import('../pages/Event'));

const routes: RouteType[] = [
  {
    path: '/give/:id',
    exact: true,
    auth: false,
    component: event,
  },
];

export default routes;
