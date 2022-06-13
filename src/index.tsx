import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Application from './component/Application';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Application>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </Application>
  </React.StrictMode>,
);
