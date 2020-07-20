import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans TC", sans-serif;
    overflow: auto;
  }

  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    overflow: auto;
  }

  body,
  html {
    margin: 0;
    overflow: auto;
    padding: 0;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  h1 {
    font-size: 5rem; 
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
