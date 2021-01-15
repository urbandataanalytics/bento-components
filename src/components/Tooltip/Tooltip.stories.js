import React from 'react';
import Tooltip from './index';
import Button from '../Button/index.js';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      description: 'Elements within the tooltip. The elements that trigger the tooltip on hover.',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    enterDelay: {
      description: 'Sets a time delay for the tooltip to open. In milisecs.',
      table: {
        category: 'behaviour'
      }
    },
    enterNextDelay: {
      description:
        'Sets a time delay to open another tooltip when another is already open. In milisecs.',
      table: {
        category: 'behaviour'
      }
    },
    leaveDelay: {
      description: 'Sets a time delay for closing the tooltip when leaving the hover. In milisecs.',
      table: {
        category: 'behaviour'
      }
    },
    position: {
      description:
        'Determines the position of the tooltip relative to the element that triggers it',
      table: {
        category: 'format'
      }
    },
    title: {
      description: 'Displays a paragraph on the top as a title for the tooltip',
      table: { category: 'content' }
    },
    value: {
      description: 'Displays a paragraph below the `title` with text for the tooltip',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    title: 'Title for tooltip',
    enterDelay: 100,
    leaveDelay: 0
  }
};

const containerStyle = {
  padding: '3rem',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column'
};

const buttonStyle = { marginBottom: '2rem' };

export const Playground = args => {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <Tooltip {...args}>
          <Button variant="primary" size="medium">
            Mouse on
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export const AllPositions = () => {
  return (
    <div style={containerStyle}>
      <div style={buttonStyle}>
        <Tooltip title="Top Position" position="top">
          <Button variant="primary" size="medium">
            Top
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Left Position" position="left">
          <Button variant="primary" size="medium">
            Left
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Right Position" position="right">
          <Button variant="primary" size="medium">
            Right
          </Button>
        </Tooltip>
      </div>
      <div style={buttonStyle}>
        <Tooltip title="Bottom Position" position="bottom">
          <Button variant="primary" size="medium">
            Bottom
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
