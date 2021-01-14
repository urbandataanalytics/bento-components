import React from 'react';
import TextLink from './index';

export default {
  title: 'TextLink',
  component: TextLink,
  argTypes: {
    children: {
      description: 'Elements within the link',
      control: 'text',
      table: { category: 'content' }
    },
    className: {
      description: 'Adds class to the element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    disabled: {
      description: 'Disables the link',
      table: {
        category: 'behaviour'
      }
    },
    external: {
      description:
        'Sets the options `target= "__blank"` and the attributes `noopener`and `noreferrer to the`rel` attribute',
      table: {
        category: 'behaviour'
      }
    },
    href: {
      description: 'The url where it must link to',
      table: {
        category: 'content'
      }
    },
    size: {
      description: 'Sets the font size of the link',
      table: {
        category: 'format'
      }
    },
    tabIndex: {
      description: 'Specifies the tab order of an element.',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    variant: {
      description: 'Sets different styles according to the selected variant',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    children: 'Link Text',
    disabled: false,
    external: false,
    href: '#',
    size: 'medium',
    variant: 'primary'
  }
};

export const Playground = args => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <TextLink {...args}></TextLink>
    </div>
  );
};
