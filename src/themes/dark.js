import defaultTheme from './defaultTheme.js';

const global = {
  fontSize: '25px',
  bgColor: '#333',
  fontColor: 'white'
};

const components = {
  buttonSecondaryBackgroundColor: 'red'
};

export default {
  fonts: defaultTheme.fonts,
  breakpoints: defaultTheme.breakpoints,
  color: defaultTheme.color,
  global: { ...defaultTheme.global, ...global },
  headings: defaultTheme.headings,
  components: { ...defaultTheme.components, ...components }
};
