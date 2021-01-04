import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import MapActions from './index';

export default {
  title: 'MapActions',
  component: MapActions
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapActions
        isLoading={boolean('Loading', false)}
        offsetRight={text('Offset Right', '0px')}
        offsetBottom={text('Offset Bottom', '0px')}
      >
        {text('Content', 'Test content')}
      </MapActions>
    </div>
  );
};
