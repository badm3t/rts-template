import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<any>`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  p, h1, h2, h3, h4, h5 {
    margin: 0
  }

  h1 {
    font-size: calc(22px + (36 - 22) * ((100vw - 320px) / (1900 - 320)));
  }

  h2 {
    font-size: calc(20px + (28 - 20) * ((100vw - 320px) / (1900 - 320)));
  }

  h3 {
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1900 - 320)));
  }

  h3, h4 {
    padding-top: 10px;
    padding-bottom: 5px;
  }
`;

export default GlobalStyle;
