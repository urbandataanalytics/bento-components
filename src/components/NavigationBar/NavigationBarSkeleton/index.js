import React from 'react';
import styled from 'styled-components';

const StyledSkeleton = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal300};
  em {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.color.charcoal400};
    animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
    border-radius: 50%;
    display: block;
  }

  span {
    width: 62px;
    height: 8px;
    background-color: ${({ theme }) => theme.color.charcoal400};
    animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
    border-radius: 2px;
    display: block;
    margin-right: 24px;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  > div:first-child {
    height: ${({ theme }) => theme.components.navigationMaxHeight};
    width: 64px;
    background-color: ${({ theme }) => theme.color.charcoal400};
    animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    margin-left: 14px;
    > em {
      margin-right: 8px;
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;

  > div:first-child {
    display: flex;
    align-items: center;
    margin-left: 14px;
  }

  > i {
    color: ${({ theme }) => theme.color.charcoal400};
    margin-right: 24px;
  }

  > em {
    margin-right: 36px;
  }

  > div:last-child {
    display: flex;
    align-items: center;

    > em {
      width: 36px;
      height: 36px;
      margin-right: 12px;
    }

    > span {
      width: 109px;
      margin-right: 64px;
    }
  }
`;

const CardSkeleton = React.forwardRef(() => (
  <StyledSkeleton>
    <StyledLeft>
      <div></div>
      <div>
        <em></em>
        <span></span>
      </div>
    </StyledLeft>
    <StyledRight>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <i>|</i>
      <em></em>
      <div>
        <em></em>
        <span></span>
      </div>
    </StyledRight>
  </StyledSkeleton>
));

CardSkeleton.displayName = 'CardSkeleton';

export default CardSkeleton;
