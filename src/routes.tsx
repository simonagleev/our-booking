import { ISwitchItem } from 'react-declarative';

import {
  CC_ERROR,
  CC_DENIED,
  CC_NOTFOUND,
  CC_OFFLINE,
} from './config';

import HomePage from './pages/HomePage';
import HotelsListPage from './pages/HotelsListPage';

const systemRoutes: ISwitchItem[] = [
  {
    path: CC_ERROR,
    element: () => <p>CC_ERROR</p>,
  },
  {
    path: CC_DENIED,
    element: () => <p>CC_DENIED</p>,
  },
  {
    path: CC_NOTFOUND,
    element: () => <p>CC_NOTFOUND</p>,
  },
  {
    path: CC_OFFLINE,
    element: () => <p>CC_OFFLINE</p>,
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