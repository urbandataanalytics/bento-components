import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  align-items: center;

  > em {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.color.charcoal400};
    animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
    border-radius: 50%;
    display: block;
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

const StyledSkeleton = styled.div`
  > div {
    padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};

    i,
    span {
      width: 30%;
      height: 10px;
      background-color: ${({ theme }) => theme.color.charcoal400};
      animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
      border-radius: 2px;
      display: block;
      margin-bottom: 10px;
    }

    span {
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  list-style: none;

  > div i {
    width: 60%;
  }
`;
const CardSkeleton = React.forwardRef(() => (
  <StyledSkeleton>
    <StyledHeader>
      <em></em>
      <div>
        <span></span>
        <span></span>
      </div>
    </StyledHeader>
    <StyledSummary>
      <div>
        <i></i>
        <span></span>
      </div>
      <div>
        <i></i>
        <span></span>
      </div>
      <div>
        <i></i>
        <span></span>
      </div>
      <div>
        <i></i>
        <span></span>
      </div>
    </StyledSummary>
    <StyledSegment>
      <div>
        <i></i>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <i></i>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledSegment>
    <StyledContent />
  </StyledSkeleton>
));

CardSkeleton.displayName = 'CardSkeleton';

export default CardSkeleton;
