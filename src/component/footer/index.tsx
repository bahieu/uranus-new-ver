import {
  Footer,
  TopBar,
  GetTheApp,
  GetTheAppTitle,
  AppStoreApp,
  GoogleApp,
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
        <GetTheApp>
          <GetTheAppTitle> Get The App</GetTheAppTitle>
          <AppStoreApp />
          <GoogleApp />
        </GetTheApp>
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
          <PolicyRow>© 2012</PolicyRow>
          <PolicyRow>Policy Here</PolicyRow>
        </Policy>
      </BottomBar>
    </Footer>
  );
};

export default PageFooter;
