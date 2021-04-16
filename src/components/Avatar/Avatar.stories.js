import React from 'react';
import Avatar from './index';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    alt: {
      description:
        'Alternative text to the DOM image element. Initials will be extracted from this if the image fails to load or while it is loading',
      table: { category: 'content' }
    },
    children: {
      description:
        'Text In Component. Initials will be extracted from this when image is not informed. ',
      control: 'text',
      table: { category: 'content' }
    },
    customColor: {
      description: 'Custom color of the Avatar',
      control: 'color',
      table: { category: 'format' }
    },
    customTextColor: {
      description: 'Custom text color of the avatar',
      control: 'color',
      table: { category: 'format' }
    },
    imgProps: {
      description: 'Specific properties to apply to the image',
      control: 'null',
      table: { category: 'others' }
    },
    initialsNum: {
      description: 'Number of initials to be shown when no image is specified',
      control: 'number',
      table: { category: 'format' }
    },
    size: {
      description: 'Options of sizes for the avatar',
      table: { category: 'format' }
    },
    src: {
      description: 'Link of the image to use in the Avatar',
      table: { category: 'content' }
    },
    srcSet: {
      description: 'Specifies URL of the image to use in different situations',
      control: 'null',
      table: { category: 'others' }
    }
  },
  args: {
    size: 'medium',
    alt: 'John Doe Photo',
    customColor: '#1778FB',
    customTextColor: '#FFFFFF',
    src: '',
    children: null
  }
};

export const Playground = args => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Avatar {...args}></Avatar>
    </div>
  );
};

Playground.args = {
  src: 'https://atlantaseo.marketing/wp-content/uploads/avatar-2.png'
};

export const WithInitials = args => (
  <div>
    <Avatar {...args}></Avatar>
  </div>
);

WithInitials.args = {
  children: 'Sample Text'
};

export const WithNoCustomColors = args => <Avatar {...args}></Avatar>;

WithNoCustomColors.args = {
  customTextColor: '',
  customColor: '',
  children: 'Sample Text'
};
