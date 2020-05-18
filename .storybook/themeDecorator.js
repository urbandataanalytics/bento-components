import React from "react"
import Theme from '../src/themes';
import defaultTheme from '../src/themes/defaultTheme';

const ThemeDecorator = storyFn => (
  <Theme theme={defaultTheme}>{storyFn()}</Theme>
);

export default ThemeDecorator
