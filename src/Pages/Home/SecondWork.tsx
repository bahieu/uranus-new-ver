import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import w201 from 'src/assets/imgs/work02/w201.png';
import { Title, Description } from 'src/styles/Title';
import { Rectangle } from 'src/component/shapes';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderWork = styled.div`
  position: relative;
  width: 100%;
  padding-right: 3%;
`;
const WorkTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const HeaderWorkContent = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 300px;
  height: 165px;
  bottom: 0;
  right: 0;
  padding-left: 16px;
`;
const ImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondWork: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WorkTitle>
          <Rectangle
            bgColor="#00A3FF"
            width="216px"
            height="2px"
            marginRight="20px"
          />
          <Title lineHeight="18px" fontSize="18px">
            Work
          </Title>
        </WorkTitle>
        <HeaderWork>
          <ImgPicture src={w201} />
          <HeaderWorkContent>
            <Title lineHeight="48px" fontSize="49px" marginBottom="0">
              Latest {'&'} greatest.
            </Title>
            <Description fontSize="14px" lineHeight="24px">
              Bringing the world to the Tokyo Olympics.
            </Description>
          </HeaderWorkContent>
        </HeaderWork>
      </Container>
    </Wrapper>
  );
};

export default SecondWork;
