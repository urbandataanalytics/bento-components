import React from 'react';
import InlineInputField from './index';
import * as Icons from '../../icons';

export default {
  title: 'InlineInputField',
  component: InlineInputField,
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
      description: 'Text for the field label. Also accepts nodes.',
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
    },
    labelIcon: {
      description: 'Sets icon to be place on the left side of the label',
      control: { type: 'select', options: Object.keys(Icons) },
      table: { category: 'content' }
    },
    textAlign: {
      description: 'Defines the text alignment both for the input and the help text',
      table: { category: 'format' }
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

export const Playground = ({ labelIcon, ...rest }) => {
  const CustomIcon = Icons[labelIcon];
  return (
    <div style={decoratorStyles}>
      <InlineInputField {...rest} labelIcon={labelIcon ? <CustomIcon /> : ''} />
    </div>
  );
};

export const withIcon = ({ labelIcon, ...rest }) => {
  const CustomIcon = Icons[labelIcon];
  return (
    <div style={decoratorStyles}>
      <InlineInputField {...rest} labelIcon={labelIcon ? <CustomIcon /> : ''} />
    </div>
  );
};

withIcon.args = {
  labelIcon: 'IconOrderDesc'
};

export const Error = args => (
  <div style={decoratorStyles}>
    <InlineInputField error {...args} />
  </div>
);

Error.args = {
  error: true
};

export const Disabled = args => (
  <div style={decoratorStyles}>
    <InlineInputField disabled {...args} />
  </div>
);

Disabled.args = {
  disabled: true
};
