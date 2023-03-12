import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './styles/Global';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/Theme';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
