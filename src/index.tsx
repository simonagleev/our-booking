import ReactDOM from 'react-dom';
import App from './App';

import AuthProvider from 'react-vk';


const wrappedApp = (
  <AuthProvider>
    <App />
  </AuthProvider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));