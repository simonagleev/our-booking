
import { Switch } from 'react-declarative';

import Scaffold from './components/Scaffold';

import routes from './routes';

import ioc from './lib/ioc';


const App = () => {

  const handleMenuClick = (name: string) => {
    if (name === 'home-page') {
      ioc.routerService.push('/');
    }    
  }  


  return (
    <Scaffold>
      <Switch
        items={routes}
      />
    </Scaffold>
  ) 
}

export default App;
