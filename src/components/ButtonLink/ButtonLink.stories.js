import React from 'react';
import ButtonLink from './index';
import * as Icons from '../../icons';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  argTypes: {
    block: {
      description: 'Button will grow up to the full width of its container',
      table: { category: 'format' }
    },
    children: {
      description: 'Content of button link',
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
    onClick: {
      description: 'Functions to handle the onclick event',
      action: 'click',
      table: {
        category: 'events'
      }
    },
    size: {
      description: 'Variant of size of the component',
      table: {
        category: 'format'
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
    },
    contrast: {
      description: 'Specifies contrast format for darker backgrounds',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    block: false,
    size: 'medium',
    variant: 'primary',
    disabled: false,
    children: 'ButtonLink'
  }
};

const containerStyle = {
  padding: '2rem'
};

export const Playground = ({ iconLeft, iconRight, ...rest }) => {
  const CustomIconLeft = Icons[iconLeft];
  const CustomIconRight = Icons[iconRight];

  return (
    <div style={containerStyle}>
      <ButtonLink
        {...rest}
        iconLeft={iconLeft ? <CustomIconLeft /> : ''}
        iconRight={iconRight ? <CustomIconRight /> : ''}
      ></ButtonLink>
    </div>
  );
};

export const WithIconLeft = () => {
  const CustomIconLeft = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <ButtonLink iconLeft={<CustomIconLeft />}> Button Name</ButtonLink>
    </div>
  );
};

export const WithIconRight = () => {
  const CustomIconRight = Icons['IconWarning'];

  return (
    <div style={containerStyle}>
      <ButtonLink iconRight={<CustomIconRight />}> Button Name</ButtonLink>
    </div>
  );
};

export const Contrast = () => {
  return (
    <div style={{ ...containerStyle, background: '#0C1B7A' }}>
      <ButtonLink variant="primary" size="medium" contrast={true}>
        Primary
      </ButtonLink>
      <ButtonLink variant="secondary" size="medium" contrast={true}>
        Secondary
      </ButtonLink>
      <ButtonLink variant="danger" size="medium" contrast={true}>
        Danger
      </ButtonLink>
    </div>
  );
};
