import Avatar from './index';
import React from 'react';
import { color, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Avatar',
  component: Avatar
};

const getCommonProps = () => {
  return {
    size: select('Size', ['small', 'medium', 'large'], 'medium'),
    color: select('Color', [null, 'primary', 'secondary'], null)
  };
};

export const Normal = () => (
  <Avatar
    {...getCommonProps()}
    src={text('Notification Text', 'https://atlantaseo.marketing/wp-content/uploads/avatar-2.png')}
  />
);

export const WithInitials = () => <Avatar {...getCommonProps()}>John Doe</Avatar>;
