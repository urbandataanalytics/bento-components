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
    inputBackground: {
      description:
        'Sets a background color for the input when not focus or error. Transparent by default.',
      control: 'color',
      table: {
        category: 'format'
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
    },
    prefix: {
      description:
        'Inserts a label with custom text in the left side of the input. The input text will not override the prefix. This option also changes the full style of the field to be used as a narrower variant.',
      table: {
        category: 'content'
      }
    },
    suffix: {
      description:
        'Inserts a string on the right side of the input. It will be right next to it, and will always force the text-align to the right.',
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

export const SeveralAlignment = ({ label, labelIcon, textAlign, ...rest }) => {
  const CustomIcon = Icons[labelIcon];
  return (
    <div style={decoratorStyles}>
      <InlineInputField {...rest} textAlign="right" label="very long label to test reactivity" />
      <InlineInputField {...rest} label="label" labelIcon={labelIcon ? <CustomIcon /> : ''} />
      <InlineInputField
        {...rest}
        textAlign="right"
        label="label with icon"
        labelIcon={labelIcon ? <CustomIcon /> : ''}
      />
      <InlineInputField {...rest} label="label no icon" />
    </div>
  );
};

SeveralAlignment.args = {
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

export const WithInnerLabels = () => (
  <div style={{ width: '400px' }}>
    <div style={{ ...decoratorStyles }}>
      <InlineInputField label="With prefix and suffix" prefix="1.280€" suffix="%" value="2" />
    </div>
    <div style={{ ...decoratorStyles }}>
      {' '}
      <InlineInputField label="Only prefix" prefix="1.280€" value="2" />
    </div>

    <div style={{ ...decoratorStyles }}>
      {' '}
      <InlineInputField label="Only prefix disabled" disabled prefix="1.280€" value="2" />
    </div>

    <div style={{ ...decoratorStyles }}>
      {' '}
      <InlineInputField label="Only suffix" suffix="%" value="2" />
    </div>
  </div>
);
