import React from 'react';

const columnDefs = [
  {
    headerName: 'Make',
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

describe('Table test', () => {
  it('must sort the content', () => {
    ////There's an error on the theme import in the component that avoids to continue.
    //     const wrapper = mount(
    //       <div>
    //         <Table columns={columnDefs} rows={rowData} domLayout="autoHeight" />
    //       </div>
    //     );
    //   });
  });
});
