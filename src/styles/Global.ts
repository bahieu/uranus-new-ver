import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
 
${reset}
 * {
} 

body {    
    max-width:1440px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;     
}
`;

export default GlobalStyles;
