import React from 'react';
import ReactDOM from 'react-dom/client';
import FontStyle from './styles/FontStyles';
import GlobalStyles from './styles/Global';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <FontStyle />
    <App />
  </React.StrictMode>,
);
