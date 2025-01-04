import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
  

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar{
    display:none; 
  }

`;

export default GlobalStyles;
