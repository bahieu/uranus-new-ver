import React from 'react';
import styled from 'styled-components';
import { Carousel, Container } from 'react-bootstrap';

import work01 from 'src/assets/imgs/work01/w01.png';
import work02 from 'src/assets/imgs/work01/w02.png';
import work03 from 'src/assets/imgs/work01/w03.png';
import { Description, Title } from 'src/styles/Title';
import Button from 'src/component/button';
import { Rectangle } from 'src/component/shapes';

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: 90px;
  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 0;
    margin-left: 0;
    list-style: none;
    & [data-bs-target] {
      background-color: #d9d9d9;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      &.active {
        background-color: #00a3ff;
      }
    }
  }
`;

const PictureList = styled.div`
  padding: 20px;
  display: grid;
  padding: 80px 3% 0 14%;
  grid-template-columns: 1fr 0.5fr;
  gap: 16px;
  .grid__item-1 {
    grid-column-start: 1;
    grid-row-start: span 2;
    grid-row-end: 2;
  }
`;

const ImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const WorkContent = styled.div`
  position: absolute;
  width: 351px;
  top: 37%;
`;
const HeadWorkContent = styled.div`
  display: flex;
  align-items: center;
`;
const Slide = styled.div``;
const FirstWork: React.FC = () => {
  const imgList: any[] = [work01, work02, work03];

  return (
    <Wrapper>
      <Container>
        <Carousel interval={3000} nextLabel={null} prevLabel={null}>
          <Carousel.Item>
            <Slide>
              <PictureList>
                {imgList.map((v, i) => (
                  <div key={i} className={i === 0 ? 'grid__item-1' : undefined}>
                    <ImgPicture src={v} />
                  </div>
                ))}
              </PictureList>
              <WorkContent>
                <HeadWorkContent>
                  <Title lineHeight="18px" fontSize="18px">
                    Work
                  </Title>
                  <Rectangle
                    bgColor="#00A3FF"
                    width="216px"
                    height="2px"
                    marginLeft="20px"
                  />
                </HeadWorkContent>
                <Title lineHeight="48px" fontSize="49px" fontWeight="700">
                  Make huge moves.
                </Title>
                <Description
                  lineHeight="24px"
                  fontSize="14px"
                  marginBottom="50px"
                >
                  Creating a next-generation money-transfer service to transform
                  the way money moves.
                </Description>
                <Button color="#00A3FF" borderColor="#00A3FF" border="solid">
                  Contact us
                </Button>
              </WorkContent>
            </Slide>
          </Carousel.Item>
          <Carousel.Item>
            <Slide>
              <PictureList>
                {imgList.map((v, i) => (
                  <div key={i} className={i === 0 ? 'grid__item-1' : undefined}>
                    <ImgPicture src={v} />
                  </div>
                ))}
              </PictureList>
              <WorkContent>
                <HeadWorkContent>
                  <Title lineHeight="18px" fontSize="18px">
                    Work
                  </Title>
                  <Rectangle
                    bgColor="#00A3FF"
                    width="216px"
                    height="2px"
                    marginLeft="20px"
                  />
                </HeadWorkContent>
                <Title lineHeight="48px" fontSize="49px" fontWeight="700">
                  Make huge moves.
                </Title>
                <Description
                  lineHeight="24px"
                  fontSize="14px"
                  marginBottom="50px"
                >
                  Creating a next-generation money-transfer service to transform
                  the way money moves.
                </Description>
                <Button color="#00A3FF" borderColor="#00A3FF" border="solid">
                  Contact us
                </Button>
              </WorkContent>
            </Slide>
          </Carousel.Item>
          <Carousel.Item>
            <Slide>
              <PictureList>
                {imgList.map((v, i) => (
                  <div key={i} className={i === 0 ? 'grid__item-1' : undefined}>
                    <ImgPicture src={v} />
                  </div>
                ))}
              </PictureList>
              <WorkContent>
                <HeadWorkContent>
                  <Title lineHeight="18px" fontSize="18px">
                    Work
                  </Title>
                  <Rectangle
                    bgColor="#00A3FF"
                    width="216px"
                    height="2px"
                    marginLeft="20px"
                  />
                </HeadWorkContent>
                <Title lineHeight="48px" fontSize="49px" fontWeight="700">
                  Make huge moves.
                </Title>
                <Description
                  lineHeight="24px"
                  fontSize="14px"
                  marginBottom="50px"
                >
                  Creating a next-generation money-transfer service to transform
                  the way money moves.
                </Description>
                <Button color="#00A3FF" borderColor="#00A3FF" border="solid">
                  Contact us
                </Button>
              </WorkContent>
            </Slide>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default FirstWork;
