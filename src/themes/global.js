import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import defaultTheme from './defaultTheme';

const GlobalStyle = createGlobalStyle`

  ${reset}

  html {
    font-family: ${({ theme }) => theme.global.fontFamily};
    font-weight: ${({ theme }) => theme.global.fontWeightRegular};
    font-size: ${({ theme }) => theme.global.fontSize};
  }

  body {
    background-color: ${({ theme }) => theme.global.bgColor};
    color: ${({ theme }) => theme.global.fontColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  ${({ theme }) => headingsGenerator(theme.headings)}

  strong {
    font-family: ${props => props.theme.global.fontFamily};
    font-weight: ${props => props.theme.global.fontWeightBold};
  }

  button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  
  a {
    font-family: ${props => props.theme.global.fontFamily};
    font-weight: ${props => props.theme.global.fontWeightBold};
    text-decoration: none;
    font-style: normal;
    transition: color 300ms ease-in-out;
    white-space: nowrap;

    &.primary {
      color: ${({ theme }) => theme.color.primary500};
      &:visited {
        color: ${({ theme }) => theme.color.primary500};
      }
    }

    &.disabled {
      color: ${({ theme }) => theme.color.charcoal400};
      &:visited {
        color: ${({ theme }) => theme.color.charcoal400};
      }
    }

    &.secondary {
      color: ${({ theme }) => theme.color.charcoal600};
      &:visited {
        color: ${({ theme }) => theme.color.charcoal600};
      }
    }

    &.large {
      font-size: 14px;
    }

    &:hover,
    .active {
      color: ${({ theme }) => theme.color.primary300};
    }
  }
`;

const headingsGenerator = config =>
  config.map(
    ({ size, fontFamily, fontWeight }, i) =>
      `h${i + 1}{font-size: ${size}; font-family: ${fontFamily}; font-weight: ${fontWeight};}`
  );

GlobalStyle.defaultProps = {
  theme: defaultTheme
};

export default GlobalStyle;
