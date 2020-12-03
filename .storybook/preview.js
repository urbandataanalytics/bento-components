import React from 'react';
import { addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import bentoTheme from './bentoTheme';
import addons from '@storybook/addons';

addons.setConfig({
  options: {
    theme: bentoTheme
  }
});

addDecorator(themeDecorator);
addDecorator(Story => <Story />);
