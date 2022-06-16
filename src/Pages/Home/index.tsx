import React from 'react';

import MainLayout from 'src/component/Layout';

import CarCarousel from './Carousel';
import CarouselMobile from './CarouselMobile';
import JoinOurCommunity from './JoinOurCommunity';
import JoinOurCommunityMobile from './JoinOurCommunityMobile';
import Question from './Questions';
// import QuestionsMobile from './QuestionsMobile';
import SecondWork from './SecondWork';
import SecondWorkMobile from './SecondWorkMobile';
import ThirdWork from './ThirdWork';
import ThirdWorkMobile from './ThirdWorkMobile';
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
      <ThirdWorkMobile />
      <Question />
      {/* <QuestionsMobile /> */}
      <JoinOurCommunity />
      <JoinOurCommunityMobile />
    </MainLayout>
  );
};
export default HomePage;
