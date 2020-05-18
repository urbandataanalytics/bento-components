import React from 'react';
import FormGroup from './index';
import InputField from './../InputField';
import Button from './../Button';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'FormGroup',
  component: FormGroup
};

export const Playground = () => {
  const getCommonProps = () => {
    return {
      value: text('Value', ''),
      onChange: action('onChange')
    };
  };

  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <FormGroup>
        <InputField
          label="Email"
          type="email"
          placeholder="Type your email address"
          {...getCommonProps()}
        />
      </FormGroup>
      <FormGroup>
        <InputField
          label="Password"
          type="password"
          placeholder="Type your password"
          {...getCommonProps()}
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
