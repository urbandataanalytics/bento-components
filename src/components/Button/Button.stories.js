import React from 'react';
import Button from './index';
import * as Icons from '../../icons';

const containerStyle = {
  padding: '2rem'
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    block: {
      description: 'Button will grow up to the full width of its container',
      table: { category: 'format' }
    },
    children: {
      description: 'The content of the button',
      control: 'text',
      table: { category: 'content' }
    },
    className: {
      description: 'Specific class name to pass down to the Button component',
      control: 'null',
      table: { category: 'format' }
    },
    disabled: { description: 'Disable mode for the button', table: { category: 'format' } },
    loading: {
      description: 'Loading mode for the button',
      table: { category: 'format' }
    },

    loadingText: {
      description: 'Text to show on when loading  = true',
      table: { category: 'content' }
    },
    onClick: {
      description: 'Handle behaviour when onClick event',
      action: 'clicked',
      table: { category: 'events' }
    },
    size: { description: 'Size options for the button', table: { category: 'format' } },
    variant: { description: 'Format variants for the button', table: { category: 'format' } },
    tabIndex: {
      description: 'Specifies the tab order of an element. ',
      table: { category: 'others' },
      control: 'null'
    },
    iconLeft: {
      description: 'The displayed icon on the left',
      control: { type: 'select', options: Object.keys(Icons) },
      table: { category: 'content' }
    },
    iconRight: {
      description: 'The displayed icon on the right',
      control: { type: 'select', options: Object.keys(Icons) },
      table: { category: 'content' }
    }
  },
  args: {
    block: false,
    size: 'medium',
    variant: 'primary',
    disabled: false,
    loading: false,
    children: 'Button'
  }
};

export const Playground = ({ iconLeft, iconRight, ...rest }) => {
  const CustomIconLeft = Icons[iconLeft];
  const CustomIconRight = Icons[iconRight];

  return (
    <div style={containerStyle}>
      <Button
        {...rest}
        iconLeft={iconLeft ? <CustomIconLeft /> : ''}
        iconRight={iconRight ? <CustomIconRight /> : ''}
      ></Button>
    </div>
  );
};
export const Block = args => {
  return (
    <div style={containerStyle}>
      <Button {...args}></Button>
    </div>
  );
};

Block.args = {
  block: true
};

export const WithIconLeft = () => {
  //Must import icon first
  const CustomIconLeft = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <Button iconLeft={<CustomIconLeft />}> Button Name</Button>
    </div>
  );
};

export const WithIconRight = () => {
  //Must import icon first
  const CustomIconRight = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <Button iconRight={<CustomIconRight />}> Button Name</Button>
    </div>
  );
};

export const Loading = args => {
  return (
    <div style={containerStyle}>
      <Button {...args}></Button>
    </div>
  );
};

Loading.args = {
  loadingText: 'Loading Text',
  loading: true
};
