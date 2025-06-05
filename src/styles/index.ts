import { createGlobalStyle } from "styled-components";

import { Colors } from "utils/colors";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px; /* 1rem now equals 10px */
  }

  body {
    font-size: 1.6rem;
    height: 100%;
    font-weight: 300;
    font-family: "Outfit", serif;
    background: ${Colors.lightCoolGray};
    overflow-x: hidden;
  }

  p, a, li, ul {
    font-family: "Outfit", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: ${Colors.black};
    font-weight: 400;

    &:hover {
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Funnel Display", serif !important;
    font-optical-sizing: auto;
    text-transform: uppercase;
    line-height: 1.3;
  }

  p {
    margin: 2rem 0;
  }

  button {
    outline: 0;
	  box-shadow: 0;
	  border: 0;
    &:focus,
    &:hover {
      outline: 0;
      box-shadow: 0;
    }
  }
`;
