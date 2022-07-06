import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // NextJS Reset
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

  }
  // ============

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: sans-serif;
  }
`;


export default GlobalStyle;
