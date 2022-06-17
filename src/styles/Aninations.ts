import { keyframes } from 'styled-components';

export const MoveRight = keyframes`
  0%{
        opacity: 0;
        left: 0%;
        margin-top:10%;          
        font-size: 68px;
        transform:scale(0.5);
    }        
100%{
          
        left: 10%;
        margin-top:15%;
        font-size: 70px;        
        opacity: 1;
        transform:scale(1.2);


      }
`;
export const ImgZoom = keyframes`
 0%{
    transform: scale(0.95);
 }
 100%{
    
    transform: scale(1.02);
 }
 `;

export const TextMoveCenterX = keyframes`
 0%{   
    
    transform: translate(0);

 }
 100%{ 
    
    transform: translate(25%);  
 }
 `;
export const TextMoveCenterY = keyframes`
0%{   
   
   
   margin-top:0;

}
100%{ 
   
   
   margin-top:30%;

}
`;
export const SlideIn = keyframes`

from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`;

export const Spinner = keyframes`
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(180deg);
}

`;
