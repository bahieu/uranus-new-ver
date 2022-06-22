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
    margin-right: 0;
    margin-left: 0;
  }
  .col-7 {
    padding: 0;
  }
  .col-5 {
    padding-right: 0;
  }
  .left__content {
    position: relative;
    margin-left: auto;
    text-align: center;
    padding-right: 5px;
  }
`;
const WorkContent = styled.div`
  background-color: #ffffff;
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
        <Col xs={7} data-aos="fade-right" data-aos-duration="1200">
          <ImgWork src={w201} />
        </Col>
        <Col xs={5} data-aos="fade-left" data-aos-duration="1200">
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
          <WorkContent
            className="left__content"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <Title lineHeight="24px" fontSize="25px" marginTop="0">
              Amplifying audio.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </WorkContent>
        </Col>
        <Col xs={7}>
          <ImgWork
            src={w201}
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <ImgWork
            src={w201}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
        </Col>
        <Col xs={5}>
          <WorkContent
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
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
