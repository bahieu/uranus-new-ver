import React from 'react';
import styled from 'styled-components';
import { Accordion, Container } from 'react-bootstrap';

import { Rectangle } from 'src/component/shapes';
import { Description, Title } from 'src/styles/Title';
import { questions } from 'src/data/questionList';
import breakpoint from 'src/constant/devices';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 110px;
  .content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .accordion-item {
    border: none;
  }
  .accordion-button {
    &:not(.collapsed) {
      background-color: #fff;
      box-shadow: none;
      color: #00a3ff;
      &::after {
        display: block;
        transform: none;
      }
    }
    &:focus {
      border-color: #fff;
      box-shadow: none;
    }
    &::after {
      margin-top: 25px;
      display: none;
    }
    &:focus {
      border-color: #fff;
    }
  }
  .accordion {
    width: 100%;
  }
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    .title__question {
      font-weight: 700;
      font-size: 28px;
      line-height: 27px;
    }
    .accordion-button {
      padding-right: 0;
      &::after {
        display: none;
      }
    }
  }
`;
const TitleQuestion = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  width: 100%;
`;

const HeaderQuestion = styled.div`
  text-align: center;
  width: 30%;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    width: 50%;
  }
`;

const Shapes = styled.div`
  display: flex;
  align-items: center;
`;
const Question: React.FC = () => {
  return (
    <Wrapper>
      <Container className="content">
        <HeaderQuestion
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Title
            fontSize="49px"
            lineHeight="48px"
            fontWeight="700"
            className="title__question"
          >
            Have any question?
          </Title>
        </HeaderQuestion>
        <Accordion alwaysOpen>
          {questions.map((v, i) => (
            <Accordion.Item
              eventKey={String(i)}
              key={i}
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Accordion.Header>
                <TitleQuestion>
                  {v.title}
                  <Shapes>
                    <Rectangle
                      width="100%"
                      height="2px"
                      bgColor="#C5CFF3"
                      marginRight="8px"
                    />
                  </Shapes>
                </TitleQuestion>
              </Accordion.Header>
              <Accordion.Body>
                <Description
                  fontSize="16px"
                  lineHeight="24px"
                  marginBottom="24px"
                >
                  {v.description}
                </Description>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Wrapper>
  );
};

export default Question;
