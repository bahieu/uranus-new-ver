import styled from 'styled-components';

type BtnProps = {
  color: string;
  backgroundColor?: string;
  borderColor?: string;
  border?: string;
  padding?: string;
};

export const Button = styled.button<BtnProps>`
  color: ${({ color }) => (color ? color : '#fff')};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : 'none')};
  border: ${({ border }) => (border ? border : 'none')};
  padding: ${({ padding }) => (padding ? padding : '16px 26px')};

  border-radius: 7px;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
