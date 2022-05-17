import React from 'react';

import Header from './Header';
import Footer from './Footer';

type Main = {
  isFooter?: boolean;
  children: React.ReactNode;
};

const MainLayout: React.FC<Main> = ({ isFooter = true, children }) => {
  return (
    <div>
      <Header />
      {children}
      {isFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
