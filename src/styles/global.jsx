import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Dokdo);
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color:black;
    font-family:'Dokdo';
    background-color:white;
    text-align:center;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
`

export default GlobalStyle