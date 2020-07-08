import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.small3};
  color: ${({ variant, theme }) =>
    variant === 'secondary' ? theme.color.charcoal600 : theme.color.charcoal800};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.components.tableHighlightedCellBackgroundColor : 'white'};
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start'};
`;

const TableCell = ({ value, colDef }) => {
  const { variant, align, highlight } = colDef;
  return (
    <StyledContent variant={variant} align={align} highlight={highlight}>
      {value}
    </StyledContent>
  );
};

export default TableCell;
