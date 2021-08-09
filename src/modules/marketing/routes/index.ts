import { lazy } from 'react';
import RouteType from '../../../routes/types';

const faq = lazy(() => import('../pages/FAQ'));
const privacy = lazy(() => import('../pages/Privacy'));
const terms = lazy(() => import('../pages/Terms'));
const homeHeader = lazy(() => import('../../auth/pages/Home/header'));
const homeFooter = lazy(() => import('../../auth/pages/Home/footer'));

const routes: RouteType[] = [
  {
    path: '/faq',
    exact: true,
    auth: false,
    component: faq,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/privacy',
    exact: true,
    auth: false,
    component: privacy,
    header: homeHeader,
    footer: homeFooter,
  },
  {
    path: '/terms',
    exact: true,
    auth: false,
    component: terms,
    header: homeHeader,
    footer: homeFooter,
  },
];

export default routes;
