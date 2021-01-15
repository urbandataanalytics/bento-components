import React from 'react';
import SwitchButtons from './index';
import ButtonLink from '../ButtonLink/index.js';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'SwitchButtons',
  component: SwitchButtons,
  subcomponents: { ButtonLink },
  argTypes: {
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
      <SwitchButtons onChange={(e, value) => handleChange(value)} {...args}>
        <ButtonLink value="first">First</ButtonLink>
        <ButtonLink value="second">Second</ButtonLink>
        <ButtonLink value="third">Value</ButtonLink>
      </SwitchButtons>
    </div>
  );
};

Playground.args = {
  value: 'first'
};
