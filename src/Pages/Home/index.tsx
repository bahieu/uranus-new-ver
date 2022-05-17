import React from 'react';

import MainLayout from 'src/component/Layout';
import Carousel from './Carousel';
import Welcome from './Welcome';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Carousel />
      <Welcome />
    </MainLayout>
  );
};
export default HomePage;
