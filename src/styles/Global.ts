import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
 
${reset}
 * {
     margin: 0 auto;    
     color: #000000;
    } 
    
    body {    
    max-width:1440px;
    font-family: 'Poppins', sans-serif; 
    background-color: #F5F5F7;  
}
`;

export default GlobalStyles;
