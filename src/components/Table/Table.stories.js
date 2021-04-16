import React from 'react';
import Table from './index';
import IconGlobal from '../../icons/Global/index';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    height: {
      description: 'Height value for the table',
      table: {
        category: 'format'
      }
    },
    rows: {
      description:
        'Expects the array with the data for the table, each element will be a row, and the row should contain the same props as the columns headers',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    columns: {
      description: 'Expects an array of objects with the definition of the columns for the table',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    loading: {
      description: 'Shows skeleton version of the table',
      table: {
        category: 'behaviour'
      }
    },
    variant: {
      description: 'Changes the styling of the table',
      table: {
        category: 'format'
      }
    },
    striped: {
      description: 'Shows line of division between rows',
      table: {
        category: 'format'
      }
    },
    domLayout: {
      description: "set as 'autoHeight' in order to make the table's height adjust to fit the rows",
      table: {
        category: 'others'
      }
    }
  },
  args: {
    loading: false,
    variant: 'medium',
    domLayout: 'autoHeight'
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = ({ columns, rows, ...args }) => {
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
      <Table columns={columnDefs} rows={rowData} {...args} />
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
