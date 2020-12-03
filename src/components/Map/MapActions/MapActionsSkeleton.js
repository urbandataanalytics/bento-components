import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal300};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  padding: ${({ theme }) => theme.spacings.small2} ${({ theme }) => theme.spacings.small3};
`;

const MapLegendSkeleton = () => {
  return (
    <Style>
      <Skeleton height="14px" width="75px" />
      <Skeleton height="14px" width="75px" />
      <Skeleton height="14px" width="75px" />
    </Style>
  );
};

export default MapLegendSkeleton;
