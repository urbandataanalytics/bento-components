import React, { useState } from 'react';
import styled from 'styled-components';
import { forwardRef } from 'react';
import MapActionsSkeleton from './MapActionsSkeleton';
import IconArrowDoubleRight from '../../../icons/ArrowDoubleRight/index';
import IconArrowDoubleLeft from '../../../icons/ArrowDoubleLeft/index';
import useTheme from '../../../hooks/useTheme/index';

const StyledContainer = styled.div`
  position: absolute;
  right: ${({ theme, offsetRight }) =>
    offsetRight ? `calc(${theme.spacings.small3} + ${offsetRight})` : theme.spacings.small3};
  bottom: ${({ theme, offsetBottom }) =>
    offsetBottom ? `calc(${theme.spacings.small3} + ${offsetBottom})` : theme.spacings.small3};
  overflow: hidden;
`;

const StyledContent = styled.div`
  transition: left 0.3s ease-in-out;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal300};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  padding: ${({ theme }) => theme.spacings.small2} ${({ theme }) => theme.spacings.small3};
  transform: translateX(${({ showActions }) => (showActions ? '0' : '100%')});
  transition: ${({ theme }) => theme.global.transitionM};
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  white-space: nowrap;
  text-align: right;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal300};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  margin-bottom: ${({ theme }) => theme.spacings.small1};
  position: relative;
  z-index: 1;
  width: 32px;
  height: 32px;
  box-sizing: initial;
`;

const MapActions = forwardRef((props, ref) => {
  const [showActions, setShowActions] = useState(true);
  const { isLoading, offsetBottom, offsetRight, children, ...other } = props;
  const theme = useTheme();

  console.log('showActions', showActions);
  return (
    <StyledContainer offsetRight={offsetRight} offsetBottom={offsetBottom} {...other}>
      {isLoading ? (
        <MapActionsSkeleton />
      ) : (
        <StyledWrapper>
          <StyledButton onClick={() => setShowActions(!showActions)}>
            {showActions ? (
              <IconArrowDoubleRight customColor={theme.color.charcoal600} />
            ) : (
              <IconArrowDoubleLeft customColor={theme.color.charcoal600} />
            )}
          </StyledButton>
          <StyledContent showActions={showActions}>{children}</StyledContent>
        </StyledWrapper>
      )}
    </StyledContainer>
  );
});

MapActions.defaultProps = {};

export default MapActions;
