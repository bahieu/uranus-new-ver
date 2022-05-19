import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
    @font-face {
        font-family:'Poppins', sans-serif;
        src: url('../assets/fonts/Poppins-Regular.ttf');           
    }
    @font-face {
        font-family:'Poppins', sans-serif;
        src: url('../assets/fonts/Poppins-Medium.ttf');
        font-weight:  500;        
    }
    @font-face {
        font-family:'Poppins', sans-serif;
        src: url('../assets/fonts/Poppins-SemiBold.ttf');
    }
`;

export default FontStyle;
