import React from 'react';
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
  alignItems: 'center',
  flexDirection: 'column'
};

const buttonStyle = { marginBottom: '2rem' };

export const Medium = () => {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" position="left">
          <Button variant="primary" size="medium">
            Tooltip Left
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" position="top">
          <Button variant="primary" size="medium">
            Tooltip Top
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" position="bottom">
          <Button variant="primary" size="medium">
            Tooltip Bottom
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" position="right">
          <Button variant="primary" size="medium">
            Tooltip Right
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export const Large = () => {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" value="Tooltip value" position="left">
          <Button variant="primary" size="medium">
            Tooltip Left
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" value="Tooltip value" position="top">
          <Button variant="primary" size="medium">
            Tooltip Top
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" value="Tooltip value" position="bottom">
          <Button variant="primary" size="medium">
            Tooltip Bottom
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Tooltip text" value="Tooltip value" position="right">
          <Button variant="primary" size="medium">
            Tooltip Right
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
