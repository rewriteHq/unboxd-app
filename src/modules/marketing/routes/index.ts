import { lazy } from 'react';
import RouteType from '../../../routes/types';

const about = lazy(() => import('../pages/About'));
// const homeHeader = lazy(() => import('../pages/Home/header'));

const routes: RouteType[] = [
  {
    path: '/about',
    exact: true,
    auth: false,
    component: about,
    // header: homeHeader,
  },
];

export default routes;
