import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import Checkbox from './index';

export default {
  title: 'Checkbox',
  component: Checkbox
};

const getCommonProps = () => {
  return {
    checked: boolean('Checked', false),
    disabled: boolean('Disabled', false),
    label: text('Label', 'Label'),
    name: text('Name', 'Name'),
    onChange: action('checked'),
    size: select('Size', ['medium', 'large'], 'medium')
  };
};

export const Playground = () => {
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
