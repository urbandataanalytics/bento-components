import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import MapLegend from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MapLegend',
  component: MapLegend
};

const getCommonProps = () => {
  return {
    title: text('Title', 'Legend'),
    description: text('Description', 'Lorem ipsum'),
    rangeTextMin: text('Min Text', 'Minium'),
    rangeTextMax: text('Max Text', 'Max'),
    isLoading: boolean('Loading', false),
    offsetLeft: text('Offset Left', '0px'),
    offsetBottom: text('Offset Bottom', '0px')
  };
};

const withActionsProps = () => {
  return {
    activeAction: select('Active action', { Sale: 'sale', Rent: 'rent' }, 'sale')
  };
};

export const RangeLegend = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapLegend
        {...getCommonProps()}
        variant="range"
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
        points={[
          { color: '#1B817A', label: 'Exact address' },
          { color: '#EDBE96', label: 'No exact address' }
        ]}
      />
    </div>
  );
};

export const PointsLegend = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapLegend
        variant="points"
        points={[
          { color: '#1B817A', label: 'Exact address' },
          { color: '#EDBE96', label: 'No exact address' }
        ]}
      />
    </div>
  );
};

export const WithActions = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <MapLegend
        {...getCommonProps()}
        {...withActionsProps()}
        variant="range"
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
        onChangeAction={action('action')}
        actions={[
          {
            label: 'Sale',
            value: 'sale'
          },
          {
            label: 'Rent',
            value: 'rent'
          }
        ]}
      />
    </div>
  );
};
