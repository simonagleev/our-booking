import { ISwitchItem } from 'react-declarative';
import HomePage from './pages/homepage';


export const routes: ISwitchItem[] = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    element: HomePage,
  },
];
  
  export default routes;