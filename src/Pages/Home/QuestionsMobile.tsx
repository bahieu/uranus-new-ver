import React from 'react';
import styled from 'styled-components';

import { Rectangle } from 'src/component/shapes';
import { Description, Title } from 'src/styles/Title';
import { Col, Row } from 'react-bootstrap';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 90px;
  .content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  .content__center {
    position: relative;
    left: 50%;
    transform: translateX(-45%);
  }
  .row {
    margin: 0;
  }
`;

const HeaderQuestion = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 30%;
`;
const BodyQuestion = styled.div`
  &:hover {
    opacity: 0.7;
    color: #00a3ff;
  }
`;

const Shapes = styled.div`
  display: flex;
  align-items: center;
`;
const QuestionsMobile: React.FC = () => {
  return (
    <Wrapper className="d-block d-xl-none">
      <HeaderQuestion>
        <Title fontSize="28px" lineHeight="27px">
          Have any question?
        </Title>
      </HeaderQuestion>
      <Row>
        <Col xs={9} className="content__center">
          <BodyQuestion>
            <Title
              fontSize="16px"
              lineHeight="24px"
              className="title__question"
            >
              Title Question 1
            </Title>
            <Shapes>
              <Rectangle
                width="100%"
                height="2px"
                bgColor="#C5CFF3"
                marginRight="8px"
              />
            </Shapes>
            <Description fontSize="16px" lineHeight="24px" marginBottom="24px">
              Treasury (Include: 20% operation, 30% for liquidity and 50%
              cashBack)
            </Description>
          </BodyQuestion>
        </Col>
        <Col xs={9} className="content__center">
          <BodyQuestion>
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
                width="100%"
                height="2px"
                bgColor="#C5CFF3"
                marginRight="8px"
              />
            </Shapes>
          </BodyQuestion>
        </Col>
        <Col xs={9} className="content__center">
          <BodyQuestion>
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
                width="100%"
                height="2px"
                bgColor="#C5CFF3"
                marginRight="8px"
              />
            </Shapes>
          </BodyQuestion>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default QuestionsMobile;
