import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import defaultTheme from './defaultTheme';

const GlobalStyle = createGlobalStyle`

  ${reset}

  ${({ theme }) => fontFaceGenerator(theme.fonts)}

  html{
    font-family: ${({ theme }) => theme.global.fontFamilyRegular};
    font-size: ${({ theme }) => theme.global.fontSize};
  }

  body {
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.fontColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => headingsGenerator(theme.headings)}

`;

const fontFaceGenerator = config =>
  config.map(
    ({ name, src, weight, style }) =>
      `@font-face {
      font-family: '${name}';
      src: local('${name}'), local('${name}'),
      url(${src}) format('truetype');
      font-weight: ${weight};
      font-style: ${style};
    }`
  );

const headingsGenerator = config =>
  config.map(
    ({ size, fontFamily }, i) => `h${i + 1}{font-size: ${size}; font-family: ${fontFamily}}`
  );

GlobalStyle.defaultProps = {
  theme: defaultTheme
};

export default GlobalStyle;
