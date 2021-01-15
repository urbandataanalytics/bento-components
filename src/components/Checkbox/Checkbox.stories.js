import React from 'react';
import Checkbox from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checkbox will be checked',
      table: {
        category: 'behaviour'
      }
    },
    disabled: {
      description: 'Checkbox will be set up as disabled',
      table: {
        category: 'behaviour'
      }
    },
    label: {
      description: 'The label of the Checkbox. It can also admit nodes such as `<h3></h3>`',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Name for the checkbox',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    size: {
      description: 'Size of the checkbox',
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
    checked: false,
    disabled: false,
    label: 'LabelText',
    size: 'medium'
  }
};
const containerStyle = {
  padding: '2rem'
};
export const Playground = args => {
  return (
    <div style={containerStyle}>
      <Checkbox {...args} />
    </div>
  );
};

export const Checked = args => {
  return (
    <div style={containerStyle}>
      <Checkbox {...args} />
    </div>
  );
};

Checked.args = {
  checked: true
};

export const Disabled = args => {
  return (
    <div style={containerStyle}>
      <Checkbox {...args} />
    </div>
  );
};

Disabled.args = {
  disabled: true
};

export const SmallSize = args => {
  return (
    <div style={containerStyle}>
      <Checkbox {...args} />
    </div>
  );
};

SmallSize.args = {
  size: 'small'
};
