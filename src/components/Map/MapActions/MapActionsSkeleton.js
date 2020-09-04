import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
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
