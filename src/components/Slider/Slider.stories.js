import React, { useState } from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Slider from './index';
import Button from '../Button';

export default {
  title: 'Slider',
  component: Slider
};

const getCommonProps = variant => {
  return {
    onChange: action('onChange'),
    min: number('Min', 1),
    max: number('Max', 10000),
    step: number('Step', 1),
    sufix: variant === 'range' ? text('Sufix', '€/m2') : '',
    prefix: variant === 'range' ? text('Prefix', '') : '',
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

export const Range = () => {
  const [values, setValues] = useState([1000, 10000]);

  const resetSlider = () => {
    setValues([50, 8000]);
  };

  return (
    <div style={decoratorStyles}>
      <div>
        <Button size="medium" onClick={resetSlider}>
          Reset
        </Button>
      </div>
      <br />
      <Slider
        variant={'range'}
        suffix={text('Sufix', '€/m2')}
        prefix={text('Prefix', '')}
        format={value => new Intl.NumberFormat('en').format(value)}
        value={values}
        {...getCommonProps()}
      />
    </div>
  );
};
