import React from 'react';
import styled from 'styled-components';
import { Carousel, Container } from 'react-bootstrap';

// import work01 from 'src/assets/imgs/work01/w01.png';
// import work02 from 'src/assets/imgs/work01/w02.png';
// import work03 from 'src/assets/imgs/work01/w03.png';
// import { Description, Title } from 'src/styles/Title';
// import Button from 'src/component/button';
// import { Rectangle } from 'src/component/shapes';
import { slideListImg } from 'src/data/SlideImages';

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
    margin-bottom: 1rem;
    margin-left: -15%;
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

const ImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const WorkContent = styled.div`
//   position: absolute;
//   width: 351px;
//   top: 37%;
// `;
// const HeadWorkContent = styled.div`
//   display: flex;
//   align-items: center;
// `;
const BottomWorkContent = styled.div`
  display: flex;
  margin-top: 39%;
`;

const FirstWork: React.FC = () => {
  //   const imgList: any[] = [work01, work02, work03];

  return (
    <Wrapper>
      <Container>
        <Carousel>
          {slideListImg.map((v, i) => (
            <Carousel.Item key={i}>
              <ImgPicture src={v.src} />
            </Carousel.Item>
          ))}
        </Carousel>
        <BottomWorkContent></BottomWorkContent>
      </Container>
    </Wrapper>
  );
};

export default FirstWork;
