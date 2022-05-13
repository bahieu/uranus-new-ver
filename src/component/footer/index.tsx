import React from 'react';

import {
  Footer,
  DesktopSocialList,
  BottomBar,
  MobileSocialList,
  Policy,
  PolicyRow,
} from '../../styles/Footer';

import SocialList from './SocialList';

const PageFooter = () => {
  return (
    <Footer>
      <BottomBar>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>©2022</PolicyRow>
        </Policy>
      </BottomBar>
    </Footer>
  );
};

export default PageFooter;
