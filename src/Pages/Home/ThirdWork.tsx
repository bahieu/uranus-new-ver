import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { Description, Title } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ThirdWorkTitle = styled.div`
  width: 293px;
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
      </Container>
    </Wrapper>
  );
};

export default ThirdWork;
