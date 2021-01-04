import * as React from 'react';
import PropTypes from 'prop-types';
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
`;

const StyledWrapper = styled.div`
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

const StylePoints = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPointElement = styled.div`
  width: 100%;
  span:first-child {
    background: ${({ color }) => color};
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 8px;
  }
  span:last-child {
    ${({ theme }) => theme.texts.p2};
    color: ${({ theme }) => theme.color.charcoal600};
    margin-left: 12px;
  }
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

const StyledActions = styled.footer`
  display: flex;
`;

const Action = styled.div`
  flex: 1;
  cursor: pointer;
  box-sizing: border-box;
  padding: 6px 0;
  text-align: center;
  ${({ theme }) => theme.texts.p2b};
  color: ${({ theme, active }) => (active ? theme.color.primary500 : theme.color.charcoal500)};
  background: ${({ theme, active }) => (active ? theme.color.primary100 : theme.color.white)};
  border: 1px solid
    ${({ theme, active }) => (active ? theme.color.primary100 : theme.color.charcoal200)};
`;

const MapLegend = forwardRef((props, ref) => {
  const {
    actions,
    activeAction,
    description,
    isLoading,
    offsetBottom,
    offsetLeft,
    onChangeAction,
    points,
    rangeColors,
    rangeTextMax,
    rangeTextMin,
    title,
    variant,
    ...other
  } = props;

  const active = activeAction ? activeAction : actions.length > 0 ? actions[0].value : null;

  return (
    <StyledContainer offsetLeft={offsetLeft} offsetBottom={offsetBottom} {...other}>
      {isLoading ? (
        <MapLegendSkeleton actions={actions.length} hasDescription={!!description} />
      ) : (
        <>
          <StyledWrapper>
            {title && <StyledTitle>{title}</StyledTitle>}
            {description && <StyledDescription>{description}</StyledDescription>}
            {variant === 'range' ? (
              <>
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
            ) : (
              <StylePoints>
                {points.map((point, i) => (
                  <StyledPointElement key={i} color={point.color}>
                    <span></span>
                    <span>{point.label}</span>
                  </StyledPointElement>
                ))}
              </StylePoints>
            )}
          </StyledWrapper>
          {actions.length > 0 && (
            <StyledActions>
              {actions.map(({ value, label }, i) => (
                <Action key={i} onClick={() => onChangeAction(value)} active={value === active}>
                  {label}
                </Action>
              ))}
            </StyledActions>
          )}
        </>
      )}
    </StyledContainer>
  );
});

MapLegend.defaultProps = {
  variant: 'range',
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
  rangeTextMax: 'Max',
  actions: []
};

MapLegend.propTypes = {
  actions: PropTypes.array,
  activeAction: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isLoading: PropTypes.bool,
  offsetBottom: PropTypes.string,
  offsetLeft: PropTypes.string,
  onChangeAction: PropTypes.func,
  points: PropTypes.array,
  rangeColors: PropTypes.arrayOf(PropTypes.string),
  rangeTextMax: PropTypes.string,
  rangeTextMin: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['range', 'points'])
};

export default MapLegend;
