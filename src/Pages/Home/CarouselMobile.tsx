import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import work01 from 'src/assets/imgs/work01/w01.png';
import work02 from 'src/assets/imgs/work01/w02.png';
import work03 from 'src/assets/imgs/work01/w03.png';
import { Description, Title } from 'src/styles/Title';
import { Rectangle } from 'src/component/shapes';
import Button from 'src/component/button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const PictureList = styled.div`
  padding: 0;
  display: grid;
  padding: 80px 3% 0 14%;
  grid-template-columns: 1fr 0.5fr;
  gap: 0;
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
const BodyContent = styled.div``;

const CarouselMobile: React.FC = () => {
  const imgList: any[] = [work01, work02, work03];

  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item>
          <PictureList>
            {imgList.map((v, i) => (
              <div key={i} className={i === 0 ? 'grid__item-1' : undefined}>
                <ImgPicture src={v} />
              </div>
            ))}
          </PictureList>
          <Carousel.Caption>
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
              <BodyContent>
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
              </BodyContent>
              <Button
                color="#00A3FF"
                borderColor="#00A3FF"
                border="solid"
                className="carousel__btn"
              >
                Contact us
              </Button>
            </WorkContent>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
export default CarouselMobile;
