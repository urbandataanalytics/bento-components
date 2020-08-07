import React, { useState, useEffect } from 'react';
import IconOrderAsc from '../../icons/OrderAsc';
import IconOrderDesc from '../../icons/OrderDesc';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme/index';

const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacings.small3};
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start'};

  ${({ highlight, theme }) =>
    highlight && `background-color:${theme.components.tableHighlightedHeaderBackgroundColor};`};
`;

const StyledLabel = styled.h5`
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.charcoal600};
  transition: ${({ theme }) => theme.global.transitionM};

  &.active {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledSort = styled.div`
  margin-left: ${({ theme }) => theme.spacings.small1};
`;

const TableHeader = ({ column, enableSorting, displayName, setSort }) => {
  const [sortDirection, setSortDirection] = useState();
  const { align, highlight, icon } = column.colDef;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHeader
      onClick={event => enableSorting && toggleSort(event)}
      onTouchEnd={event => enableSorting && toggleSort(event)}
      align={align}
      highlight={highlight}
    >
      {icon}
      <StyledLabel className={sortDirection ? 'active' : null}>{displayName}</StyledLabel>

      {sortDirection && (
        <StyledSort>
          {sortDirection === 'asc' ? (
            <IconOrderAsc size="small" customColor={theme.color.primary500} />
          ) : (
            <IconOrderDesc size="small" customColor={theme.color.primary500} />
          )}
        </StyledSort>
      )}
    </StyledHeader>
  );
};

export default TableHeader;
