import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import TextLink from './index';

export default {
  title: 'TextLink',
  component: TextLink
};

const getCommonProps = () => {
  return {
    disabled: boolean('Disabled', false),
    external: boolean('External', false),
    href: text('Link', '#'),
    size: select('Sizes', ['medium', 'large'], 'medium'),
    text: text('TextLink text', 'Message')
  };
};

export const Primary = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <TextLink {...getCommonProps()} variant="primary" onClick={action('clicked')}>
        {getCommonProps().text}
      </TextLink>
    </div>
  );
};

export const Secondary = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <TextLink {...getCommonProps()} variant="secondary" onClick={action('clicked')}>
        {getCommonProps().text}
      </TextLink>
    </div>
  );
};
