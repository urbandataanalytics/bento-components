import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import MapLeyend from './index';

export default {
  title: 'MapLeyend',
  component: MapLeyend
};

const getCommonProps = () => {
  return {
    title: text('Title', 'Leyend'),
    description: text('Description', 'Lorem ipsum'),
    rangeTextMin: text('Min Text', 'Minium'),
    rangeTextMax: text('Max Text', 'Max'),
    isLoading: boolean('Loading', false),
    offsetLeft: text('Offset Left', '0px'),
    offsetBottom: text('Offset Bottom', '0px')
  };
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapLeyend
        {...getCommonProps()}
        rangeColors={[
          '#03045E',
          '#ADE8F4',
          '#90D8EF',
          '#48B5E4',
          '#008BC7',
          '#0077B6',
          '#023E8A',
          '#03045E'
        ]}
      />
    </div>
  );
};
