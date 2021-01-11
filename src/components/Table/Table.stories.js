import React from 'react';
import Table from './index';
import IconGlobal from '../../icons/Global/index';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Table',
  component: Table
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = () => {
  const columnDefs = [
    {
      headerName: (
        <>
          <IconGlobal />
          Make
        </>
      ),
      field: 'make',
      sortable: true,
      align: 'left',
      variant: 'primary'
    },
    {
      headerName: 'Model',
      align: 'center',
      field: 'model',
      sortable: true,
      highlight: true,
      variant: 'primary'
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      align: 'right',
      variant: 'secondary'
    }
  ];
  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Fiesta', price: 32000 },
    { make: 'Porsche', model: '911', price: 72000 },
    { make: 'Mitsubishi', model: 'Pajero', price: 22000 }
  ];
  return (
    <div style={decoratorStyles}>
      <Table
        columns={columnDefs}
        striped={boolean('Striped', true)}
        rows={rowData}
        loading={boolean('loading', false)}
        variant={select('Variant', ['small', 'medium'], 'medium')}
        domLayout="autoHeight"
      />
    </div>
  );
};

export const Loading = () => {
  const columnDefs = [
    {
      headerName: 'one',
      field: 'make',
      sortable: true,
      align: 'left',
      variant: 'primary'
    }
  ];
  const rowData = [{ make: 'test' }];
  return (
    <div style={decoratorStyles}>
      <Table columns={columnDefs} rows={rowData} loading={true} domLayout="autoHeight" />
    </div>
  );
};
