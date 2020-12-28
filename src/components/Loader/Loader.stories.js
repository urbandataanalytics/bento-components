import Loader from './index';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Loader',
  component: Loader
};

export const Normal = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '400px' }}
  >
    <Loader
      size={select('Size', ['small', 'medium', 'large'], 'medium')}
      color={select('Color', ['primary', 'secondary'], 'primary')}
    />
  </div>
);
