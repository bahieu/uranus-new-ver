import React from 'react';

import {
  Footer,
  TopBar,
  DesktopSocialList,
  HR,
  BottomBar,
  MobileSocialList,
  Policy,
  PolicyRow,
} from '../../styles/Footer';

import SocialList from './SocialList';

const PageFooter = () => {
  return (
    <Footer>
      <TopBar>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>©2022</PolicyRow>
          <PolicyRow>Policy</PolicyRow>
        </Policy>
      </BottomBar>
    </Footer>
  );
};

export default PageFooter;
