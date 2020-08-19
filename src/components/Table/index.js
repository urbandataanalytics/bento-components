import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import 'ag-grid-community/dist/styles/ag-grid.css';
import TableSkeleton from './TableSkeleton';

const StyledContainer = styled.div`
  .ag-cell-value,
  .ag-react-container {
    width: 100%;
    height: 100%;
  }

  .ag-header-cell {
    background-color: ${({ theme }) => theme.color.charcoal300};
  }

  .ag-row {
    ${({ theme, striped }) =>
      striped ? `border-bottom: 1px solid ${theme.color.charcoal300};` : ''}
  }

  ${({ theme }) => theme.texts.p2};
`;

const sizeVariants = {
  small: 28,
  medium: 63
};

const Table = ({
  loading,
  height,
  columns = [],
  rows,
  cellRenderers = {},
  variant,
  striped,
  ...other
}) => {
  const columnDefs = columns.map(column => {
    if (column.hasOwnProperty('cellRenderer')) {
      return column;
    }
    return { ...column, cellRenderer: 'defaultCellRenderer' };
  });

  return loading ? (
    <TableSkeleton />
  ) : (
    <StyledContainer striped={striped}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rows}
        headerHeight={40}
        rowHeight={sizeVariants[variant]}
        enableCellTextSelection={true}
        frameworkComponents={{
          agColumnHeader: TableHeader,
          defaultCellRenderer: TableCell,
          ...cellRenderers
        }}
        {...other}
      ></AgGridReact>
    </StyledContainer>
  );
};

Table.defaultProps = {
  height: '100vh',
  variant: 'medium',
  striped: true
};

export default Table;
