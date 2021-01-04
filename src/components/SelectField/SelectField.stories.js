import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SelectField from './index';

export default {
  title: 'SelectField',
  component: SelectField
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = () => {
  const definedOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' }
  ];

  return (
    <div style={decoratorStyles}>
      <SelectField
        help={text('Help text', 'Help text')}
        error={boolean('Error Style', false)}
        label={text('Label', 'Label Text')}
        defaultLabel={text('Default value label', 'Select value')}
        options={definedOptions}
        disabled={boolean('Disabled', false)}
        onChange={action('onChange')}
        value={select('Value', ['en', 'es'], 'en')}
      />
    </div>
  );
};
