import { Box, Container } from '@mui/material';
import './App.css';
import ioc from './lib/ioc';
import Homepage from './pages/homepage';


const App = () => {

  const handleMenuClick = (name: string) => {
    if (name === 'home-page') {
      ioc.routerService.push('/');
    }    
  }  


  return (
    <Container maxWidth="lg">
      <Homepage/>
    </Container>
  ) 
}

export default App;
