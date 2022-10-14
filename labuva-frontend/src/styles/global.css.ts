import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${() => css`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: Open-Sans, Helvetica, Sans-Serif;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`}
`
