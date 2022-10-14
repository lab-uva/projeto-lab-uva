import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: offwhite;
    color: #111;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

  }
`

export default GlobalStyle
