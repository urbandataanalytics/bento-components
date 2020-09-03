import React from 'react';
import Table from './index';
import IconGlobal from '../../icons/Global/index';

export default {
  title: 'Table',
  component: Table
};

const decoratorStyles = {
  padding: '2rem'
};

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

export const Normal = () => (
  <div style={decoratorStyles}>
    <Table columns={columnDefs} rows={rowData} domLayout="autoHeight" />
  </div>
);

export const Loading = () => (
  <div style={decoratorStyles}>
    <Table columns={columnDefs} rows={rowData} loading />
  </div>
);

export const Small = () => (
  <div style={decoratorStyles}>
    <Table
      columns={columnDefs}
      rows={rowData}
      variant="small"
      striped={false}
      domLayout="autoHeight"
    />
  </div>
);
