import React from 'react';
import Skeleton from './index';

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    height: {
      description: 'Set height for the component in CSS units',
      table: {
        category: 'format'
      }
    },
    width: {
      description: 'Set width for the component in CSS units',
      table: {
        category: 'format'
      }
    },
    variant: {
      description: 'Applies different shapes',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    width: '100px',
    height: '10px',
    variant: 'text'
  }
};

export const Playground = args => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Skeleton {...args} />
    </div>
  );
};
