import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton';

const StyledSkeleton = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    vertical-align: top;
  }

  thead {
    background-color: ${({ theme }) => theme.color.charcoal200};
    th {
      padding: 15px ${({ theme }) => theme.spacings.small3};
    }
  }

  tbody {
    tr {
      td {
        ${({ striped, theme }) =>
          striped ? `border-bottom: 1px solid ${theme.color.charcoal300}` : null};
        line-height: 0;
        padding: ${({ variant, theme }) => (variant === 'medium' ? '26px' : '9px')}
          ${({ theme }) => theme.spacings.small3};
      }
    }
  }
`;

const StyledSplit = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-gap: 10px;
`;

const TableSkeleton = React.forwardRef(({ rows, columns, striped, variant }, ref) => (
  <StyledSkeleton striped={striped} variant={variant}>
    <thead>
      <tr>
        {[...Array(columns)].map((e, i) => (
          <th key={i}>
            <Skeleton variant="rounded" height="10px" />
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {[...Array(rows)].map((e, i) => (
        <tr key={i}>
          {[...Array(columns)].map((e, k) => (
            <td key={k}>
              {k === 1 || k === 3 ? (
                <StyledSplit>
                  <Skeleton variant="rounded" height="10px" />
                  <Skeleton variant="rounded" height="10px" />
                </StyledSplit>
              ) : (
                <Skeleton variant="rounded" height="10px" key={k} />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledSkeleton>
));

TableSkeleton.defaultProps = {
  rows: 4,
  columns: 4,
  variant: 'medium',
  striped: true
};

TableSkeleton.displayName = 'TableSkeleton';

export default TableSkeleton;
