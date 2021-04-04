import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background-color: #191919;
    font-family: 'Roboto Mono';
    min-height: 100vh;
  }
`;

export default GlobalStyles