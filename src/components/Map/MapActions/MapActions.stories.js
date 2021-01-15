import React from 'react';
import MapActions from './index';

export default {
  title: 'MapActions',
  component: MapActions,
  argTypes: {
    children: {
      description: 'Defined actions for the component',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    offsetRight: {
      description: 'Sets a gap of defined size on the right of the component',
      table: {
        category: 'format'
      }
    },
    offsetBottom: {
      description: 'Sets a gap of defined size on the bottom of the component',
      table: {
        category: 'format'
      }
    },
    isLoading: {
      description: 'Shows a skeleton to show the loading status',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    children: 'Sample Text Children'
  }
};

export const Playground = ({ ...args }) => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapActions {...args}></MapActions>
    </div>
  );
};

export const Loading = args => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapActions {...args}></MapActions>
    </div>
  );
};

Loading.args = {
  isLoading: true
};
