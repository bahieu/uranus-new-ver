import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'src/styles/index';
import GlobalStyles from 'src/styles/Global';
import 'bootstrap/dist/css/bootstrap.min.css';

const { lightTheme } = theme;

type App = {
  children: any;
};

const Application: React.FC<App> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Application;
