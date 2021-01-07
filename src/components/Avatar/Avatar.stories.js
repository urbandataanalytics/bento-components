import Avatar from './index';
import React from 'react';
import { color, select, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Avatar',
  component: Avatar
};

const getCommonProps = () => {
  return {
    size: select('Size', ['small', 'medium', 'large'], 'medium'),
    alt: text('Alt', 'John Doe Photo'),
    customColor: color('Custom Color', '#1778FB'),
    customTextColor: color('Custom Text Color', '#FFFFFF'),
    src: text('Image link', 'https://atlantaseo.marketing/wp-content/uploads/avatar-2.png')
  };
};

export const Playground = () => <Avatar {...getCommonProps()} />;

export const WithInitials = () => (
  <Avatar
    initialsNum={number('Initials number', 2)}
    customColor={color('Custom Color', '#1778FB')}
    customTextColor={color('Custom Text Color', '#FFFFFF')}
  >
    {text('Text', 'John Doe')}
  </Avatar>
);

export const WithNoCustomColor = () => (
  <Avatar initialsNum={number('Initials number', 2)}>{text('Text', 'John Doe')}</Avatar>
);
