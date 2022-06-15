import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { contactUs } from 'src/data/contactInfo';
import { Description, Title } from 'src/styles/Title';
import icon from 'src/assets/imgs/header/LogoIcon.png';
import fbLogo from 'src/assets/imgs/footer/facebook.png';
import InsLogo from 'src/assets/imgs/footer/instagram.png';
import TwitterLogo from 'src/assets/imgs/footer/twitter.png';
import breakpoint from 'src/constant/devices';

const Wrapper = styled.footer`
  position: relative;
  background-color: #fafafa;
  width: 90%;
  left: 5%;
  padding: 30px 0;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    width: 100%;
    left: 0;
  }
`;
const ContactUS = styled.div`
  width: 100%;
  margin-bottom: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  .contact-content {
    margin-left: 138px;
  }
  .item-align {
    margin-bottom: 54px;
    margin: 0;
  }
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    .contact-content {
      margin-left: 0;
    }
  }
`;

const ContainerContact = styled.div`
  width: 40%;
  position: relative;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    text-align: center;
  }
`;

const SocialList = styled.div`
  align-items: center;
  height: 20px;
  width: 20px;
  display: flex;
  margin-bottom: 100px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    margin-bottom: 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const ImgSocial = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 26px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    flex-direction: column;
    position: relative;
  }
`;

const FooterLink = styled.a`
  color: #0d6efd;
  cursor: pointer;
`;

const FooterBottomContent = styled.div`
  margin-left: 138px;
  padding-right: 119px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    margin-bottom: 50px;
    margin-left: 0;
  }
`;
const ImgIcon = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;
const Brand = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-left: 138px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    position: relative;
    justify-content: space-around;
    margin-left: 0;
  }
`;
const BrandContent = styled.div`
  top: -30px;
  width: 155px;
  height: auto;
  vertical-align: top;
`;
const MadeByPC = styled.div`
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: none;
  }
`;
const MadeByMobile = styled.div`
  display: none;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: block;
    width: 100%;
    height: 60px;
    padding-top: 15px;
    text-align: center;
    position: absolute;
    bottom: 0;
    background-color: #f1f1f1;
  }
`;

const Footer = () => {
  const socialImgList: any[] = [fbLogo, TwitterLogo, InsLogo];

  return (
    <Wrapper>
      <ContactUS>
        <Title lineHeight="38px" fontSize="25px" className="contact-content">
          Contact Us
        </Title>
        <Brand>
          <ImgIcon src={icon} />
          <BrandContent>
            <Title lineHeight="19px" fontSize="22px" className="mb-0">
              Uranus.
            </Title>
            <Description lineHeight="24px" fontSize="12px" className="mt-0">
              Technology solution work
            </Description>
          </BrandContent>
        </Brand>

        <ContainerContact>
          <Row className="justify-content-between item-align   ">
            {contactUs.map((v, i) => (
              <Col key={i} xs={12} className="item-align">
                <Title fontSize="16px" lineHeight="24px">
                  {v.title}
                </Title>
                <Description
                  fontSize="12px"
                  lineHeight="18px"
                  marginBottom="30px"
                >
                  {v.description}
                </Description>
              </Col>
            ))}
          </Row>
        </ContainerContact>
      </ContactUS>
      <FooterBottomContent>
        <SocialList>
          {socialImgList.map((v, i) => (
            <ImgSocial key={i} src={v}></ImgSocial>
          ))}
        </SocialList>
        <FooterBottom>
          <Title fontSize="12px" lineHeight="18px">
            <u>© 2022 Uranus</u>
          </Title>
          <MadeByPC>
            <Description fontSize="12px" lineHeight="18px">
              Made with ☕ by{' '}
              <FooterLink>
                <u>Uranus</u>
              </FooterLink>
            </Description>
          </MadeByPC>
        </FooterBottom>
      </FooterBottomContent>
      <MadeByMobile>
        <Description fontSize="12px" lineHeight="18px">
          Made with ☕ by{' '}
          <FooterLink>
            <u>Uranus</u>
          </FooterLink>
        </Description>
      </MadeByMobile>
    </Wrapper>
  );
};

export default Footer;
