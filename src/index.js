import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./theme/Theme";

const GlobalStyle = createGlobalStyle`

 html { 
  font-size: 10px; 
  }
 
  body{
    background-color: ${Colors.Brand.BG};
    width: 160rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'DM Serif Display', serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Rubik', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
