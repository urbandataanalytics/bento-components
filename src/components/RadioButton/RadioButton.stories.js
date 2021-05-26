import React from 'react';
import RadioButton from './index';

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
    },
    customLabelColor: {
      description: 'Accepts a custom color for the label when the input is checked in css format',
      control: 'color',
      table: {
        category: 'format'
      }
    },
    value: {
      description: ' defines a value to be passed in the event for that option',
      control: 'none',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    disabled: false,
    size: 'medium',
    name: 'radio',
    label: 'Option 1'
  }
};
const containerStyle = {
  padding: '2rem'
};

export const Playground = ({ value, ...args }) => {
  return (
    <div style={containerStyle}>
      <p style={{ margin: '0 0 15px 0' }}>Use controls to check/uncheck and change format</p>
      <RadioButton {...args} value="option1" />
    </div>
  );
};

export const Disabled = ({ label, ...args }) => {
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
