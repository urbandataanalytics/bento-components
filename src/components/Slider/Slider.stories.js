import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Slider from './index';

export default {
  title: 'Slider',
  component: Slider
};

const getCommonProps = () => {
  return {
    onChange: action('onChange'),
    min: number('Min', 0),
    max: number('Max', 500),
    step: number('Step', 1),
    disabled: boolean('Disabled', false),
    isLoading: boolean('Loading', false)
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => {
  return (
    <div style={decoratorStyles}>
      <Slider variant={'slider'} value={50} {...getCommonProps()} />
    </div>
  );
};

export const Multiple = () => {
  return (
    <div style={decoratorStyles}>
      <Slider
        variant={'range'}
        value={[50, 200]}
        suffix={text('Sufix', '€/m2')}
        prefix={text('Prefix', '')}
        {...getCommonProps()}
      />
    </div>
  );
};
