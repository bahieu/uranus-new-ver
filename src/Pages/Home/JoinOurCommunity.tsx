import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'src/component/button';
import { Description, Title } from 'src/styles/Title';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
  .content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const HeadCommunity = styled.div`
  width: 500px;
  text-align: center;
`;

const JoinOurCommunity: React.FC = () => {
  return (
    <Wrapper className="d-none d-xl-block">
      <Container className="content">
        <HeadCommunity
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <Title lineHeight="48px" fontSize="49px">
            Yay! 🎉 <br /> Join our community
          </Title>
          <Description fontSize="14px" lineHeight="24px" marginBottom="40px">
            Follow the community and update the latest news from the project
          </Description>
          <Button color="#00A3FF" border="solid 2px">
            Join our community
          </Button>
        </HeadCommunity>
      </Container>
    </Wrapper>
  );
};

export default JoinOurCommunity;
