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
  .header-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }
  .header-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    .nav__mobile {
      justify-content: center !important;
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

  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-lg-between  align-baseline flex-nowrap nav__mobile ">
          <Col lg={4} className="header-brand">
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
          <Col lg={8} className="header-menu">
            <ul className="text-end">
              {navbar.map((v, i) => {
                return (
                  <StyleLink
                    to={v.href}
                    key={i}
                    className={i === 0 ? 'first-nav-link' : undefined}
                  >
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </ul>
            <Button
              color="#fff"
              backgroundColor="#00A3FF"
              padding="16px 54px"
              border="none"
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
