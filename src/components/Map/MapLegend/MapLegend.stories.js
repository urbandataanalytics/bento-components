import React from 'react';
import MapLegend from './index';

export default {
  title: 'MapLegend',
  component: MapLegend,
  argTypes: {
    actions: {
      description: 'Expects an Array of `Action`.',
      table: {
        category: 'content'
      }
    },
    activeAction: {
      description: 'Name of the action to be set as active by default',
      table: {
        category: 'content'
      }
    },
    title: {
      description:
        'Title of the legend, placed at the top of the component and on top of `description`',
      table: {
        category: 'content'
      }
    },
    description: {
      description: 'Brief description of the legend pourpuse, to be shown below the `title`',
      table: {
        category: 'content'
      }
    },
    rangeTextMin: {
      description: 'Label to be shown as the maximum range at the right of the scale',
      table: {
        category: 'format'
      }
    },
    rangeTextMax: {
      description: 'Label to be shown as the maximum range at the right of the scale',
      table: {
        category: 'format'
      }
    },
    isLoading: {
      description: 'Shows a skeleton to show the loading status',
      table: {
        category: 'behaviour'
      }
    },
    offsetLeft: {
      description: 'Sets a gap of defined size on the left of the component',
      table: {
        category: 'format'
      }
    },
    offsetBottom: {
      description: 'Sets a gap of defined size on the bottom of the component',
      table: {
        category: 'format'
      }
    },
    variant: {
      description: 'Allows to choose between different variants of legend',
      table: {
        category: 'format'
      }
    },
    rangeColors: {
      description: 'Array of colors to be used in the scale',
      table: {
        category: 'format'
      }
    },
    points: {
      description: 'Array of points to be listed in the legend.',
      table: {
        category: ''
      }
    }
  },
  args: {
    title: 'Legend',
    description: 'Lorem ipsum',
    rangeTextMin: 'Minium',
    rangeTextMax: 'Max',
    isLoading: false,
    offsetLeft: '0px',
    offsetBottom: '0px'
  }
};

const containerStyle = {
  padding: '2rem'
};

export const Playground = args => {
  return (
    <div style={containerStyle}>
      <MapLegend {...args} />
    </div>
  );
};

Playground.args = {
  variant: 'range',
  rangeColors: [
    '#03045E',
    '#ADE8F4',
    '#90D8EF',
    '#48B5E4',
    '#008BC7',
    '#0077B6',
    '#023E8A',
    '#03045E'
  ]
};

export const WithPoints = args => {
  return (
    <div style={containerStyle}>
      <MapLegend {...args} />
    </div>
  );
};

WithPoints.args = {
  variant: 'points',
  points: [
    { color: '#1B817A', label: 'Exact address' },
    { color: '#EDBE96', label: 'No exact address' }
  ]
};

export const WithActions = args => {
  return (
    <div style={containerStyle}>
      <MapLegend {...args} />
    </div>
  );
};

WithActions.args = {
  actions: [
    {
      label: 'Sale',
      value: 'sale'
    },
    {
      label: 'Rent',
      value: 'rent'
    }
  ]
};

export const Loading = args => {
  return (
    <div style={containerStyle}>
      <MapLegend {...args} />
    </div>
  );
};

Loading.args = {
  isLoading: true,
  actions: [
    {
      label: 'Sale',
      value: 'sale'
    },
    {
      label: 'Rent',
      value: 'rent'
    }
  ]
};
