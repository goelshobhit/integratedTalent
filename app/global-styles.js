import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'RobotoRegular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #333131;
    min-height: 100%;
    min-width: 100%;
    color: #fff;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
