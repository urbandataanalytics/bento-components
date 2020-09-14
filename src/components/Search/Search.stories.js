import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Search from './index';

export default {
  title: 'Search',
  component: Search
};

const getCommonProps = () => {
  return {
    placeholder: text('Placeholder', 'Search any portfolio by name, seller or buyer'),
    value: text('Value', 'Cerberus'),
    onChange: action('onChange'),
    onClose: boolean('Closable', true)
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <Search {...getCommonProps()} />
  </div>
);
