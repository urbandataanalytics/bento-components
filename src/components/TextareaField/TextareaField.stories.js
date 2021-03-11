import React from 'react';
import TextareaField from './index';

export default {
  title: 'TextareaField',
  component: TextareaField,
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
      <TextareaField {...args} />
    </div>
  );
};

export const Error = args => (
  <div style={decoratorStyles}>
    <TextareaField error {...args} />
  </div>
);

Error.args = {
  error: true
};

export const Disabled = args => (
  <div style={decoratorStyles}>
    <TextareaField disabled {...args} />
  </div>
);

Disabled.args = {
  disabled: true
};
