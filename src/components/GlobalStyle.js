// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
