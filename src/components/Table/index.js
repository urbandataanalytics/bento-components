import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import styled from 'styled-components';
import TableHeader from './TableHeader';

import 'ag-grid-community/dist/styles/ag-grid.css';
import IconGlobal from '../../icons/Global/index';

const StyledContainer = styled.div`
  height: ${({ height }) => height};

  .ag-header-cell {
    background-color: ${({ theme }) => theme.color.charcoal300};

    .ag-react-container {
      width: 100%;
      height: 100%;
    }
  }

  .ag-row {
    border-bottom: 1px solid ${({ theme }) => theme.color.charcoal300};
  }

  ${({ theme }) => theme.texts.p2};
`;

const Table = ({ height, columns, data }) => {
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
      aligned: 'left',
      highlight: true
    },
    { headerName: 'Model', field: 'model', sortable: true, aligned: 'left', highlight: false },
    { headerName: 'Price', field: 'price', sortable: true, aligned: 'right', highlight: true }
  ];
  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Fiesta', price: 32000 },
    { make: 'Porsche', model: '911', price: 72000 },
    { make: 'Mitsubishi', model: 'Pajero', price: 22000 }
  ];

  return (
    <StyledContainer height={height}>
      <AgGridReact
        columnDefs={columnDefs}
        headerHeight={40}
        rowHeight={66}
        rowData={rowData}
        frameworkComponents={{ agColumnHeader: TableHeader }}
      ></AgGridReact>
    </StyledContainer>
  );
};

Table.defaultProps = {
  height: '100vh'
};

export default Table;
