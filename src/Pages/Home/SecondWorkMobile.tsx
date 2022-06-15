import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import w201 from 'src/assets/imgs/work02/w201.png';

import { Title, Description } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .row {
    margin-top: 20px;
  }
  .left__content {
    position: relative;
  }
`;
const WorkContent = styled.div`
  background-color: #ffffff;
  width: 141px;
`;
const ImgWork = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondWorkMobile: React.FC = () => {
  return (
    <Wrapper className="d-block d-xl-none">
      <Row>
        <Col xs={7}>
          <ImgWork src={w201} />
        </Col>
        <Col xs={5}>
          <WorkContent>
            <Title
              lineHeight="21px"
              fontSize="22px"
              fontWeight="700"
              marginTop="0"
            >
              Latest {'&'} greatest.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </WorkContent>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <WorkContent className="left__content">
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Amplifying audio.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </WorkContent>
        </Col>
        <Col xs={7}>
          <ImgWork src={w201} />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <ImgWork src={w201} />
        </Col>
        <Col xs={5}>
          <WorkContent>
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Above {'&'} beyond.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </WorkContent>
        </Col>
      </Row>
    </Wrapper>
  );
};
export default SecondWorkMobile;