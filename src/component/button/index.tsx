import styled from 'styled-components';

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
    background: red;
  }
`;

export const PrimaryBtn = styled(Button)`
  background: blue;
  :hover {
    box-shadow: 0 0 10px red;
    background: green;
  }
`;
export const SecondaryBtn = styled(Button)`
  background: Gray;
  :hover {
    box-shadow: 0 0 10px red;
    background: orange;
  }
`;

export default Button;
