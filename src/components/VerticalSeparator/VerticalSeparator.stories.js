import React from 'react';
import VerticalSeparator from './index';

export default {
  title: 'VerticalSeparator',
  component: VerticalSeparator,
  argTypes: {
    customColor: {
      description: 'Allows to set a custom color for the separator',
      control: 'color',
      table: {
        category: 'format'
      }
    },
    separatorLocation: {
      description: 'Sets different locations left-right by adding margin',
      table: {
        category: 'format'
      }
    }
  }
};

export const Playground = args => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    width: '300px'
  };

  return (
    <div style={containerStyle}>
      <p>A text</p>
      <VerticalSeparator {...args} />
      <p>B text</p>
      <VerticalSeparator {...args} />
      <p>C text</p>
    </div>
  );
};
