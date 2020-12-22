import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import ButtonLink from './index';
import * as Icons from '../../icons';

export default {
  title: 'ButtonLink',
  component: ButtonLink
};

const getCommonProps = () => {
  return {
    size: select('Sizes', ['small', 'medium', 'large'], 'medium'),
    variant: select('Variants', ['primary', 'secondary'], 'primary'),
    disabled: boolean('Disabled', false),
    text: text('ButtonLink text', 'ButtonLink')
  };
};

export const Normal = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <ButtonLink {...getCommonProps()} onClick={action('clicked')}>
        {getCommonProps().text}
      </ButtonLink>
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
      <ButtonLink onClick={action('clicked')} iconLeft={<CustomIcon />} {...getCommonProps()}>
        {getCommonProps().text}
      </ButtonLink>
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
      <ButtonLink onClick={action('clicked')} iconRight={<CustomIcon />} {...getCommonProps()}>
        {getCommonProps().text}
      </ButtonLink>
    </div>
  );
};
