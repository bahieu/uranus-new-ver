import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import icon from 'src/assets/imgs/header/LogoIcon.png';
import navIcon from 'src/assets/imgs/header/NavIcon.png';
import { navbar } from '../../data/navbar';
import { Description, Title } from 'src/styles/Title';
import Button from '../button';
import breakpoint from 'src/constant/devices';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 50px;
  transition: color 0.3s linear;
  position: relative;
  z-index: 2;
  width: 100%;
  .nav__pc {
    margin: 0;
  }
  .header-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media ${breakpoint.mobile}, ${breakpoint.tablet} {
      width: 270px;
      padding: 0;
      justify-content: space-around;
    }
  }
  .header-menu {
    display: flex;
    padding: 0;
    justify-content: space-around;
    align-items: center;
    .nav_items {
      display: flex;
      flex-wrap: nowrap;

      @media ${breakpoint.mobile}, ${breakpoint.tablet} {
        display: none;
      }
    }
  }
  .header__btn {
    align-self: center;
    text-align: center;
    padding-left: 0;
    @media ${breakpoint.mobile}, ${breakpoint.tablet} {
      margin: 0;
      padding: 0;
      text-align: right;
    }
  }
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    padding-top: 20px;
    .container {
      margin: 0 30px 0 0;
      padding: 0;
      max-width: 100%;
    }
    .col-lg-8 {
      padding: 0;
      /* justify-content: flex-start; */
      /* width: 50%; */
    }
    .mobile__header__btn {
      padding: 10px 12px;
      margin-right: 20px;
      background-color: #fff;
      border: 2px solid #00a3ff;
      color: #00a3ff;
      border-radius: 90px;
    }
    .nav__mobile {
      margin-left: 4%;
      justify-content: space-around;
    }
  }
`;

const ImgIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: block;
  }
`;
const NavIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: none;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
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

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-between flex-nowrap nav__mobile nav__pc ">
          <Col md={4} lg={2} className="header-brand">
            <NavIcon src={navIcon} />
            <ImgIcon src={icon} />
            <BrandContent>
              <Title lineHeight="19px" fontSize="22px" className="mb-0">
                Uranus.
              </Title>
              <Description lineHeight="24px" fontSize="12px" className="mt-0">
                Technology solution work
              </Description>
            </BrandContent>
          </Col>
          <Col md={4} lg={8} className="header-menu">
            <ul className="text-end nav_items">
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i}>
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </ul>
            <Button
              color="#fff"
              backgroundColor="#00A3FF"
              padding="16px 48px"
              border="none"
              className="mobile__header__btn"
            >
              Contact us
            </Button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
