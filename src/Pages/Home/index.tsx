import React from 'react';

import MainLayout from 'src/component/Layout';
import FirstWork from './FirstWork';
import SecondWork from './SecondWork';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <FirstWork />
      <SecondWork />
    </MainLayout>
  );
};
export default HomePage;
