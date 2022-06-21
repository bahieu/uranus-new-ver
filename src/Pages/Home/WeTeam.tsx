import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { Description, Title } from 'src/styles/Title';
import { members } from 'src/data/members';
import Button from 'src/component/button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 117px;
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

const WeTeam: React.FC = () => {
  return (
    <Wrapper className="d-none d-xl-block">
      <Container>
        <Row>
          <Col
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Title lineHeight="81px" fontSize="54px" marginBottom="0">
              We team.
            </Title>
            <Description
              fontSize="14px"
              lineHeight="24px"
              marginTop="10px"
              marginBottom="70px"
            >
              Bringing the world to the Tokyo Olympics.
            </Description>
          </Col>
        </Row>
        <Row>
          {members.map((v, i) => (
            <Col
              key={i}
              className="content "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Circle>
                <ImgMember src={v.img} />
              </Circle>
              <Title lineHeight="24px" fontSize="16px">
                {v.title}
              </Title>
              <Button color="#fff" backgroundColor="#00A3FF" padding="6px 24px">
                {v.position}
              </Button>
              <Description
                lineHeight="18px"
                fontSize="12px"
                marginTop="20px"
                className="member-des"
              >
                {v.description}
              </Description>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};
export default WeTeam;
