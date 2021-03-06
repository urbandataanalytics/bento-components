import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import Skeleton from './index';

export default {
  title: 'Skeleton',
  component: Skeleton
};

const getCommonProps = () => {
  return {
    width: text('Width', '100px'),
    height: text('Height', '10px'),
    variant: select('Variant', ['text', 'circular', 'rounded', 'square'], 'text')
  };
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Skeleton {...getCommonProps()} />
    </div>
  );
};
