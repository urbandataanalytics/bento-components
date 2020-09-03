import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';

const StyledSkeleton = styled.div`
  > div {
    padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};
    i {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  align-items: center;
  &:first-child > i {
    margin: 0;
  }
  > div {
    display: block;
    width: 100%;
  }
`;

const StyledSegment = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
`;

const StyledContent = styled.div`
  background-color: ${({ theme }) => theme.color.charcoal400};
  min-height: 440px;
  animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
`;
const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  list-style: none;
`;
const CardSkeleton = React.forwardRef(() => (
  <StyledSkeleton>
    <StyledHeader>
      <Skeleton variant="circular" width="40px" />
      <div>
        <Skeleton variant="rounded" />
        <Skeleton variant="rounded" />
      </div>
    </StyledHeader>
    <StyledSummary>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
    </StyledSummary>
    <StyledSegment>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
      <div>
        <Skeleton width="60%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
        <Skeleton width="100%" variant="rounded" />
      </div>
    </StyledSegment>
    <StyledContent />
  </StyledSkeleton>
));

CardSkeleton.displayName = 'CardSkeleton';

export default CardSkeleton;
