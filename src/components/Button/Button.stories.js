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
    block: boolean('Block Style', false),
    size: select('Sizes', ['medium', 'large'], 'medium'),
    variant: select('Variants', ['primary', 'secondary'], 'primary'),
    disabled: boolean('Disabled', false),
    loading: boolean('Loading', false),
    text: text('Button text', 'Button'),
    loadingText: text('Loading text', 'Loading')
  };
};

export const Playground = () => {
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
// Borramos block? - Incluido en los knobs de Playground
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

export const WithIconLeft = () => {
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

export const WithIconRight = () => {
  const selectedIcon = select('Icons', Object.keys(Icons), 'IconWarning');
  const CustomIcon = Icons[selectedIcon];
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Button onClick={action('clicked')} iconRight={<CustomIcon />} {...getCommonProps()}>
        {getCommonProps().text}
      </Button>
    </div>
  );
};

export const Loading = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Button loadingText={text('Loading text', 'Loading')} onClick={action('clicked')} loading>
        "Button"
      </Button>
    </div>
  );
};
