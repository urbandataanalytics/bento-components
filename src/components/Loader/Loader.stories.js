import Loader from './index';
import React from 'react';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    size: {
      description: 'Allows to choose size of loader',
      table: {
        category: 'format'
      }
    },
    color: {
      description: 'Allows to choose between primary and secondary styles of default theme',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    size: 'medium',
    color: 'primary'
  }
};

export const Playground = args => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '400px' }}
  >
    <Loader {...args} />
  </div>
);
