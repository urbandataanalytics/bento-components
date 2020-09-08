import React from 'react';
import { text, select, number, array, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Slider from './index';

export default {
  title: 'Slider',
  component: Slider
};

const getCommonProps = () => {
  return {
    // value: number('Value', 1),
    onChange: action('onChange'),
    // variant: select('Variant', ['slider', 'range'], 'slider'),
    min: number('Min', 0),
    max: number('Max', 100)
    // disabled: boolean('Disabled', true)
  };
};

const decoratorStyles = {
  padding: '2rem'
};

// export const Normal = () => (
//   <div style={decoratorStyles}>
//     <Slider {...getCommonProps()} />
//   </div>
// );

// export const Error = () => (
//   <div style={decoratorStyles}>
//     <Slider error {...getCommonProps()} />
//   </div>
// );

export const RangeSlider = () => {
  const specificProps = () => ({
    value: array('Value', [10, 60]),
    variant: select('Variant', ['range'], 'range')
  });

  return (
    <div style={decoratorStyles}>
      <Slider {...specificProps()} {...getCommonProps()} />
    </div>
  );
};

export const DisabledSlider = () => {
  const specificProps = () => ({
    value: array('Value', [10, 60]),
    variant: select('Variant', ['range'], 'range')
  });

  return (
    <div style={decoratorStyles}>
      <Slider disabled {...specificProps()} {...getCommonProps()} />
    </div>
  );
};
