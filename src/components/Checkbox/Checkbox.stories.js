import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Checkbox from './index';

export default {
  title: 'Checkbox',
  component: Checkbox
};

const getCommonProps = () => {
  return {
    checked: boolean('Checked', false),
    disabled: boolean('Disabled', false),
    onChange: action('checked')
  };
};

export const Normal = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Checkbox {...getCommonProps()} />
    </div>
  );
};

export const WithLabel = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Checkbox {...getCommonProps()} label={text('Label', 'Checkbox')} />
    </div>
  );
};
