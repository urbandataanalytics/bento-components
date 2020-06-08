import Avatar from './index';
import React from 'react';
import { color, select, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Avatar',
  component: Avatar
};

const getCommonProps = () => {
  return {
    size: select('Size', ['small', 'medium', 'large'], 'medium')
  };
};

export const Normal = () => (
  <Avatar
    {...getCommonProps()}
    alt={'John Doe photo'}
    src={text('Notification Text', 'https://atlantaseo.marketing/wp-content/uploads/avatar-2.png')}
  />
);

export const WithInitials = () => (
  <Avatar
    {...getCommonProps()}
    initialsNum={number('Initials number', 2)}
    color={select('Color', [null, 'primary', 'secondary'], null)}
    customColor={color('Custom Color', '#1778FB')}
    customTextColor={color('Custom Text Color', '#FFFFFF')}
  >
    {text('Text', 'John Doe')}
  </Avatar>
);
