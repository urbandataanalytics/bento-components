import React from 'react';
import Tooltip from './index';
import Button from '../Button/index.js';
import { select, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Tooltip',
  component: Tooltip
};

const containerStyle = {
  padding: '3rem',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column'
};

const buttonStyle = { marginBottom: '2rem' };

export const Playground = () => {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <Tooltip
          title={text('Title', 'Title for tooltip')}
          enterDelay={number('Enter Delay', 100)}
          leaveDelay={number('Leave Delay', 0)}
          value={text('Value', 'Text for tooltip')}
          position={select('Position', ['top', 'right', 'bottom', 'left'], 'top')}
        >
          <Button variant="primary" size="medium">
            Mouse on
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
