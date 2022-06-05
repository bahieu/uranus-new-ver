import styled from 'styled-components';

type ShapeProps = {
  bgColor: string;
  width: string;
  height: string;
  marginRight?: string;
  marginLeft?: string;
};

export const Rectangle = styled.div<ShapeProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#000')};
  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '1px')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '1px')};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '1px')};
`;

export const Circle = styled(Rectangle)`
  border-radius: 100%;
`;
