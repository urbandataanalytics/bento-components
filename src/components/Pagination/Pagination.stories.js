import React from 'react';
import Pagination from './index';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    currentCount: {
      description: 'Number of items currently viewed should be <= `totalCount`',
      table: {
        category: 'content'
      }
    },
    isLoading: {
      description: 'Shows loading icon on the button',
      table: {
        category: 'behaviour'
      }
    },
    label: {
      description: ' Text over the progress bar',
      table: {
        category: 'content'
      }
    },
    moreLabel: {
      description: 'Text on the button',
      table: {
        category: 'content'
      }
    },
    onLoadMore: {
      description: 'Handles behaviour when button is clicked. Usually to load more items',
      action: 'onLoadMore event',
      table: {
        category: 'events'
      }
    },
    totalCount: {
      description: 'Total number to be shown and over which to calculate the progress',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    currentCount: 32,
    totalCount: 150,
    moreLabel: 'Load More',
    isLoading: false
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = ({ label, currentCount, totalCount, ...args }) => {
  const labelContent = label ? label : `You’ve viewed ${currentCount} of ${totalCount} assets`;

  return (
    <div style={decoratorStyles}>
      <Pagination label={labelContent} {...args} />
    </div>
  );
};
