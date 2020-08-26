import * as React from 'react';
import styled from 'styled-components';
import { forwardRef } from 'react';
import MapActionsSkeleton from './MapActionsSkeleton';

const StyledContainer = styled.div`
  position: absolute;

  right: ${({ theme, offsetRight }) =>
    offsetRight ? `calc(${theme.spacings.small3} + ${offsetRight})` : theme.spacings.small3};
  bottom: ${({ theme, offsetBottom }) =>
    offsetBottom ? `calc(${theme.spacings.small3} + ${offsetBottom})` : theme.spacings.small3};

  transition: left 0.3s ease-in-out;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal200};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  padding: 12px;
`;

const MapActions = forwardRef((props, ref) => {
  const { isLoading, offsetBottom, offsetRight, children, ...other } = props;

  return (
    <StyledContainer offsetRight={offsetRight} offsetBottom={offsetBottom} {...other}>
      {isLoading ? <MapActionsSkeleton /> : children}
    </StyledContainer>
  );
});

MapActions.defaultProps = {};

export default MapActions;
