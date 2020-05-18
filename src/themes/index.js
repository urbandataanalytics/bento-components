import React from 'react';
import GlobalStyles from './global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './defaultTheme';

const AppTheme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

AppTheme.defaultProps = {
  theme: defaultTheme
};

export default AppTheme;
