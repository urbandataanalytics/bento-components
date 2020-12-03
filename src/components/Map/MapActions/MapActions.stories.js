import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import MapActions from './index';

export default {
  title: 'MapActions',
  component: MapActions
};

const getCommonProps = () => {
  return {
    isLoading: boolean('Loading', false),
    offsetRight: text('Offset Right', '0px'),
    offsetBottom: text('Offset Bottom', '0px')
  };
};

const getContent = () => {
  return {
    content: text('Content', 'Test content')
  };
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapActions {...getCommonProps()}>{getContent().content}</MapActions>
    </div>
  );
};
