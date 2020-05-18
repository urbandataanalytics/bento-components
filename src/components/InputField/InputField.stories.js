import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputField from './index';

export default {
  title: 'InputField',
  component: InputField
};

const getCommonProps = () => {
  return {
    placeholder: text('Placeholder', 'Placeholder text'),
    value: text('Value', 'Value text'),
    onChange: action('onChange'),
    type: select('Type', ['text', 'email', 'password'], 'text'),
    label: text('Label', 'Label text'),
    help: text('Help', 'Help text')
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <InputField {...getCommonProps()} />
  </div>
);

export const Error = () => (
  <div style={decoratorStyles}>
    <InputField error {...getCommonProps()} />
  </div>
);

export const Disabled = () => (
  <div style={decoratorStyles}>
    <InputField disabled {...getCommonProps()} />
  </div>
);
