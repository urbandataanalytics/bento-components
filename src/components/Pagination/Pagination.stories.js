import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import Pagination from './index';

export default {
  title: 'Pagination',
  component: Pagination
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = () => {
  const totalCountNum = number('Total Items', 150);
  const currentCountNum = number('Current Items', 32);

  return (
    <div style={decoratorStyles}>
      <Pagination
        totalCount={totalCountNum}
        currentCount={currentCountNum}
        label={`You’ve viewed ${currentCountNum} of ${totalCountNum} assets`}
        moreLabel={text('Button Label', 'Load More')}
        isLoading={boolean('Is Loading', false)}
        onLoadMore={action('load more')}
      />
    </div>
  );
};
