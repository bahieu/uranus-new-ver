import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import work04 from 'src/assets/imgs/pricing/work04.png';
import bg from 'src/assets/imgs/pricing/bgPricing.png';
import { Rectangle } from 'src/component/shapes';
import { Description, Title } from 'src/styles/Title';
import Footer from 'src/component/Layout/Footer';
import breakpoint from 'src/constant/devices';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  top: 0;
  background: url(${bg}) center no-repeat;
  background-size: 100% 45%;
  background-position: top center;
  .img__size {
    padding: 0;
  }
  .body__content {
    margin-top: 5%;
    margin-bottom: 14%;
  }
  .left__content {
    padding-right: 8%;
  }
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    background: none;
    .left__content {
      width: 100%;
      order: 1;
    }
    .body__content {
      margin-top: 0;
    }
    .img__size {
      width: 100%;
    }
  }
`;
const FourWork = styled.div`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  top: 30px;
  width: 94%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 11px 10px rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    width: 100%;
    top: 0;
    padding-top: 0;
  }
`;
const ImgWork = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const HeadPricing = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const BodyText = styled.div`
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    text-align: center;
  }
`;

const WorkPricing: React.FC = () => {
  return (
    <Wrapper>
      <FourWork>
        <Container className="body__content">
          <Row className="flex-d-column flex-xl-row">
            <Col md={4} lg={6} className="left__content">
              <HeadPricing>
                <Title lineHeight="18px" fontSize="18px">
                  Work
                </Title>
                <Rectangle
                  bgColor="#00A3FF"
                  width="216px"
                  height="2px"
                  marginLeft="20px"
                />
              </HeadPricing>
              <BodyText>
                <Title lineHeight="23px" fontSize="24px" marginBottom="60px">
                  Creating a new brand platform for {"Nike's"} most passionate
                  consumers: sneakerheads.
                </Title>
                <Description
                  fontSize="14px"
                  lineHeight="24px"
                  marginBottom="30px"
                >
                  {"Nike's"} most passionate consumers: sneakerheads.
                </Description>
                <Description fontSize="14px" lineHeight="24px">
                  Nike Logo Nike is famous for making some of the {'world’s'}{' '}
                  most coveted sneakers—and for being the envy of sneakerheads
                  globally. To tap directly into this community of sneaker
                  lovers, Nike tasked us with creating an experience that could
                  connect the sneaker community directly with Nike, providing
                  all shoe and drop information at users’ fingertips.
                </Description>
              </BodyText>
            </Col>
            <Col md={8} lg={6} className="img__size">
              <ImgWork src={work04} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </FourWork>
    </Wrapper>
  );
};
export default WorkPricing;
