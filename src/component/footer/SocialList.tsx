import { Twitter, Facebook, Instagram } from '../../styles/Footer';
// import twitterLogo from '../../assets/imgs/svg/instagram-logo.svg';

const SocialList = () => {
  return (
    <>
      <Twitter>{/* <img src={twitterLogo} alt="TwitterLogo"></img> */}</Twitter>
      <Facebook />
      <Instagram />
    </>
  );
};
export default SocialList;
