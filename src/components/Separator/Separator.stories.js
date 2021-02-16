import React from 'react';
import Separator from './index';

export default {
  title: 'Separator',
  component: Separator,
  argTypes: {
    label: {
      description: 'Accepts a string to show in the middle of the separator',
      table: {
        category: 'content'
      }
    }
  }
};

export const Playground = args => {
  const containerStyle = {
    padding: '2rem',
    width: '500px'
  };

  return (
    <div style={containerStyle}>
      <Separator {...args} />
    </div>
  );
};

export const WithLabel = args => {
  const containerStyle = {
    padding: '2rem',
    width: '500px'
  };
  return (
    <div style={containerStyle}>
      <Separator {...args} />
    </div>
  );
};

WithLabel.args = {
  label: 'O'
};
