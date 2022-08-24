import React from 'react';
import Notification from './index';
import * as Icons from '../../icons';

export default {
  title: 'Notification',
  component: Notification,
  argTypes: {
    children: {
      description: 'Content of the Notification.',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    closable: {
      description: "Adds  'X' icon to allow the content to be closed manually",
      table: {
        category: 'behaviour'
      }
    },
    icon: {
      description:
        'Allows to specify an icon for the Warning. ShowIcon must be `true`in order to show',
      control: { type: 'select', options: Object.keys(Icons) },
      table: { category: 'content' }
    },
    onClose: {
      description: 'Handles the behaviour onClose event',
      action: 'onClose event',
      table: {
        category: 'events'
      }
    },
    showIcon: {
      description: 'shows the specified icon on the left of the message',
      table: {
        category: 'format'
      }
    },
    variant: {
      description: 'The format of the notification',
      control: { type: 'select', options: ['normal', 'info', 'success', 'warning', 'error'] },
      table: { category: 'format' }
    }
  },
  args: {
    variant: 'success',
    showIcon: true,
    closable: false,
    icon: 'IconPin',
    children: 'Notification Message'
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = ({ icon, ...args }) => {
  const CustomIcon = Icons[icon];
  return (
    <div style={decoratorStyles}>
      <Notification {...args} icon={<CustomIcon />}></Notification>
    </div>
  );
};

export const Closable = ({ icon, ...args }) => {
  const CustomIcon = Icons[icon];
  return (
    <div style={decoratorStyles}>
      <Notification {...args} icon={<CustomIcon />}></Notification>
    </div>
  );
};

Closable.args = {
  closable: true,
  variant: 'normal'
};
