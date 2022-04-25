import styled, { css } from 'styled-components';

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
    background: ${(primary: any) => (primary ? 'green' : 'black')};
  }
`;
export default Button;
