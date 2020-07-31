import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import Button from '../Button';

const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
StyledPaginationContainer.defaultProps = {
  theme: defaultTheme
};

const StyledPaginationLabel = styled.div`
  ${props => props.theme.texts.p2};
  margin-bottom: ${props => props.theme.components.paginationLabelMarginBottom};
  color: ${props => props.theme.components.paginationLabelColor};
`;
StyledPaginationLabel.defaultProps = {
  theme: defaultTheme
};

const StyledPaginationProgress = styled.div`
  width: 200px;
  height: 2px;
  border-radius: 1px;
  background: ${props => props.theme.components.paginationProgressBackgroundColor};
  margin-bottom: ${props => props.theme.components.paginationProgressMarginBottom};

  span {
    background: ${props => props.theme.components.paginationProgressActiveBackgroundColor};
    height: 2px;
    border-radius: 1px;
    display: block;
    transition: ${props => props.theme.global.transitionM};
  }
`;
StyledPaginationProgress.defaultProps = {
  theme: defaultTheme
};

const Pagination = ({ label, moreLabel, totalCount, currentCount, onLoadMore }) => {
  return (
    <StyledPaginationContainer>
      <StyledPaginationLabel>{label}</StyledPaginationLabel>
      <StyledPaginationProgress>
        <span style={{ width: `${Math.round((currentCount / totalCount) * 100)}%` }}></span>
      </StyledPaginationProgress>
      <Button
        variant="secondary"
        size="large"
        onClick={onLoadMore}
        disabled={currentCount === totalCount}
      >
        {moreLabel}
      </Button>
    </StyledPaginationContainer>
  );
};

Pagination.propTypes = {
  label: PropTypes.string,
  moreLabel: PropTypes.string,
  totalCount: PropTypes.number,
  currentCount: PropTypes.number,
  onLoadMore: PropTypes.func
};

export default Pagination;
