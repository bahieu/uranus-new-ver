import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
${reset}
${normalize}
 * {
     margin: 0;
     padding: 0;
    } 
    
body {    
    font-family: 'Poppins', sans-serif; 
    background-color: #ffff;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
`;

export default GlobalStyles;
