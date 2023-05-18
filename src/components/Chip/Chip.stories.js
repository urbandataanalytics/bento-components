import React from 'react';
import Chip from './index';
import * as Icons from '../../icons';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    block: {
      description: 'Chips allow users to: make selections, filter content or trigger actions',
      table: { category: 'format' }
    },
    children: {
      description: 'Content of chip',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'custom className for the component',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    disabled: {
      description: 'Button will be disabled',
      table: {
        category: 'behaviour'
      }
    },
    iconLeft: {
      description: 'The displayed icon on the left',
      control: { type: 'select', options: Object.keys(Icons) },
      table: {
        category: 'content'
      }
    },
    iconRight: {
      description: 'The displayed icon on the right',
      control: { type: 'select', options: Object.keys(Icons) },
      table: {
        category: 'content'
      }
    },
    onChange: {
      description: 'Functions to handle onchange event',
      action: 'onchange',
      table: {
        category: 'events'
      }
    },

    tabIndex: {
      description: 'Specifies the tab order of an element',
      table: {
        category: 'others'
      }
    },
    variant: {
      description: 'Format variant of the component',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    block: false,
    variant: 'rounded',
    disabled: false,
    children: 'Chip'
  }
};

const containerStyle = {
  padding: '2rem'
};

export const Playground = ({ iconLeft, iconRight, iconCheck, ...rest }) => {
  const CustomIconLeft = Icons[iconLeft];
  const CustomIconRight = Icons[iconRight];
  const CustomIconCheck = Icons[iconCheck];

  return (
    <div style={containerStyle}>
      <Chip
        {...rest}
        iconLeft={iconLeft ? <CustomIconLeft /> : ''}
        iconRight={iconRight ? <CustomIconRight /> : ''}
        iconCheck={iconRight ? <CustomIconCheck /> : ''}
      ></Chip>
    </div>
  );
};

export const WithIconLeft = () => {
  const CustomIconLeft = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <Chip iconLeft={<CustomIconLeft />}> Chip name</Chip>
    </div>
  );
};

export const WithIconRight = () => {
  const CustomIconRight = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <Chip iconRight={<CustomIconRight />}> Chip Name</Chip>
    </div>
  );
};
export const WithIconCheck = () => {
  const CustomIconRight = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <Chip iconRight={<CustomIconCheck />}> Chip Name</Chip>
    </div>
  );
};
