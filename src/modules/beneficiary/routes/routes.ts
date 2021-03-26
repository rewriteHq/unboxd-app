import { lazy } from 'react';
import RouteType from '../../../routes/types';

const dashboard = lazy(() => import('../pages/Dashboard'));

const event = lazy(() => import('../pages/Event'));
const createEvent = lazy(() => import('../pages/Event/create'));
const editEvent = lazy(() => import('../pages/Event/edit'));
const addEvent = lazy(() => import('../pages/Event/add'));
const addGift = lazy(() => import('../pages/Gift/add'));
const editGift = lazy(() => import('../pages/Gift/edit'));
const gift = lazy(() => import('../pages/Gift'));
const archive = lazy(() => import('../pages/Event/archive'));

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
    path: '/event/:id',
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
