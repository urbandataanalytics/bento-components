import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import TableStyle from './TableStyle';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import TableSkeleton from './TableSkeleton';
import PropTypes from 'prop-types';

const DEFAULT_MODULES = [ClientSideRowModelModule];

const StyledContainer = styled.div`
  ${TableStyle}

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
  medium: 57
};

const Table = ({
  loading,
  height,
  columns = [],
  rows,
  cellRenderers = {},
  variant,
  striped,
  modules = [],
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
        modules={[...modules, ...DEFAULT_MODULES]}
        frameworkComponents={{
          agColumnHeader: TableHeader,
          defaultCellRenderer: TableCell,
          ...cellRenderers
        }}
        {...other}
      />
    </StyledContainer>
  );
};

Table.defaultProps = {
  height: '100vh',
  variant: 'medium',
  striped: true
};

Table.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      field: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
      highlight: PropTypes.bool,
      variant: PropTypes.oneOf(['primary', 'secondary']),
      cellRenderer: PropTypes.string
    })
  ),
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['small', 'medium']),
  striped: PropTypes.bool
};

export default Table;
