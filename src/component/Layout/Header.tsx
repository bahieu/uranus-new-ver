import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import icon from 'src/assets/imgs/header/Union.png';
import { navbar } from '../../data/navbar';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 50px;
  transition: color 0.3s linear;
  position: absolute;
  z-index: 2;
  width: 100%;
`;

const ImgIcon = styled.img`
  width: 100px;
  cursor: pointer;
`;

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding-left: 45px;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-lg-between align-baseline">
          <Col lg={2}>
            <ImgIcon src={icon} />
          </Col>
          <Col lg={8}>
            <ul className="text-end">
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i}>
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
