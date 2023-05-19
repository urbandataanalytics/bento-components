import React from 'react';

import bentoTheme from './bentoTheme';
import addons from '@storybook/addons';

addons.setConfig({
  options: {
    theme: bentoTheme
  }
});
