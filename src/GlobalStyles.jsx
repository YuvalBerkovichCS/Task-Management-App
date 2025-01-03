import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
  

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar{
    display:none; 
  }

`;

export default GlobalStyles;
