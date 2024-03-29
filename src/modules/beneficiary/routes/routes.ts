import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));
const profile = lazy(() => import('../pages/Dashboard/Profile'));
const settings = lazy(() => import('../pages/Dashboard/Settings'));

const event = lazy(() => import('../pages/Event'));
const createEvent = lazy(() => import('../pages/Event/create'));
const editEvent = lazy(() => import('../pages/Event/create/edit'));
const addEvent = lazy(() => import('../pages/Event/add'));
const addGift = lazy(() => import('../pages/Gift/add'));
const editGift = lazy(() => import('../pages/Gift/edit'));
const gift = lazy(() => import('../pages/Gift'));
const archive = lazy(() => import('../pages/Event/archive'));
const wallet = lazy(() => import('../pages/Wallet/Wallet'))
const walletPayout = lazy(() => import('../pages/Wallet/WalletPayout'))

const routes: RouteType[] = [
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: dashboard,
  },
  {
    path: '/profile',
    exact: true,
    auth: true,
    component: profile,
  },
  {
    path: '/settings',
    exact: true,
    auth: true,
    component: settings,
  },
  {
    path: '/wallet',
    exact: true,
    auth: true,
    component: wallet,
  },
  {
    path: '/wallet/request-payout',
    exact: true,
    auth: true,
    component: walletPayout,
  },
  {
    path: '/event/create',
    exact: true,
    auth: false,
    component: createEvent,
  },
  {
    path: '/event/edit/:id',
    exact: true,
    auth: false,
    component: editEvent,
  },
  {
    path: '/event/gift/:id',
    exact: true,
    auth: false,
    component: gift,
  },
  {
    path: '/event/:slug',
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
  {
    path: '/event/add-gift/:id',
    exact: true,
    auth: false,
    component: addGift,
  },
  {
    path: '/event/edit-gift/:wishlistId/:id',
    exact: true,
    auth: false,
    component: editGift,
  },
  {
    path: '/archive/:id',
    exact: true,
    auth: false,
    component: archive,
  },
];

export default routes;
