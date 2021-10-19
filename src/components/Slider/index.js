import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RcSlider, { Range } from 'rc-slider';
import SliderSkeleton from './SliderSkeleton';
import defaultTheme from '../../themes/defaultTheme';
import InputFormatter from './InputFormatter';

import useTheme from '../../hooks/useTheme';

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
`;

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  height: 37px;
`;

const PrefixSuffix = styled.span`
  ${({ theme, size }) => (size === 'medium' ? theme.texts.p2b : theme.texts.p1b)};
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal400};
  color: ${({ theme }) => theme.color.charcoal800};
  padding: ${({ theme }) => theme.spacings.small1} 1px;
  border-radius: 0;
  line-height: 2;
  overflow: hidden;
  height: 100%;
  height: 37px;
`;

PrefixSuffix.defaultProps = {
  theme: defaultTheme
};

const StyledSheet = styled.div`
  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 4px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #abe2fb;
  }
  .rc-slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    cursor: -webkit-grab;
    margin-top: -5px;
    cursor: grab;
    border-radius: 50%;
    border: solid 2px #96dbfa;
    background-color: #fff;
    touch-action: pan-x;
  }
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #57c5f7;
    box-shadow: 0 0 0 5px #96dbfa;
  }
  .rc-slider-handle:focus {
    outline: none;
  }
  .rc-slider-handle-click-focused:focus {
    border-color: #96dbfa;
    box-shadow: unset;
  }
  .rc-slider-handle:hover {
    border-color: #57c5f7;
  }
  .rc-slider-handle:active {
    border-color: #57c5f7;
    box-shadow: 0 0 5px #57c5f7;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: #999;
  }
  .rc-slider-mark-text-active {
    color: #666;
  }
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #e9e9e9;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rc-slider-dot-active {
    border-color: #96dbfa;
  }
  .rc-slider-dot-reverse {
    margin-right: -4px;
  }
  .rc-slider-disabled {
    background-color: #e9e9e9;
  }
  .rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
  }
  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    border-color: #ccc;
    box-shadow: none;
    background-color: #fff;
    cursor: not-allowed;
  }
  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }
  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }
  .rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-handle {
    margin-left: -5px;
    touch-action: pan-y;
  }
  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }
  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip-hidden {
    display: none;
  }
  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #6c6c6c;
    border-radius: 6px;
    box-shadow: 0 0 4px #d9d9d9;
  }
  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: #6c6c6c;
  }
`;

