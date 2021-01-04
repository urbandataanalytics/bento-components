import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import Grid from './index';

export default {
  title: 'Grid',
  component: Grid
};

export const Playground = () => {
  const getCommonProps = () => {
    return {
      columns: text('Columns', 'repeat(3, 1fr)'),
      gap: text('Gap', '20px'),
      numberOfChildren: number('Number Of Children', 4)
    };
  };

  const containerStyle = {
    padding: '2rem'
  };

  const elementStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '3rem 0',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 8px 16px rgba(54, 60, 75, 0.1)'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Grid {...getCommonProps()}>
        {elements.map((e, i) => (
          <div key={i} style={elementStyle}>
            {i + 1}
          </div>
        ))}
      </Grid>
    </div>
  );
};
