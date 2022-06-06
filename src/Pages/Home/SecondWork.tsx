import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import w201 from 'src/assets/imgs/work02/w201.png';
import w202 from 'src/assets/imgs/work02/w202.png';
import w203 from 'src/assets/imgs/work02/w203.png';
import w204 from 'src/assets/imgs/work02/w204.png';
import w205 from 'src/assets/imgs/work02/w205.png';
import { Title, Description } from 'src/styles/Title';
import { Rectangle } from 'src/component/shapes';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .col-2-pad {
    padding-top: 60px;
  }
  .col-1-pad {
    padding-bottom: 60px;
  }
  .col-padding {
    padding-left: 18%;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .des-width {
    width: 272px;
  }
`;

const HeaderWork = styled.div`
  position: relative;
  width: 100%;
  padding-right: 3%;
  margin-bottom: 20px;
  display: grid;
  gap: 10px;
`;
const WorkTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const HeaderWorkContent = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 300px;
  height: 165px;
  bottom: 0;
  right: 0;
  padding-left: 16px;
`;
const ImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BottomWork = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150px;
`;

const SecondWork: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WorkTitle>
          <Rectangle
            bgColor="#00A3FF"
            width="216px"
            height="2px"
            marginRight="20px"
          />
          <Title lineHeight="18px" fontSize="18px">
            Work
          </Title>
        </WorkTitle>
        <HeaderWork>
          <ImgPicture src={w201} />
          <HeaderWorkContent>
            <Title lineHeight="48px" fontSize="49px" marginBottom="0">
              Latest {'&'} greatest.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </HeaderWorkContent>
        </HeaderWork>
        <Row>
          <Col className="col-1-pad">
            <ImgPicture src={w202} />
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Amplifying audio.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </Col>
          <Col className="col-2-pad">
            <ImgPicture src={w203} />
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Above {'&'} beyond.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </Col>
        </Row>
      </Container>
      <BottomWork>
        <Row className="mb-50 m-0 flex-nowrap">
          <Col lg={8} className="p-0 mb-5">
            <ImgPicture src={w204} />
          </Col>
          <Col className="ml-20">
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Latest {'&'} greatest.
            </Title>
            <Description
              fontSize="14px"
              lineHeight="24px"
              className="des-width"
            >
              Creating a next-generation money-transfer service to transform the
              way money moves.
            </Description>
          </Col>
        </Row>
        <Row className="m-0 flex-nowrap">
          <Col className="col-padding">
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Latest {'&'} greatest.
            </Title>
            <Description
              fontSize="14px"
              lineHeight="24px"
              className="des-width"
            >
              Creating a next-generation money-transfer service to transform the
              way money moves.
            </Description>
          </Col>
          <Col lg={8} className="p-0">
            <ImgPicture src={w205} />
          </Col>
        </Row>
      </BottomWork>
    </Wrapper>
  );
};

export default SecondWork;
