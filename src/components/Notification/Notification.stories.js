import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Notification from './index';
import * as Icons from '../../icons';

export default {
  title: 'Notification',
  component: Notification
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = () => {
  const selectedIcon = select('Custom Icon', Object.keys(Icons), 'IconPin');
  const CustomIcon = Icons[selectedIcon];
  return (
    <div style={decoratorStyles}>
      <Notification
        variant={select('Variant', ['normal', 'success', 'error'], 'success')}
        showIcon={boolean('Show Icon', true)}
        closable={boolean('Closable', false)}
        icon={<CustomIcon size="medium" />}
        onClose={action('onClose')}
      >
        {text('Notification Text', 'Message')}
      </Notification>
    </div>
  );
};
