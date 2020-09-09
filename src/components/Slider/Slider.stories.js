import React from 'react';
import { text, select, number, array, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Slider from './index';

export default {
  title: 'Slider',
  component: Slider
};

const getVariant = () => {
  return {
    variant: select('Variant', ['slider', 'range'], 'slider')
  };
};

const getCommonProps = variant => {
  return {
    value: variant === 'range' ? array('Value', [50, 200]) : number('Value', 50),
    onChange: action('onChange'),
    min: number('Min', 0),
    max: number('Max', 5000),
    step: number('Step', 1),
    sufix: variant === 'range' && text('Sufix', '€/m2'),
    prefix: variant === 'range' && text('Prefix', ''),
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
      <Slider {...getVariant()} {...getCommonProps(getVariant().variant)} />
    </div>
  );
};
