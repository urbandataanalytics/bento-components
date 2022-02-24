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
    name: {
      description: 'Sets `name` to the input field ',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    tabIndex: {
      description: "Specifies the tab order of the element (when the 'tab' key is pressed)",
      control: 'none',
      table: {
        category: 'others'
      }
    },
    disabled: {
      description: 'Disables the field and does not allow selecting',
      table: {
        category: 'behaviour'
      }
    },
    size: {
      description: 'Sets size of the field, `medium` by default',
      table: {
        category: 'behaviour'
      }
    },
    multiSelect: {
      description: 'Allows multiple options to be selected',
      table: {
        category: 'behaviour'
      }
    },
    defaultLabel: {
      description:
        "Sets a first option in the option list as a default label. For instance: 'Select value'",
      table: {
        category: 'content'
      }
    },
    label: {
      description: 'Text above the field',
      table: {
        category: 'content'
      }
    },
    options: {
      description:
        'Expects an array of objects used to list the options, the object with props: `value` and `label`',
      table: {
        category: 'content'
      }
    },
    defaultValue: {
      description: 'Sets a first option in the option list as a default value.',
      table: {
        category: 'content'
      }
    },
    value: {
      description: 'Initial value set for the input field',
      table: {
        category: 'content'
      }
    },
    selectedWord: {
      description: 'Handles behaviour when input content changes.',
      table: {
        category: 'content'
      }
    },
    allSelectedWord: {
      description: 'Word to be displayed when you select all items',
      table: {
        category: 'content'
      }
    },
    clearButton: {
      description: 'Add a button to clear the selection',
      table: {
        category: 'content'
      }
    },
    clearButtonWord: {
      description: 'Word to be displayed on the button',
      table: {
        category: 'content'
      }
    },
    onChange: {
      description: 'Handles behaviour when input content changes.',
      action: 'onChange Event',
      table: {
        category: 'events'
      }
    }
  },
  args: {
    label: 'Label Text',
    defaultLabel: 'Select Value',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'it', label: 'Italy' }
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
