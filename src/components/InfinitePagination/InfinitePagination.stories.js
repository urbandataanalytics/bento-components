import React from 'react';
import InfinitePagination from './index';

export default {
  title: 'InfinitePagination',
  component: InfinitePagination,
  argTypes: {
    currentCount: {
      description:
        'Value of the current number displayed in order to calculature the progress in relation with the total',
      table: {
        category: 'content'
      }
    },
    label: {
      description: 'Text of the label above the progress bar',
      table: {
        category: 'content'
      }
    },
    totalCount: {
      description: 'Value of total items of pagination',
      table: {
        category: 'content'
      }
    }
  },

  args: {
    currentCount: 25,
    label: 'Page',
    totalCount: 100
  }
};

export const Playground = args => {
  return <InfinitePagination {...args} />;
};
