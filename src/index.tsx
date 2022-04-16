import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

import App from "./App";

const container = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,
  container
);
