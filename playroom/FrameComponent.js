import React from 'react';
import defaultTheme from '../src/themes/defaultTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/themes/global';

export default ({ theme, children }) => {
  theme = theme || defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
