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

  strong {
    font-family: ${({ theme }) => theme.global.fontFamilyBold};
    font-weight: 500;
  }

  button{
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  
  a{
    font-family: ${({ theme }) => theme.global.fontFamilyBold};
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    transition: color 300ms ease-in-out;
    white-space: nowrap;

    &.primary{
      color: ${({ theme }) => theme.color.primary500};
    }

    &.disabled{
      color: ${({ theme }) => theme.color.charcoal400};
    }

    &.secondary{
      color: ${({ theme }) => theme.color.charcoal600};
    }

    &.large{
      font-size: 14px;
    }

    &:hover{
      color: ${({ theme }) => theme.color.primary300};
    }
  }
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
