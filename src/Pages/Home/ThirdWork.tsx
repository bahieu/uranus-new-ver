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
  overflow: hidden;
  margin-bottom: 80px;
`;

const ThirdWorkTitle = styled.div`
  width: 293px;
  margin-bottom: 50px;
`;
const BrandList = styled.div`
  margin-bottom: 50px;
`;

const BottomThirdWork = styled.div`
  position: relative;
  height: 517px;

  background: url(${w301}) center no-repeat;
  background-size: cover;
  background-position: top center;

  width: ${window.innerWidth}px;
`;
const BottomThirdWorkContent = styled.div`
  position: absolute;
  width: 406px;
  height: 517px;
  background: rgba(0, 0, 0, 0.5);
`;
const ContentTitle = styled.div`
  margin-top: 170px;
  margin-left: 10%;
  display: flex;
  align-items: center;
`;
const ContentBody = styled.div`
  width: 414px;
  margin-left: 10%;
  .title {
    width: 200px;
  }
`;

const ThirdWork: React.FC = () => {
  return (
    <Wrapper className="d-none d-xl-block">
      <Container>
        <ThirdWorkTitle
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
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
              <Col
                xs={6}
                key={i}
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
                <Title fontSize="16px" lineHeight="16px">
                  {v.name}
                </Title>
              </Col>
            ))}
            <Col
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
            </Col>
            <Col
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
            </Col>
          </Row>
        </BrandList>
      </Container>
      <Container className="container__img">
        <BottomThirdWork
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <BottomThirdWorkContent
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="00"
            data-aos-duration="1000"
          >
            <ContentTitle>
              <Title lineHeight="18px" fontSize="18px" color="#fff">
                Work
              </Title>
              <Rectangle
                bgColor="#00A3FF"
                width="216px"
                height="2px"
                marginLeft="20px"
              />
            </ContentTitle>
            <ContentBody>
              <Title
                lineHeight="48px"
                fontSize="49px"
                className="title"
                color="#fff"
              >
                Be one of us..
              </Title>
              <Description lineHeight="24px" fontSize="14px" color="#fff">
                Bringing the world to the Tokyo Olympics.
              </Description>
            </ContentBody>
          </BottomThirdWorkContent>
        </BottomThirdWork>
      </Container>
    </Wrapper>
  );
};

export default ThirdWork;
