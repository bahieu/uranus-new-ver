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
  width: 100%;
  text-align: center;
`;

const JoinOurCommunityMobile: React.FC = () => {
  return (
    <Wrapper
      className="d-block d-xl-none"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <Container className="content">
        <HeadCommunity>
          <Title lineHeight="27px" fontSize="28px" fontWeight="700">
            Yay! 🎉 <br /> Join our community
          </Title>
          <Description fontSize="14px" lineHeight="24px" marginBottom="40px">
            Follow the community and update the latest news from the project
          </Description>
          <Button color="#fff" backgroundColor="#00A3FF" border="solid 2px">
            Join our community
          </Button>
        </HeadCommunity>
      </Container>
    </Wrapper>
  );
};

export default JoinOurCommunityMobile;
