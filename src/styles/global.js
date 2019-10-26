import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.blueticket.com.br/circular-std-2/dist/index.min.css');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased; /* Smooth the font on the level of the pixel. */
    -moz-osx-font-smoothing: grayscale; /* Render text with grayscale antialiasing. */
  }

  body, input, button {
    font: 14px 'CircularStd', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
