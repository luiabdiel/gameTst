import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;

    -webkit-font-smoothing: antialiased;

    margin: 0 auto;

    background-color: rgb(21 94 117 / 0.3);
    background-clip: padding-box;
    backdrop-filter: blur(16px);
  }

  body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }
  }
`
