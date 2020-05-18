import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Notification from './index';
import * as Icons from '../../icons';

export default {
  title: 'Notification',
  component: Notification
};

const getCommonProps = () => {
  return {
    children: text('Notification Text', 'Message'),
    showIcon: boolean('Show Icon', true),
    closable: boolean('Closable', false),
    onClose: action('onClose')
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <Notification {...getCommonProps()} />
  </div>
);

export const Success = () => (
  <div style={decoratorStyles}>
    <Notification variant="success" {...getCommonProps()} />
  </div>
);

export const Error = () => (
  <div style={decoratorStyles}>
    <Notification variant="error" {...getCommonProps()} />
  </div>
);

export const WithCustomIcon = () => {
  const selectedIcon = select('Custom Icon', Object.keys(Icons), 'IconPin');
  const CustomIcon = Icons[selectedIcon];

  return (
    <div style={decoratorStyles}>
      <Notification
        variant={select('Variant', ['normal', 'success', 'error'], 'success')}
        {...getCommonProps()}
        icon={<CustomIcon size="medium" />}
      />
    </div>
  );
};
