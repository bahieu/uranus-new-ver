import React from 'react';

import MainLayout from 'src/component/Layout';
import CarouselMobile from './CarouselMobile';

import FirstWork from './FirstWork';
import JoinOurCommunity from './JoinOurCommunity';
import Question from './Questions';
import SecondWork from './SecondWork';
import ThirdWork from './ThirdWork';
import WeTeam from './WeTeam';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <FirstWork />
      <CarouselMobile />
      <SecondWork />
      <WeTeam />
      <ThirdWork />
      <Question />
      <JoinOurCommunity />
    </MainLayout>
  );
};
export default HomePage;
