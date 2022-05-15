import styled from 'styled-components';

interface props {
  color?: string;
}
export const Title = styled.h1<props>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 81px;
  color: ${props => (props.color ? props.color : '#00000')};
`;
