import React from 'react';
import { addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import { addParameters } from '@storybook/react';
import bentoTheme from './bentoTheme';

addParameters({
  options: {
    theme: bentoTheme
  }
});

addDecorator(themeDecorator);
addDecorator(Story => <Story />);
