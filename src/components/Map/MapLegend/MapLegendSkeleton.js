import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.small3};

  > * {
    &:nth-child(1) {
      margin-bottom: 10px;
    }
    &:nth-child(3) {
      margin-top: 12px;
    }
  }
`;

const Style = styled.div`
  min-height: 78px;
`;

const StyledMinMax = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

const StyledActions = styled.div`
  display: flex;
`;

const StyledAction = styled.span`
  flex: 1;
  cursor: pointer;
  box-sizing: border-box;
  padding: 6px 0;
  text-align: center;
  ${({ theme }) => theme.texts.p2b};
  color: ${({ theme }) => theme.color.charcoal500};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal200};
  > * {
    display: inline-block;
  }
`;
const MapLegendSkeleton = ({ actions, hasDescription }) => {
  return (
    <Style>
      <StyledContainer>
        <Skeleton height="15px" width="50%" />
        {hasDescription && <Skeleton height="8px" width="30%" />}
        <Skeleton height="10px" width="100%" />
        <StyledMinMax>
          <Skeleton height="8px" width="50px" />
          <Skeleton height="8px" width="50px" />
        </StyledMinMax>
      </StyledContainer>
      {actions ? (
        <StyledActions>
          {[...Array(actions)].map((e, i) => (
            <StyledAction key={i}>
              <Skeleton height="10px" width="20px" />
            </StyledAction>
          ))}
        </StyledActions>
      ) : null}
    </Style>
  );
};

export default MapLegendSkeleton;
