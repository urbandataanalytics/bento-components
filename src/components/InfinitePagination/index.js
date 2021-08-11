import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import hexToRgba from '../../utils/hexToRgba';

const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${({ right }) => (!isNaN(right) ? right : 41)}px;
  bottom: ${({ bottom }) => (!isNaN(bottom) ? bottom : 33)}px;
  background: ${({ theme }) => hexToRgba(theme.color.charcoal800, 0.9)};
  padding: 6px 8px 6px 8px;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
`;
StyledPaginationContainer.defaultProps = {
  theme: defaultTheme
};

const StyledPaginationLabel = styled.div`
  ${({ theme }) => theme.texts.p2};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.white};
`;
StyledPaginationLabel.defaultProps = {
  theme: defaultTheme
};

const StyledPaginationProgress = styled.div`
  width: 200px;
  height: 2px;
  border-radius: 1px;
  background: ${({ theme }) => theme.color.charcoal600};

  span {
    background: ${({ theme }) => theme.color.white};
    height: 2px;
    border-radius: 1px;
    display: block;
    transition: ${({ theme }) => theme.global.transitionM};
  }
`;
StyledPaginationProgress.defaultProps = {
  theme: defaultTheme
};

const InfinitePagination = ({
  label,
  totalCount,
  currentCount,
  topOffset,
  rightOffset,
  bottomOffset,
  leftOffset
}) => {
  return (
    <StyledPaginationContainer
      top={topOffset}
      right={rightOffset}
      bottom={bottomOffset}
      left={leftOffset}
    >
      <StyledPaginationLabel>{label}</StyledPaginationLabel>
      <StyledPaginationProgress>
        <span style={{ width: `${Math.round((currentCount / totalCount) * 100)}%` }}></span>
      </StyledPaginationProgress>
    </StyledPaginationContainer>
  );
};

InfinitePagination.propTypes = {
  currentCount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired
};

export default InfinitePagination;
