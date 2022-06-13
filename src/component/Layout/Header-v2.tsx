import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import logoIcon from 'src/assets/imgs/header/LogoIcon.png';
import { navbar } from 'src/data/navbar';
import navIcon from 'src/assets/imgs/header/NavIcon.png';
import timesIcon from 'src/assets/imgs/header/times.png';
import breakpoint from 'src/constant/devices';
import { Description, Title } from 'src/styles/Title';
import Button from '../button';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 30px;
  position: relative;
  transition: color 0.3s linear;
  z-index: 2;
  width: 100%;
  .header-menu {
    display: flex;
    padding: 0;
    justify-content: space-around;
    align-items: center;
  }
  @media ${breakpoint.mobile} {
    position: absolute;
    .navIcon-mobile {
      position: absolute;
      left: 7%;
      transform: translateX(-10%);
    }
  }
`;
const HeaderBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    position: absolute;
    left: 10%;
  }
`;

const ImgIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding-left: 50px;
  &:hover {
    color: #00a3ff;
    text-decoration-line: underline;
  }
`;

const NavbarIcon = styled.label`
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    position: absolute;
    left: 7%;
    transform: translateX(-10%);
  }
`;
const NavbarImg = styled.img`
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: block;
    position: absolute;
    width: 24px;
    height: 17px;
    top: 50px;
    opacity: 1;
    width: 32px;
    height: 32px;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
  display: none;
`;
const NavInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const NavMobile = styled.div`
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    max-width: 100%;
    background-color: #e5e5e5;
    display: flex;
    flex-flow: column nowrap;
    transform: translateX(-100%);
    .nav__link__mobile {
      font-size: 20px;
      margin-top: 40px;
      padding: 32px;
      text-align: center;
      &:hover {
        background-color: #ccc;
      }
    }

    ${NavInput}:checked ~ && {
      transform: translateX(0);
    }
  }
  display: none;
`;
const Overlay = styled.label`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  ${NavInput}:checked ~ && {
    display: block;
  }
`;
const BrandContent = styled.div`
  top: -30px;
  width: 155px;
  height: auto;
  vertical-align: top;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    padding: 0;
  }
`;

const NavPC = styled.ul`
  text-align: right;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: none;
  }
`;

const TimesIcon = styled.label``;
const TimesIconImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  opacity: 1;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-lg-between align-baseline">
          <Col lg={2} className="p-0 ">
            <NavbarIcon htmlFor="nav-mb-input">
              <NavbarImg src={navIcon} />
            </NavbarIcon>
            <HeaderBrand>
              <ImgIcon src={logoIcon} />
              <BrandContent>
                <Title lineHeight="19px" fontSize="22px" className="mb-0">
                  Uranus.
                </Title>
                <Description lineHeight="24px" fontSize="12px" className="mt-0">
                  Technology solution work
                </Description>
              </BrandContent>
            </HeaderBrand>
          </Col>
          <Col lg={8} className="header-menu">
            <NavPC>
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i}>
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </NavPC>
            <Button
              color="#fff"
              backgroundColor="#00A3FF"
              padding="16px 48px"
              border="none"
              className="mobile__header__btn"
            >
              Contact us
            </Button>
            <NavInput id="nav-mb-input" className="nav-input" />
            <Overlay htmlFor="nav-mb-input" />
            <NavMobile>
              <TimesIcon htmlFor="nav-mb-input">
                <TimesIconImg src={timesIcon} />
              </TimesIcon>
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i} className="nav__link__mobile">
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </NavMobile>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
