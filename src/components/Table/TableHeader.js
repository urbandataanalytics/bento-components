import React, { useState, useEffect } from 'react';
import IconOrderAsc from '../../icons/OrderAsc';
import IconOrderDesc from '../../icons/OrderDesc';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme/index';

const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.small3};

  ${({ isHighlighted, theme }) => isHighlighted && `background-color:#E6E9EF`};

  ${({ align }) =>
    align === 'right' && 'justify-content: flex-start; flex-direction: row-reverse;'};
`;

const StyledLabel = styled.h5`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.charcoal600};
  transition: ${({ theme }) => theme.global.transitionM};
  display: flex;
  align-items: center;

  &.active {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledIcon = styled.div`
  margin: 0 ${({ theme }) => theme.spacings.small2};
`;

const TableHeader = ({ column, enableSorting, displayName, setSort }) => {
  const [sortDirection, setSortDirection] = useState();
  const align = column.colDef.aligned;
  const isHighlighted = column.colDef.highlight;

  const theme = useTheme();

  const onSortChanged = () => {
    if (column.isSortAscending()) {
      setSortDirection('asc');
    } else if (column.isSortDescending()) {
      setSortDirection('desc');
    } else if (!column.isSortAscending() && !column.isSortDescending()) {
      setSortDirection(null);
    }
  };

  const onSortRequested = (order, event) => {
    setSort(order, event.shiftKey);
  };

  const toggleSort = event => {
    const order = sortDirection === 'asc' ? 'desc' : 'asc';
    onSortRequested(order, event);
  };

  useEffect(() => {
    onSortChanged();

    column.addEventListener('sortChanged', onSortChanged);

    return () => {
      column.removeEventListener('sortChanged', onSortChanged);
    };
  }, []);

  return (
    <StyledHeader
      onClick={event => enableSorting && toggleSort(event)}
      onTouchEnd={event => enableSorting && toggleSort(event)}
      align={align}
      isHighlighted={isHighlighted}
    >
      <StyledLabel className={sortDirection ? 'active' : null}>{displayName}</StyledLabel>

      {sortDirection === 'asc' && (
        <StyledIcon>
          <IconOrderAsc size="small" customColor={theme.color.primary500} />
        </StyledIcon>
      )}
      {sortDirection === 'desc' && (
        <StyledIcon>
          <IconOrderDesc size="small" customColor={theme.color.primary500} />
        </StyledIcon>
      )}
    </StyledHeader>
  );
};

export default TableHeader;
