import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { Description, Title } from 'src/styles/Title';
import { members } from 'src/data/members';
import Button from 'src/component/button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 35px 20px 70px 20px;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
  .member-des {
    max-width: 240px;
  }
`;
const HeadContent = styled.div``;
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
      <HeadContent>
        <Title>We Team.</Title>
        <Description>Bringing the world to the Tokyo Olympics.</Description>
      </HeadContent>
      {members.map((v, i) => (
        <Row key={i}>
          <Col xs={2}>
            <Circle>
              <ImgMember src={v.img} />
            </Circle>
          </Col>
          <Col xs={10}>
            <Row className="flex-column">
              <Col>
                <Row>
                  <Col xs={6}>
                    <Title fontSize="16px" lineHeight="16px">
                      {v.title}
                    </Title>
                  </Col>
                  <Col xs={6}>
                    <Button
                      color="#fff"
                      backgroundColor="#00A3FF"
                      padding="6px 24px"
                    >
                      {v.position}
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Description fontSize="14px" lineHeight="24px">
                  {v.description}
                </Description>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Wrapper>
  );
};
export default WeTeamMobile;
