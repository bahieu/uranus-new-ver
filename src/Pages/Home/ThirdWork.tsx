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
  width: 84%;
  height: 517px;
  left: 16%;
  background: url(${w301}) center no-repeat;
  background-size: cover;
  background-position: top center;
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
              </Col>
            ))}
            <Col>
              <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
            </Col>
            <Col>
              <Rectangle width="auto" height="2px" bgColor="#C5CFF3" />
            </Col>
          </Row>
        </BrandList>
      </Container>
      <BottomThirdWork>
        <BottomThirdWorkContent>
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
    </Wrapper>
  );
};

export default ThirdWork;
