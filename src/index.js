import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'helpers/GlobalStyles/GlobalStyles.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/your_campers">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
