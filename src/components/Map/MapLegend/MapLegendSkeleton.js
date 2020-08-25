import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';

const Style = styled.div`
  min-height: 78px;
  > * {
    &:nth-child(1) {
      margin-bottom: 10px;
    }
    &:nth-child(3) {
      margin-top: 18px;
    }
  }
`;

const StyledMinMax = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

const MapLegendSkeleton = () => {
  return (
    <Style>
      <Skeleton height="15px" width="50%" />
      <Skeleton height="8px" width="30%" />
      <Skeleton height="10px" width="100%" />
      <StyledMinMax>
        <Skeleton height="8px" width="50px" />
        <Skeleton height="8px" width="50px" />
      </StyledMinMax>
    </Style>
  );
};

export default MapLegendSkeleton;