const StyledContent = styled.div`
  .rc-slider {
    width: calc(100% - 5px);
    margin: 0 auto;
  }

  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging,
  .rc-slider-handle:active {
    box-shadow: unset !important;
  }

  .rc-slider-disabled {
    background-color: transparent;
  }

  .rc-slider-step {
    height: ${({ theme, railSize }) =>
      railSize === 'regular'
        ? theme.components.sliderRailSize
        : theme.components.sliderRailSizeSlim};
  }

  .rc-slider-disabled .rc-slider-handle {
    background-color: ${({ theme }) => theme.components.sliderHandleDisabledColor} !important;
    border-color: ${({ theme }) => theme.components.sliderHandleDisabledColor} !important;
  }
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const getDefaultValue = ({ value, min, max, variant }) => {
  let result = null;

  if (variant === 'range') {
    if (Array.isArray(value) && value.length) {
      result = value;
    } else {
      result = [min, max];
    }
  } else {
    if (value >= min && value <= max) {
      result = value;
    } else {
      result = max;
    }
  }

  return result;
};

const propStyles = (theme, railSize) => ({
  railStyle: {
    backgroundColor: theme.components.sliderRailColor,
    height:
      railSize === 'regular' ? theme.components.sliderRailSize : theme.components.sliderRailSizeSlim
  },
  trackStyle: [
    {
      backgroundColor: theme.components.sliderTrackColor,
      height:
        railSize === 'regular'
          ? theme.components.sliderRailSize
          : theme.components.sliderRailSizeSlim
    }
  ],
  handleStyle: [
    {
      backgroundColor: theme.components.sliderFirstHandleColor,
      borderColor: theme.components.sliderFirstHandleColor,
      height: theme.components.sliderFirstHandleSize,
      marginTop:
        railSize === 'regular'
          ? theme.components.sliderFirstHandleMarginTop
          : theme.components.sliderFirstHandleMarginTopSlim,
      width: theme.components.sliderFirstHandleSize
    },
    {
      backgroundColor: theme.components.sliderSecondHandleColor,
      borderColor: theme.components.sliderSecondHandleColor,
      height: theme.components.sliderSecondHandleSize,
      marginTop:
        railSize === 'regular'
          ? theme.components.sliderSecondHandleMarginTop
          : theme.components.sliderSecondHandleMarginTopSlim,
      width: theme.components.sliderSecondHandleSize
    }
  ]
});

const Slider = React.forwardRef((props, ref) => {
  const {
    disabled,
    format = inputValue => Number(inputValue),
    isLoading,
    max,
    maxPrefix,
    maxSuffix,
    min,
    minPrefix,
    minSuffix,
    name,
    onAfterChange = () => {},
    onChange = () => {},
    prefix,
    step,
    suffix,
    railSize,
    size,
    value,
    variant,
    ...other
  } = props;

  const [values, setValues] = useState(getDefaultValue({ value, min, max, variant }));
  const [isEditing, toggleEdditing] = useState({ min: false, max: false });
  const theme = useTheme();

  useEffect(() => {
    setValues(getDefaultValue({ min, max, variant, value }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleSliderSimpleChange = value => {
    setValues(value);
  };

  const handleSliderChange = value => {
    setValues(value);
  };

  const handleAfterChange = () => {
    onChange(values);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleValueChange(event);
    }
  };

  const handleBlur = event => {
    handleValueChange(event);
  };

  const handleValueChange = event => {
    const type = event.target.name;
    let value = Number(event.target.value);
    let current = [...values];

    if (type === 'min') {
      if (value > current[1] && value > min) current[0] = current[1];
      else if (value < min) current[0] = min;
      else current[0] = value;
    } else {
      if (value < current[0] && value < max) current[1] = current[0];
      else if (value > max) current[1] = max;
      else current[1] = value;
    }

    setValues(current);
    onChange(current);
    toggleEdditing({ ...isEditing, [type]: false });
  };

  return (
    <StyledSheet>
      <StyledContent {...other}>
        {isLoading ? (
          <SliderSkeleton variant={variant} />
        ) : variant === 'slider' ? (
          <RcSlider
            disabled={disabled}
            max={max}
            min={min}
            onChange={onChange}
            onAfterChange={onAfterChange}
            step={step}
            value={values}
            {...propStyles(theme, railSize)}
            {...other}
          />
        ) : (
          <>
            <Range
              disabled={disabled}
              max={max}
              min={min}
              onChange={handleSliderChange}
              onAfterChange={handleAfterChange}
              ref={ref}
              step={step}
              value={values}
              {...propStyles(theme, railSize)}
              {...other}
            />

            <MinMaxContainer>
              <InputContainer>
                {prefix || minPrefix ? (
                  <PrefixSuffix className="prefix" size={size}>
                    {prefix || minPrefix}
                  </PrefixSuffix>
                ) : null}
                <InputFormatter
                  isEditing={isEditing.min}
                  toggleEditing={value => toggleEdditing({ ...isEditing, min: value })}
                  name="min"
                  value={values[0]}
                  format={format}
                  handleBlur={handleBlur}
                  handleKeyDown={handleKeyDown}
                  size={size}
                />

                {suffix || minSuffix ? (
                  <PrefixSuffix size={size}>{suffix || minSuffix}</PrefixSuffix>
                ) : null}
              </InputContainer>

              <InputContainer>
                {prefix || maxPrefix ? (
                  <PrefixSuffix className="prefix" size={size}>
                    {prefix || maxPrefix}
                  </PrefixSuffix>
                ) : null}
                <InputFormatter
                  isEditing={isEditing.max}
                  toggleEditing={value => toggleEdditing({ ...isEditing, max: value })}
                  name="max"
                  value={values[1]}
                  format={format}
                  handleBlur={handleBlur}
                  handleKeyDown={handleKeyDown}
                  size={size}
                />

                {suffix || maxSuffix ? (
                  <PrefixSuffix size={size}>{suffix || maxSuffix}</PrefixSuffix>
                ) : null}
              </InputContainer>
            </MinMaxContainer>
          </>
        )}
      </StyledContent>
    </StyledSheet>
  );
});

Slider.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  max: PropTypes.number.isRequired,
  maxPrefix: PropTypes.string,
  maxSuffix: PropTypes.string,
  min: PropTypes.number.isRequired,
  minPrefix: PropTypes.string,
  minSuffix: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onAfterChange: PropTypes.func,
  prefix: PropTypes.string,
  step: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  variant: PropTypes.oneOf(['slider', 'range']).isRequired,
  railSize: PropTypes.oneOf(['regular', 'slim']).isRequired
};

Slider.defaultProps = {
  max: 5000,
  min: 0,
  step: 1,
  variant: 'slider',
  railSize: 'regular'
};

Slider.displayName = 'Slider';

export default Slider;
