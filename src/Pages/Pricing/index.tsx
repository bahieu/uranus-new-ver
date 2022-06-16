import React from 'react';
import styled from 'styled-components';

import Header from 'src/component/Layout/Header';
import WorkPricing from './WorkPricing';
import breakpoint from 'src/constant/devices';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: -30px;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    top: 0;
  }
`;

export const PricingPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <WorkPricing />
    </Wrapper>
  );
};
export default PricingPage;
