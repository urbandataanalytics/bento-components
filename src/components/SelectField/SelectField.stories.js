import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SelectField from './index';

export default {
  title: 'SelectField',
  component: SelectField
};

const getCommonProps = () => {
  return {
    defaultLabel: 'Select value',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' }
    ],
    value: select('Value', ['en', 'es'], 'en'),
    onChange: action('onChange'),
    label: text('Label', 'Label text'),
    help: text('Help', 'Help text')
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <SelectField {...getCommonProps()} />
  </div>
);

export const Error = () => (
  <div style={decoratorStyles}>
    <SelectField error {...getCommonProps()} />
  </div>
);

export const Disabled = () => (
  <div style={decoratorStyles}>
    <SelectField disabled {...getCommonProps()} />
  </div>
);
