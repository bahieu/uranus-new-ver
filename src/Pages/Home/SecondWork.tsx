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
import breakpoint from 'src/constant/devices';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .col-2-pad {
    padding-top: 60px;
  }
  .body__workImg {
    display: flex;
    max-width: 100%;
    padding-bottom: 60px;
  }
  .col-padding {
    padding-right: 30px;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .ml-40 {
    margin-left: 40px;
  }
  .des-width {
    width: 272px;
  }
  .head__content {
    position: relative;
  }
  @media ${breakpoint.tablet} {
    .container {
      margin: 0;
      padding: 0;
      max-width: 100%;
    }
    .head__content {
      flex-wrap: nowrap;
      margin-bottom: 30px;
    }
    .head__work_img {
      max-width: 65%;
    }
    .body__content__Work {
    }
  }
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
  @media ${breakpoint.tablet} {
    position: relative;
  }
`;
const ImgWork = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${breakpoint.tablet} {
    object-fit: fill;
  }
`;

const BottomWork = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150px;
`;
const ContentBody = styled.div`
  position: relative;
  padding-right: 20px;
  left: 55%;
`;

const WorkBodyContent = styled.div`
  order: 1;
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
        <Row className="head__content">
          <Col lg={12} className="head__work_img">
            <ImgWork src={w201} />
          </Col>
          <Col>
            <HeaderWorkContent>
              <Title lineHeight="48px" fontSize="49px" marginBottom="0">
                Latest {'&'} greatest.
              </Title>
              <Description fontSize="14px" lineHeight="24px">
                Bringing the world to the Tokyo Olympics.
              </Description>
            </HeaderWorkContent>
          </Col>
        </Row>
        <Row className="body__content__Work">
          <Col className="body__workImg">
            <ImgWork src={w202} />
            <WorkBodyContent>
              <Title lineHeight="24px" fontSize="25px" marginTop="0">
                Amplifying audio.
              </Title>
              <Description fontSize="14px" lineHeight="24px">
                Bringing the world to the Tokyo Olympics.
              </Description>
            </WorkBodyContent>
          </Col>
          <Col className="col-2-pad">
            <ImgWork src={w203} />
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
          <Col xs={8} className="p-0 mb-5">
            <ImgWork src={w204} />
          </Col>
          <Col className="ml-40 p-0">
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
            <ContentBody>
              <Title lineHeight="24px" fontSize="25px" marginTop="0">
                Latest {'&'} greatest.
              </Title>
              <Description
                fontSize="14px"
                lineHeight="24px"
                className="des-width"
              >
                Creating a next-generation money-transfer service to transform
                the way money moves.
              </Description>
            </ContentBody>
          </Col>
          <Col xs={8} className="p-0">
            <ImgWork src={w205} />
          </Col>
        </Row>
      </BottomWork>
    </Wrapper>
  );
};

export default SecondWork;
