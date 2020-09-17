import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RcSlider from 'rc-slider';
import { Range } from 'rc-slider';
import SliderSkeleton from './SliderSkeleton';
import defaultTheme from '../../themes/defaultTheme';

import 'rc-slider/assets/index.css';

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const InputContainer = styled.label`
  display: flex;
`;

const PrefixSuffix = styled.span`
  ${({ theme }) => theme.texts.p2b};
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal400};
  color: ${({ theme }) => theme.color.charcoal800};
  padding: ${({ theme }) => theme.spacings.small1} ${({ theme }) => theme.spacings.small2};
`;

const MinMaxInput = styled.input`
  ${({ theme }) => theme.texts.p2b};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal400};
  color: ${({ theme }) => theme.color.charcoal800};
  background-color: transparent;
  text-align: center;
  width: ${({ valueLength }) => `${valueLength}ch`};
  box-sizing: initial;
  padding: ${({ theme }) => theme.spacings.small1} ${({ theme }) => theme.spacings.small2};

  .prefix {
    order: -1;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary500};
    background-color: ${({ theme }) => theme.color.primary100};

    ~ span {
      border-color: ${({ theme }) => theme.color.primary500};
      background-color: ${({ theme }) => theme.color.primary100};
    }
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

  .rc-slider-disabled .rc-slider-handle {
    background-color: ${({ theme }) => theme.components.sliderHandleDisabledColor} !important;
    border-color: ${({ theme }) => theme.components.sliderHandleDisabledColor} !important;
  }
`;

const REGEX_PATTERN_NUMBER = 'd+(.d*)?';

const Slider = React.forwardRef((props, ref) => {
  const {
    disabled,
    isLoading,
    max,
    min,
    name,
    onChange = () => {},
    prefix,
    step,
    suffix,
    variant,
    ...other
  } = props;

  let { value } = props;
  if (!value || (Array.isArray(value) && !value.length)) {
    value = variant === 'range' ? [min, max] : max;
  }

  const [values, setValues] = useState(value);
  const inputMin = useRef(null);
  const inputMax = useRef(null);

  const getValueLength = value => value && value.toString().length;

  useEffect(() => {
    if (value && Array.isArray(value)) {
      if (value.length > 0) {
        const [minValue, maxValue] = value;
        setInputValue('min', Number(minValue));
        setInputValue('max', Number(maxValue));
        setValues(value);
      } else {
        setValues([min, max]);
        setInputValue('min', Number(min));
        setInputValue('max', Number(max));
      }
    } else {
      setValues(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleSliderChange = value => {
    const [minValue, maxValue] = value;

    setInputValue('min', Number(minValue));
    setInputValue('max', Number(maxValue));

    setValues(value);
    onChange(value);
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
      value = value <= current[1] && value >= min ? value : current[1];
      current[0] = value < min ? min : value;
      setInputValue(type, current[0]);
    } else {
      value = value >= current[0] && value <= max ? value : current[0];
      current[1] = value > max ? max : value;
      setInputValue(type, current[1]);
    }

    setValues(current);
    onChange(current);
  };

  const setInputValue = (type, value) => {
    if (type === 'min' && inputMin && inputMin.current) {
      inputMin.current.value = Number(value);
    }
    if (type === 'max' && inputMax && inputMax.current) {
      inputMax.current.value = Number(value);
    }
  };

  const propStyles = {
    railStyle: {
      backgroundColor: props.theme.components.sliderRailColor,
      height: props.theme.components.sliderlRailSize
    },
    trackStyle: [
      {
        backgroundColor: props.theme.components.sliderTrackColor,
        height: props.theme.components.sliderlRailSize
      }
    ],
    handleStyle: [
      {
        backgroundColor: props.theme.components.sliderHandleColor,
        borderColor: props.theme.components.sliderHandleColor,
        height: props.theme.components.sliderHandleSize,
        marginTop: props.theme.components.sliderHandleMarginTop,
        width: props.theme.components.sliderHandleSize
      },
      {
        backgroundColor: props.theme.components.sliderHandleColor,
        borderColor: props.theme.components.sliderHandleColor,
        height: props.theme.components.sliderHandleSize,
        marginTop: props.theme.components.sliderHandleMarginTop,
        width: props.theme.components.sliderHandleSize
      }
    ]
  };

  return (
    <StyledContent {...other}>
      {isLoading ? (
        <SliderSkeleton variant={variant} />
      ) : variant === 'slider' ? (
        <RcSlider
          disabled={disabled}
          max={max}
          min={min}
          onChange={handleSliderChange}
          step={step}
          value={values}
          {...propStyles}
        />
      ) : (
        <>
          <Range
            disabled={disabled}
            max={max}
            min={min}
            onChange={handleSliderChange}
            ref={ref}
            step={step}
            value={values}
            {...propStyles}
          />

          <MinMaxContainer>
            <InputContainer>
              <MinMaxInput
                ref={inputMin}
                name="min"
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                pattern={REGEX_PATTERN_NUMBER}
                type="text"
                defaultValue={Number(values[0])}
                valueLength={getValueLength(values[0])}
              />
              {prefix && <PrefixSuffix className="prefix">{prefix}</PrefixSuffix>}
              {suffix && <PrefixSuffix>{suffix}</PrefixSuffix>}
            </InputContainer>

            <InputContainer>
              <MinMaxInput
                ref={inputMax}
                name="max"
                pattern={REGEX_PATTERN_NUMBER}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                type="text"
                defaultValue={Number(values[1])}
                valueLength={getValueLength(values[1])}
              />
              {prefix && <PrefixSuffix className="prefix">{prefix}</PrefixSuffix>}
              {suffix && <PrefixSuffix>{suffix}</PrefixSuffix>}
            </InputContainer>
          </MinMaxContainer>
        </>
      )}
    </StyledContent>
  );
});

Slider.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  step: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  variant: PropTypes.oneOf(['slider', 'range']).isRequired
};

Slider.defaultProps = {
  max: 5000,
  min: 0,
  step: 1,
  theme: defaultTheme,
  variant: 'slider'
};

Slider.displayName = 'Slider';

export default Slider;
