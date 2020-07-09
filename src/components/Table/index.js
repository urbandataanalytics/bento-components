import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableCell from './TableCell';

import 'ag-grid-community/dist/styles/ag-grid.css';

const StyledContainer = styled.div`
  height: ${({ height }) => height};

  .ag-cell-value,
  .ag-react-container {
    width: 100%;
    height: 100%;
  }

  .ag-header-cell {
    background-color: ${({ theme }) => theme.color.charcoal300};
  }

  .ag-row {
    border-bottom: 1px solid ${({ theme }) => theme.color.charcoal300};
  }

  ${({ theme }) => theme.texts.p2};
`;

const Table = ({ height, columns, rows, cellRenderers = {} }) => {
  const columnDefs = columns.map(column => {
    if (column.hasOwnProperty('cellRenderer')) {
      return column;
    }
    return { ...column, cellRenderer: 'defaultCellRenderer' };
  });

  return (
    <StyledContainer height={height}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rows}
        headerHeight={40}
        rowHeight={63}
        enableCellTextSelection={true}
        frameworkComponents={{
          agColumnHeader: TableHeader,
          defaultCellRenderer: TableCell,
          ...cellRenderers
        }}
      ></AgGridReact>
    </StyledContainer>
  );
};

Table.defaultProps = {
  height: '100vh'
};

export default Table;
