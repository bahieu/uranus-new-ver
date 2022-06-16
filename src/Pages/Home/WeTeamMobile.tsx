import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { Description, Title } from 'src/styles/Title';
import { members } from 'src/data/members';
import Button from 'src/component/button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 50px 0px 70px 0;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
  .row {
    margin: 0;
  }
  .col-9 {
    padding: 0;
  }

  .member-des {
    max-width: 240px;
  }
`;
const HeadContent = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
const Circle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100%;
  border-color: '#2029FF';
`;

const ImgMember = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WeTeamMobile: React.FC = () => {
  return (
    <Wrapper className="d-block d-xl-none">
      <Container>
        <HeadContent>
          <Title lineHeight="27px" fontSize="28px" fontWeight="700">
            We Team.
          </Title>
          <Description lineHeight="24px" fontSize="14px">
            Bringing the world to the Tokyo Olympics.
          </Description>
        </HeadContent>
        {members.map((v, i) => (
          <Row key={i} className="flex-nowrap mb-4">
            <Col xs={3} md={2}>
              <Circle>
                <ImgMember src={v.img} />
              </Circle>
            </Col>
            <Col xs={9}>
              <Row className="flex-column">
                <Col xs={6}>
                  <Row>
                    <Col xs={9} md={4}>
                      <Title fontSize="16px" lineHeight="16px">
                        {v.title}
                      </Title>
                    </Col>
                    <Col xs={3} className="align-self-center">
                      <Button
                        color="#fff"
                        backgroundColor="#00A3FF"
                        padding="5px 20px"
                      >
                        {v.position}
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs={10} md={8}>
                  <Description fontSize="14px" lineHeight="24px">
                    {v.description}
                  </Description>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </Wrapper>
  );
};
export default WeTeamMobile;
