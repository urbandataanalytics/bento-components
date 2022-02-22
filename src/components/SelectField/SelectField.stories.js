import React from 'react';
import SelectField from './index';

export default {
  title: 'SelectField',
  component: SelectField,
  argTypes: {
    className: {
      description: 'Adds CSS class to the element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    defaultLabel: {
      description:
        "Sets a first option in the option list as a default value. For instance: 'Select value'",
      table: {
        category: 'content'
      }
    },
    disabled: {
      description: 'Disables the field and does not allow selecting',
      table: {
        category: 'behaviour'
      }
    },
    error: {
      description: " Turns the help text into 'error variant'",
      table: {
        category: 'format'
      }
    },
    label: {
      description: 'Text above the field',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Sets `name`to the input field ',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    onChange: {
      description: 'Handles behaviour when input content changes.',
      action: 'onChange Event',
      table: {
        category: 'events'
      }
    },
    options: {
      description:
        'Expects an array of objects used to list the options, the object with props: `value`and `label`',
      table: {
        category: 'content'
      }
    },
    tabIndex: {
      description: "Specifies the tab order of the element (when the 'tab' key is pressed)",
      control: 'none',
      table: {
        category: 'others'
      }
    },
    value: {
      description: 'Initial value set for the input field',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    error: false,
    label: 'Label Text',
    defaultLabel: 'Select Value',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'it', label: 'Italy' },
      { value: 'pt', label: 'Portugal' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'vc', label: 'Saint Vincent and the Grenadines' }
    ],
    disabled: false,
    value: 'en',
    onChange: () => {}
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = args => {
  return (
    <div style={decoratorStyles}>
      <SelectField {...args} />
    </div>
  );
};

export const MultiSelect = args => {
  return (
    <div style={decoratorStyles}>
      <SelectField {...args} multiSelect={true} />
    </div>
  );
};
