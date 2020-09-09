import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

import 'rc-slider/assets/index.css';

import RcSlider from 'rc-slider';
import { Range } from 'rc-slider';

const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.label`
  display: flex;
`;

const PrefixSufix = styled.span`
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

const Slider = React.forwardRef((props, ref) => {
  const {
    disabled,
    isLoading,
    max,
    min,
    name,
    onChange,
    prefix,
    step,
    sufix,
    value,
    variant,
    ...other
  } = props;
  const [values, setValues] = useState(value);

  const getValueLength = value => value.toString().length;

  useEffect(() => {
    setValues(value);
  }, [value]);

  const handleSliderChange = value => {
    setValues(value);
    onChange(value);
  };

  const onValuesChange = event => {
    const type = event.target.name;
    let value = Number(event.target.value);
    let current = [...values];

    if (type === 'min') {
      value = value <= current[1] && value >= min ? value : current[1];
      current[0] = value;
    } else {
      value = value >= current[0] && value <= max ? value : current[0];
      current[1] = value;
    }

    setValues(current);
    onChange(current);
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
      {variant === 'slider' ? (
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
                name="min"
                onChange={onValuesChange}
                type="text"
                value={Number(values[0])}
                valueLength={getValueLength(values[0])}
              />
              {prefix && <PrefixSufix className="prefix">{prefix}</PrefixSufix>}
              {sufix && <PrefixSufix>{sufix}</PrefixSufix>}
            </InputContainer>
            <InputContainer>
              <MinMaxInput
                name="max"
                onChange={onValuesChange}
                type="text"
                value={Number(values[1])}
                valueLength={getValueLength(values[1])}
              />
              {prefix && <PrefixSufix className="prefix">{prefix}</PrefixSufix>}
              {sufix && <PrefixSufix>{sufix}</PrefixSufix>}
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
  sufix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
  variant: PropTypes.oneOf(['slider', 'range']).isRequired
};

Slider.defaultProps = {
  max: 5000,
  min: 0,
  step: 1,
  theme: defaultTheme,
  value: 1,
  variant: 'slider'
};

Slider.displayName = 'Slider';

export default Slider;
