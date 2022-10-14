import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${() => css`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: Open-Sans, Helvetica, Sans-Serif;

    p {
      font-size: 1rem;
    }

    a {
      font-size: 1rem;
      text-decoration: none;
      font-weight: 600;
      color: ${(props) => props.theme.textIsActive};

      &:visited {
        color: ${(props) => props.theme.textIsActive};
      }
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`}
`
