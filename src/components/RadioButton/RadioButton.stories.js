import React from 'react';
import RadioButton from './index';
import { useState } from 'react';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    checked: {
      description: 'RadioButton will be checked',
      table: {
        category: 'behaviour'
      }
    },
    disabled: {
      description: 'RadioButton will be set up as disabled',
      table: {
        category: 'behaviour'
      }
    },
    label: {
      description: 'The label of the RadioButton. It can also admit nodes such as `<h3></h3>`',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Name for the RadioButton',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    size: {
      description: 'Size of the RadioButton',
      table: {
        category: 'format'
      }
    },
    tabIndex: {
      description: 'Specifies the tab order of an element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    onChange: {
      description: 'Function for handling the onChange event',
      action: 'changedEvent',
      table: {
        category: 'events'
      }
    }
  },
  args: {
    disabled: false,
    size: 'medium',
    name: 'radio'
  }
};
const containerStyle = {
  padding: '2rem'
};

export const Playground = ({ value, label, ...args }) => {
  return (
    <div style={containerStyle}>
      <RadioButton {...args} value="option1" label="option1" />
    </div>
  );
};

export const Disabled = ({ label, checked, ...args }) => {
  return (
    <div style={containerStyle}>
      <RadioButton {...args} label="option1" name="radio" />
      <RadioButton {...args} label="option2" name="radio" />
    </div>
  );
};

Disabled.args = {
  disabled: true
};
