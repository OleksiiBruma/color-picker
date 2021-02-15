import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0 ;
  }
  ul,
  ul li,
  ul ul li {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
  * {
    outline: none; //remove this line to make component more accessible
  }
`;
