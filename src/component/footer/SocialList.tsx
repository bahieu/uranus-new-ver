import { Twitter, Facebook, Instagram } from '../../styles/Footer';
import InstagramLogo from '../../assets/imgs/svg/instagram-logo.svg';
const SocialList = () => {
  return (
    <div>
      <Twitter>
        <img src="InstagramLogo" alt="Instagram Logo" />
      </Twitter>
      <Facebook />
      <Instagram />
    </div>
  );
};
export default SocialList;
