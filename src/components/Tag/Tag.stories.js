import React from 'react';
import Tag from './index';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    customColor: {
      description:
        " Allows picking a custom color in CSS format (#hexadecimal or RGB). Takes priority in front of `color`. When defined, `color` won't work.",
      control: 'color',
      table: {
        category: 'format'
      }
    },
    children: {
      defaultValue: 'Text',
      description:
        "Tag content. It can be a string or a React component. If it's a string, it will be rendered as a text. If it's a React component, it will be rendered as a component.",
      control: 'text',
      table: {
        category: 'content'
      }
    }
  }
};

export const Default = ({ children, ...rest }) => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tag {...rest}>{children}</Tag>
    </div>
  );
};

export const CustomColor = ({ children, ...rest }) => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tag {...rest}>{children}</Tag>
    </div>
  );
};
