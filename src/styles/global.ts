import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => css`
    * {
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
    }

    html {
      min-width: 320px;
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.5;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul,
    li,
    ol {
      list-style: none;
    }

    .roboto-thin {
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      font-style: normal;
    }

    .roboto-light {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-style: normal;
    }

    .roboto-regular {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    .roboto-medium {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-style: normal;
    }

    .roboto-bold {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-style: normal;
    }

    .roboto-thin-italic {
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      font-style: italic;
    }

    .roboto-light-italic {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-style: italic;
    }
  `};
`
