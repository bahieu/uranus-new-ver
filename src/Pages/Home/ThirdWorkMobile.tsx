import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { Description, Title } from 'src/styles/Title';
import { brandList } from 'src/data/brands';
import { Rectangle } from 'src/component/shapes';
import w301 from 'src/assets/imgs/work03/w301.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 50px 0;
  .content_center {
    position: relative;
    left: 50%;
    transform: translateX(-45%);
  }
`;

const ThirdWorkTitle = styled.div`
  position: relative;
  width: 293px;
  margin-bottom: 50px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;
const BrandList = styled.div`
  margin-bottom: 50px;
  width: 95%;
`;

const BottomThirdWork = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BottomThirdWorkContent = styled.div`
  position: absolute;
  width: 50%;
  height: 99.5%;
  bottom: 2px;
  background: rgba(0, 0, 0, 0.5);
`;
const ContentTitle = styled.div`
  margin-top: 15px;
  margin-left: 5%;
  display: flex;
  align-items: center;
`;
const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 5%;
`;
const ThirdWorkImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThirdWorkMobile: React.FC = () => {
  return (
    <Wrapper className="d-block d-xl-none">
      <ThirdWorkTitle>
        <Title lineHeight="27px" fontSize="28px">
          Latest {'&'} greatest.
        </Title>
        <Description lineHeight="24px" fontSize="14px">
          Bringing the world to the Tokyo Olympics.
        </Description>
      </ThirdWorkTitle>
      <BrandList>
        <Row className="text-left" data-aos="fade-up" data-aos-duration="3000">
          {brandList.map((v, i) => (
            <Col xs={9} key={i} className="p-0 content_center">
              <Rectangle width="100%" height="2px" bgColor="#C5CFF3" />
              <Title fontSize="16px" lineHeight="16px">
                {v.name}
              </Title>
            </Col>
          ))}
        </Row>
      </BrandList>
      <BottomThirdWork>
        <ThirdWorkImg
          src={w301}
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        />
        <BottomThirdWorkContent
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1200"
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
              lineHeight="27px"
              fontSize="28px"
              className="title"
              color="#fff"
              marginBottom="0"
              marginTop="0"
            >
              Be one of us..
            </Title>
            <Description
              lineHeight="24px"
              fontSize="14px"
              color="#fff"
              marginTop="0"
            >
              Bringing the world to the Tokyo Olympics.
            </Description>
          </ContentBody>
        </BottomThirdWorkContent>
      </BottomThirdWork>
    </Wrapper>
  );
};
export default ThirdWorkMobile;
