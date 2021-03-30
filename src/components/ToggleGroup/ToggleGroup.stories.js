import React from 'react';
import ToggleGroup from './index';
import ButtonLink from '../ButtonLink/index.js';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'ToggleGroup',
  component: ToggleGroup,
  subcomponents: { ButtonLink },
  argTypes: {
    variant: {
      description: ' Modify style of children',
      table: {
        category: 'format'
      }
    },
    children: {
      description: ' Elements to switch within',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    value: {
      description: 'value of the active children',
      table: {
        category: 'content'
      }
    },
    onChange: {
      description: 'Handles behaviour when onClick event is triggered',
      action: 'onChange event',
      table: {
        category: 'events'
      }
    }
  }
};

export const Playground = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const containerStyle = {
    padding: '2rem'
  };

  const handleChange = value => updateArgs({ value: value });
  return (
    <div style={containerStyle}>
      <ToggleGroup onChange={(e, value) => handleChange(value)} {...args}>
        <ButtonLink value="first">First</ButtonLink>
        <ButtonLink value="second">Second</ButtonLink>
        <ButtonLink value="third">Value</ButtonLink>
      </ToggleGroup>
    </div>
  );
};

Playground.args = {
  value: 'first'
};

export const ButtonVariant = ({ onChange, ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const containerStyle = {
    padding: '2rem'
  };

  const handleChange = value => updateArgs({ value: value });
  return (
    <div style={containerStyle}>
      <ToggleGroup onChange={(e, value) => handleChange(value)} {...args}>
        <ButtonLink value="first">First</ButtonLink>
        <ButtonLink value="second">Second</ButtonLink>
        <ButtonLink value="third">Value</ButtonLink>
      </ToggleGroup>
    </div>
  );
};

ButtonVariant.args = {
  value: 'second',
  variant: 'buttons'
};
