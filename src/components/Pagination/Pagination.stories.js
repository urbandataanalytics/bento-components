import React from 'react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import Pagination from './index';

export default {
  title: 'Pagination',
  component: Pagination
};

const getCommonProps = () => {
  const totalCount = number('Total Items', 150);
  const currentCount = number('Current Items', 32);

  return {
    totalCount,
    currentCount,
    label: `You’ve viewed ${currentCount} of ${totalCount} assets`,
    moreLabel: 'Load more',
    onLoadMore: action('load more')
  };
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <Pagination {...getCommonProps()} isLoading={false} />
  </div>
);

export const Loading = () => (
  <div style={decoratorStyles}>
    <Pagination {...getCommonProps()} isLoading={true} />
  </div>
);
