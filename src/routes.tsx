import { ISwitchItem } from 'react-declarative';
import HomePage from './pages/homepage';


export const routes: ISwitchItem[] = [
    {
      path: '/',
      element: HomePage,
    },
  ];
  
  export default routes;