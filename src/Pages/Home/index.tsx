import React from 'react';

import MainLayout from 'src/component/Layout';

import CarCarousel from './Carousel';
import CarouselMobile from './CarouselMobile';
import JoinOurCommunity from './JoinOurCommunity';
import Question from './Questions';
import SecondWork from './SecondWork';
import SecondWorkMobile from './SecondWorkMobile';
import ThirdWork from './ThirdWork';
import WeTeam from './WeTeam';
import WeTeamMobile from './WeTeamMobile';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <CarCarousel />
      <CarouselMobile />
      <SecondWork />
      <SecondWorkMobile />
      <WeTeam />
      <WeTeamMobile />
      <ThirdWork />
      <Question />
      <JoinOurCommunity />
    </MainLayout>
  );
};
export default HomePage;
