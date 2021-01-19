import React from 'react';
import Tabs from './index';
import Tab from './Tab/index';
import Button from '../Button/index';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { Tab },
  argTypes: {
    align: {
      description: 'Defines the aligment of the texts within the tabs',
      table: {
        category: 'format'
      }
    },
    children: {
      description: 'These elements will create tabs for each',
      table: {
        category: 'content'
      }
    },
    leftContent: {
      description: 'Adds defined elements on the left area of the tabs',
      control: 'none',
      table: { category: 'content' }
    },
    rightContent: {
      description: 'Adds defined elements on the right area of the tabs',
      control: 'none',
      table: { category: 'content' }
    },
    onChange: {
      description: 'Handles behaviour when onchange event is triggered',
      table: {
        category: 'events'
      }
    },
    value: {
      description:
        'Defines the active tab. The value must match with any of the `value` props of the `tab` within',
      table: { category: 'content' }
    }
  }
};

export const Playground = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ value: value });
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tabs {...args} onChange={(e, value) => handleChange(value)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" disabled />
      </Tabs>
    </div>
  );
};

Playground.args = {
  value: 1
};

export const WithBadge = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ value: value });
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tabs {...args} onChange={(e, value) => handleChange(value)}>
        <Tab label="Tab 1" badge="12" />
        <Tab label="Tab 2" badge="8" />
        <Tab label="Tab 3" badge="9" disabled />
      </Tabs>
    </div>
  );
};

WithBadge.args = {
  value: 0
};

export const WithLeftAndRightContent = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ value: value });
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tabs {...args} onChange={(e, value) => handleChange(value)}>
        <Tab label="Tab 1" badge="12" />
        <Tab label="Tab 2" badge="8" />
        <Tab label="Tab 3" badge="9" disabled />
      </Tabs>
    </div>
  );
};

WithLeftAndRightContent.args = {
  value: 0,
  leftContent: <Button>Example</Button>,
  rightContent: <Button>Example</Button>
};
