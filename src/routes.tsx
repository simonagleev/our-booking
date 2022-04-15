import { ISwitchItem } from 'react-declarative';

import {
  CC_ERROR,
  CC_DENIED,
  CC_NOTFOUND,
  CC_OFFLINE,
} from './config';

import HomePage from './pages/HomePage';
import HotelsListPage from './pages/HotelsListPage';

import DeniedPage from './pages/system/DeniedPage';
import ErrorPage from './pages/system/ErrorPage';
import NotFoundPage from './pages/system/NotFoundPage';
import OfflinePage from './pages/system/OfflinePage';

const systemRoutes: ISwitchItem[] = [
  {
    path: CC_ERROR,
    element: ErrorPage,
  },
  {
    path: CC_DENIED,
    element: DeniedPage,
  },
  {
    path: CC_NOTFOUND,
    element: NotFoundPage,
  },
  {
    path: CC_OFFLINE,
    element: OfflinePage,
  },
]

export const routes: ISwitchItem[] = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    element: HomePage,
  },
  {
    path: '/hotels',
    element: HotelsListPage,
  },
  ...systemRoutes
];

export default routes;