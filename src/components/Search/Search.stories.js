import React, { useState } from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Search from './index';
import Button from '../Button';

export default {
  title: 'Search',
  component: Search
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={decoratorStyles}>
      {isOpen ? (
        <Search
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          onChange={action('onChange')}
          placeholder={text('Placeholder', 'Search any portfolio by name, seller or buyer')}
          value={text('Search Text Value', 'Cerberus')}
          leftContent={text('Left Content Text', '')}
          disabled={boolean('Disabled', false)}
          enableClickOutside={boolean('Enable Click Outside', true)}
          closable={boolean('Closable', true)}
        />
      ) : (
        <Button onClick={setIsOpen}>Open Search Bar</Button>
      )}
    </div>
  );
};
