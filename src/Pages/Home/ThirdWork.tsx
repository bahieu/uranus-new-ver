import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { Description, Title } from 'src/styles/Title';
import { brandList } from 'src/data/brands';
import { Rectangle } from 'src/component/shapes';
import w301 from 'src/assets/imgs/work03/w301.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .bt-content {
    position: absolute;
    background-color: #000000;
    opacity: 0.5;
    z-index: 1;
  }
`;

const ThirdWorkTitle = styled.div`
  width: 293px;
  margin-bottom: 50px;
`;
const BrandList = styled.div`
  margin-bottom: 50px;
`;

const ImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThirdWork: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ThirdWorkTitle>
          <Title lineHeight="48px" fontSize="49px">
            Latest {'&'} greatest.
          </Title>
          <Description lineHeight="24px" fontSize="14px">
            Bringing the world to the Tokyo Olympics.
          </Description>
        </ThirdWorkTitle>
        <BrandList>
          <Row className="text-left">
            {brandList.map((v, i) => (
              <Col xs={6} key={i}>
                <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
                <Title fontSize="16px" lineHeight="16px">
                  {v.name}
                </Title>
                <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
              </Col>
            ))}
          </Row>
        </BrandList>
        <Row className="m-0 bt-work">
          <Col className="bt-content">
            <Title lineHeight="24px" fontSize="24px">
              Be one of us..
            </Title>
          </Col>
          <Col xs={12} className="p-0">
            <ImgPicture src={w301} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ThirdWork;
