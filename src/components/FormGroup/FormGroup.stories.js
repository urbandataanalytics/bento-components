import React from 'react';
import FormGroup from './index';
import InputField from './../InputField';
import Button from './../Button';

export default {
  title: 'FormGroup',
  component: FormGroup,
  argTypes: {
    children: {
      description: 'The children/inputs for this form',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'Adds class for this element ',
      table: {
        category: 'others'
      }
    }
  }
};

export const Playground = ({ value, ...args }) => {
  const containerStyle = {
    padding: '2rem',
    width: '400px'
  };

  return (
    <div style={containerStyle}>
      <FormGroup>
        <InputField
          {...args}
          label="Email"
          type="email"
          placeholder="Type your email address"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <InputField
          label="Password"
          type="password"
          placeholder="Type your password"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Button block size="large" disabled>
          Sign in
        </Button>
      </FormGroup>
    </div>
  );
};

Playground.args = {
  value: ''
};
