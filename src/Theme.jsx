import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: '#707070',
    grey: '#ccc',
    white: '#fff',
    green: '#43e893',
    blue: '#165edb;',
    mutedBlue: '#4385f7'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
);

export default Theme;