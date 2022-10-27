import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${() => css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  b,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: ${(props) => props.theme.text};
  }

  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};

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
