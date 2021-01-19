import React from 'react';
import Grid from './index';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    children: {
      description: 'Children for the grid. It will generate as much rows as children received.',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'Adds class for this element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    columns: {
      description: 'Define columns in CSS Grid syntax                                  ',
      table: {
        category: 'format'
      }
    },
    gap: {
      description: 'Define gap size in CSS units',
      table: {
        category: 'format'
      }
    },
    numberOfChildren: {
      name: 'Number of Children to Test',
      control: 'number',
      table: {
        category: 'testing data'
      }
    }
  },
  args: {
    columns: 'repeat(3, 1fr)',
    gap: '20px'
  }
};

export const Playground = ({ numberOfChildren, ...args }) => {
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

  const elements = Array.apply(null, Array(numberOfChildren));

  return (
    <div style={containerStyle}>
      <Grid {...args}>
        {elements.map((e, i) => (
          <div key={i} style={elementStyle}>
            {i + 1}
          </div>
        ))}
      </Grid>
    </div>
  );
};

Playground.args = {
  numberOfChildren: 4
};
