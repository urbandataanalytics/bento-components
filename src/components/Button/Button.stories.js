import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from './index';
import * as Icons from '../../icons';

export default {
  title: 'Button',
  component: Button
};

const getCommonProps = () => {
  return {
    size: select('Sizes', ['medium', 'large'], 'medium'),
    variant: select('Variants', ['primary', 'secondary'], 'primary'),
    disabled: boolean('Disabled', false),
    text: text('Button text', 'Button')
  };
};

export const Normal = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Button {...getCommonProps()} onClick={action('clicked')}>
        {getCommonProps().text}
      </Button>
    </div>
  );
};

export const Block = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Button onClick={action('clicked')} {...getCommonProps()} block>
        {getCommonProps().text}
      </Button>
    </div>
  );
};

export const WithIcon = () => {
  const selectedIcon = select('Icons', Object.keys(Icons), 'IconWarning');
  const CustomIcon = Icons[selectedIcon];
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Button onClick={action('clicked')} iconLeft={<CustomIcon />} {...getCommonProps()}>
        {getCommonProps().text}
      </Button>
    </div>
  );
};
