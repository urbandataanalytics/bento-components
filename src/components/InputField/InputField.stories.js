import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InputField from './index';

export default {
  title: 'InputField',
  component: InputField,
  argTypes: {
    className: {
      description: 'Adds class to this node',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    disabled: {
      description: 'Disables input and avoids edition',
      table: {
        category: 'behaviour'
      }
    },
    error: {
      description: 'Adds falsy style to the field',
      table: {
        category: 'behaviour'
      }
    },
    help: {
      description: 'Assisting text for the user',
      table: {
        category: 'content'
      }
    },
    label: {
      description: 'Texto for the field label. Also accepts nodes.',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Assigns `name` attribute to the input',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    onChange: {
      description: ' Method to handle onChange event',
      action: 'click OnChange',
      table: {
        category: 'events'
      }
    },
    placeholder: {
      description:
        'Assigns `placeholder` attribute to the input, displaying assisting text inside the field, and dissapears when something is written into the input',
      table: {
        category: 'others'
      }
    },
    tabIndex: {
      description:
        'Assigns `tabIndex` attribute to the input, in order to control focus and sequential navigation',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    type: {
      description: 'Indicates the type of input in order to display correct validations',
      table: {
        category: 'format'
      }
    },
    value: {
      description: 'Sets an initial value of the input field',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    placeholder: 'Placeholder text',
    value: 'Value text',
    type: 'text',
    label: 'Label text',
    help: 'Help text'
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = args => {
  return (
    <div style={decoratorStyles}>
      <InputField {...args} />
    </div>
  );
};

export const Error = args => (
  <div style={decoratorStyles}>
    <InputField error {...args} />
  </div>
);

Error.args = {
  error: true
};

export const Disabled = args => (
  <div style={decoratorStyles}>
    <InputField disabled {...args} />
  </div>
);

Disabled.args = {
  disabled: true
};
