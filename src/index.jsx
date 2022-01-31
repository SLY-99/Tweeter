import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Context/localization';
import { Provider as ThemeProvider } from './Context/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

