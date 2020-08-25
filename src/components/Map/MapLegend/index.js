import * as React from 'react';
import styled from 'styled-components';
import { forwardRef } from 'react';
import MapLegendSkeleton from './MapLegendSkeleton';

const StyledContainer = styled.div`
  position: absolute;

  left: ${({ theme, offsetLeft }) =>
    offsetLeft ? `calc(${theme.spacings.small3} + ${offsetLeft})` : theme.spacings.small3};
  bottom: ${({ theme, offsetBottom }) =>
    offsetBottom ? `calc(${theme.spacings.small3} + ${offsetBottom})` : theme.spacings.small3};

  width: 270px;
  transition: left 0.3s ease-in-out;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.charcoal200};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  padding: ${({ theme }) => theme.spacings.small3};
`;

const StyledTitle = styled.header`
  ${({ theme }) => theme.texts.p1b};
  color: ${({ theme }) => theme.color.charcoal800};
`;

const StyledDescription = styled.div`
  ${({ theme }) => theme.texts.p3b};
  color: ${({ theme }) => theme.color.charcoal500};
`;

const StyledRangeColors = styled.div`
  display: flex;
  margin-top: 15px;
`;

const StyledColor = styled.i`
  background: ${({ color }) => color};
  height: 8px;
  flex: 1;
`;

const StyledMinMaxText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  span {
    ${({ theme }) => theme.texts.p3b};
    color: ${({ theme }) => theme.color.charcoal600};
  }
`;

const MapLegend = forwardRef((props, ref) => {
  const {
    title,
    isLoading,
    description,
    rangeColors,
    rangeTextMin,
    rangeTextMax,
    offsetLeft,
    offsetBottom,
    offsetTop,
    offsetRight
  } = props;

  return (
    <StyledContainer
      offsetTop={offsetTop}
      offsetRight={offsetRight}
      offsetBottom={offsetBottom}
      offsetLeft={offsetLeft}
    >
      {isLoading ? (
        <MapLegendSkeleton />
      ) : (
        <>
          {title && <StyledTitle>{title}</StyledTitle>}
          {description && <StyledDescription>{description}</StyledDescription>}
          <StyledRangeColors>
            {rangeColors.map((color, i) => (
              <StyledColor color={color} key={i} />
            ))}
          </StyledRangeColors>
          <StyledMinMaxText>
            <span>{rangeTextMin}</span>
            <span>{rangeTextMax}</span>
          </StyledMinMaxText>
        </>
      )}
    </StyledContainer>
  );
});

MapLegend.defaultProps = {
  rangeColors: [
    '#03045E',
    '#ADE8F4',
    '#90D8EF',
    '#48B5E4',
    '#008BC7',
    '#0077B6',
    '#023E8A',
    '#03045E'
  ],
  rangeTextMin: 'Min',
  rangeTextMax: 'Max'
};

export default MapLegend;
