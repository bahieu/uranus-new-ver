import React from 'react';

import {
  Footer,
  TopBar,
  DesktopSocialList,
  HR,
  Menu,
  MenuHead,
  MenuLink,
  BottomBar,
  MobileSocialList,
  Policy,
  PolicyRow,
} from '../../styles/Footer';

import SocialList from './SocialList';
import { menu } from './menuFooter';

const PageFooter = () => {
  return (
    <Footer>
      <TopBar>
        {menu.map(({ name, links }) => (
          <Menu key={name}>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink to={url} key={title}>
                {title}
              </MenuLink>
            ))}
          </Menu>
        ))}
      </TopBar>
      <HR />
      <BottomBar>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
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
