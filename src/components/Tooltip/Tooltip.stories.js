import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import Tooltip from './index';
import Button from '../Button/index.js';

export default {
  title: 'Tooltip',
  component: Tooltip
};

const containerStyle = {
  padding: '3rem',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around'
};

export const Medium = () => {
  return (
    <div style={containerStyle}>
      <Tooltip title="Tooltip text" position="left">
        <Button variant="primary" size="medium">
          Tooltip Left
        </Button>
      </Tooltip>
      <Tooltip title="Tooltip text" position="top">
        <Button variant="primary" size="medium">
          Tooltip Top
        </Button>
      </Tooltip>
      <Tooltip title="Tooltip text" position="bottom">
        <Button variant="primary" size="medium">
          Tooltip Bottom
        </Button>
      </Tooltip>
      <Tooltip title="Tooltip text" position="right">
        <Button variant="primary" size="medium">
          Tooltip Right
        </Button>
      </Tooltip>
    </div>
  );
};
