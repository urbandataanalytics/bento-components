import React from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton/index';

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const SliderSkeleton = ({ variant }) => {
  return (
    <div>
      <Skeleton height="10px" width="100%" />
      {variant === 'range' && (
        <MinMaxContainer>
          <Skeleton height="14px" width="80px" />
          <Skeleton height="14px" width="80px" />
        </MinMaxContainer>
      )}
    </div>
  );
};

export default SliderSkeleton;
