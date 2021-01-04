import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import TextLink from './index';

export default {
  title: 'TextLink',
  component: TextLink
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <TextLink
        disabled={boolean('Disabled', false)}
        external={boolean('External', false)}
        href={text('Link', '#')}
        size={select('Sizes', ['medium', 'large'], 'medium')}
        variant={select('Variant', ['primary', 'secondary'], 'primary')}
        onClick={action('clicked')}
      >
        {text('Link Text', 'Example Text')}
      </TextLink>
    </div>
  );
};
