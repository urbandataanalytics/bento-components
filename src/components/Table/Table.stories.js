import React from 'react';
import Table from './index';

export default {
  title: 'Table',
  component: Table
};

const decoratorStyles = {
  padding: '2rem'
};

export const Normal = () => (
  <div style={decoratorStyles}>
    <Table />
  </div>
);
