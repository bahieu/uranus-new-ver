import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Rectangle } from 'src/component/shapes';
import { Description, Title } from 'src/styles/Title';
import arrow from 'src/assets/imgs/question/arrow.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 110px;
  .content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`;

const HeaderQuestion = styled.div`
  text-align: center;
  width: 30%;
`;
const BodyQuestion = styled.div``;
const ImgArrow = styled.img`
  width: 11;
  height: 7;
  object-fit: contain;
`;
const Shapes = styled.div`
  display: flex;
  align-items: center;
`;
const Question: React.FC = () => {
  return (
    <Wrapper>
      <Container className="content">
        <HeaderQuestion>
          <Title fontSize="49px" lineHeight="48px">
            Have any question?
          </Title>
        </HeaderQuestion>
        <BodyQuestion>
          <Title fontSize="16px" lineHeight="24px" color="#00A3FF">
            Title Question 1
          </Title>
          <Shapes>
            <Rectangle
              width="557px"
              height="2px"
              bgColor="#C5CFF3"
              marginRight="8px"
            />
            <ImgArrow src={arrow} />
          </Shapes>
          <Description fontSize="16px" lineHeight="24px" marginBottom="24px">
            Treasury (Include: 20% operation, 30% for liquidity and 50%
            cashBack)
          </Description>
          <Title fontSize="16px" lineHeight="24px" marginTop="40px">
            Title Question 2
          </Title>
          <Shapes>
            <Rectangle
              width="557px"
              height="2px"
              bgColor="#C5CFF3"
              marginRight="8px"
            />
          </Shapes>
          <Title fontSize="16px" lineHeight="24px" marginTop="40px">
            Title Question 2
          </Title>
          <Shapes>
            <Rectangle
              width="557px"
              height="2px"
              bgColor="#C5CFF3"
              marginRight="8px"
            />
          </Shapes>
        </BodyQuestion>
      </Container>
    </Wrapper>
  );
};

export default Question;
