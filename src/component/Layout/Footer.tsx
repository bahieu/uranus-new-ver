import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { contactUs } from 'src/data/contactInfo';
import { Description, Title } from 'src/styles/Title';
import icon from 'src/assets/imgs/header/LogoIcon.png';
import fbLogo from 'src/assets/imgs/footer/facebook.png';
import InsLogo from 'src/assets/imgs/footer/instagram.png';
import TwitterLogo from 'src/assets/imgs/footer/twitter.png';

const Wrapper = styled.div`
  position: relative;
  background-color: #fafafa;
  width: 90%;
  left: 5%;
  padding: 30px 0;
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
`;

const ContainerContact = styled.div`
  width: 40%;
  position: relative;
`;

const SocialList = styled.div`
  align-items: center;
  height: 20px;
  width: 20px;
  display: flex;
  margin-bottom: 100px;
`;
const ImgSocial = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 26px;
  object-fit: cover;
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterLink = styled.a`
  color: #0d6efd;
  cursor: pointer;
`;

const FooterBottomContent = styled.div`
  margin-left: 138px;
  padding-right: 119px;
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
`;
const BrandContent = styled.div`
  top: -30px;
  width: 155px;
  height: auto;
  vertical-align: top;
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
          <Row className="justify-content-between item-align">
            {contactUs.map((v, i) => (
              <Col key={i} xs={5} className="item-align">
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
          <Description fontSize="12px" lineHeight="18px">
            Made with ☕ by{' '}
            <FooterLink>
              <u>Uranus</u>
            </FooterLink>
          </Description>
        </FooterBottom>
      </FooterBottomContent>
    </Wrapper>
  );
};

export default Footer;
