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
const BodyQuestion = styled.div`
  .title__question {
    cursor: pointer;
    &:hover {
      color: #00a3ff;
    }
  }
`;
const ImgArrow = styled.img`
  width: 11px;
  height: 7px;
  object-fit: contain;
`;
const Shapes = styled.div`
  display: flex;
  align-items: center;
`;
const Question: React.FC = () => {
  return (
    <Wrapper className="d-none d-xl-block">
      <Container className="content">
        <HeaderQuestion>
          <Title fontSize="49px" lineHeight="48px">
            Have any question?
          </Title>
        </HeaderQuestion>
        <BodyQuestion>
          <Title fontSize="16px" lineHeight="24px" className="title__question">
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
          <Title
            fontSize="16px"
            lineHeight="24px"
            marginTop="40px"
            className="title__question"
          >
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
          <Title
            fontSize="16px"
            lineHeight="24px"
            marginTop="40px"
            className="title__question"
          >
            Title Question 3
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
