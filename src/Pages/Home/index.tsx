import React from 'react';

import MainLayout from 'src/component/Layout';
import Carousel from './Carousel';
import Welcome from './Welcome';
import OutVision from './OurVision';
import Designer from './Designers';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Carousel />
      <Welcome />
      <OutVision />
      <Designer />
    </MainLayout>
  );
};
export default HomePage;
