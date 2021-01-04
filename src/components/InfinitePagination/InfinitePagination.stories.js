import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import InfinitePagination from './index';

export default {
  title: 'InfinitePagination',
  component: InfinitePagination
};

export const Playground = () => {
  const getCommonProps = () => {
    return {
      currentCount: number('Current Count', 25),
      label: text('Label', 'Page'),
      totalCount: number('Total Count', 100)
    };
  };
  return <InfinitePagination {...getCommonProps()} />;
};
