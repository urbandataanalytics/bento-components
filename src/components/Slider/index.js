import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RcSlider from 'rc-slider';
import { Range } from 'rc-slider';
import SliderSkeleton from './SliderSkeleton';
import defaultTheme from '../../themes/defaultTheme';
import InputFormatter from './InputFormatter';

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
  padding: ${({ theme }) => theme.spacings.small1} 0;
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

const getDefaultValue = ({ value, min, max, variant }) => {
  let result = null;

  if (variant === 'range') {
    if (Array.isArray(value) && value.length) {
      result = value;
    } else {
      result = [min, max];
    }
  } else {
    if (value) {
      result = value;
    } else {
      result = max;
    }
  }

  return result;
};

const Slider = React.forwardRef((props, ref) => {
  const {
    disabled,
    isLoading,
    max,
    min,
    name,
    onChange = () => {},
    format = value => Number(value),
    prefix,
    minPrefix,
    maxPrefix,
    step,
    suffix,
    minSuffix,
    maxSuffix,
    variant,
    value,
    ...other
  } = props;
  const [values, setValues] = useState(getDefaultValue({ value, min, max, variant }));
  const [isEditing, toggleEdditing] = useState({ min: false, max: false });

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
          onChange={handleSliderSimpleChange}
          onAfterChange={handleAfterChange}
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
            onAfterChange={handleAfterChange}
            ref={ref}
            step={step}
            value={values}
            {...propStyles}
          />

          <MinMaxContainer>
            <InputContainer>
              {(prefix || minPrefix) && (
                <PrefixSuffix className="prefix">{prefix || minPrefix}</PrefixSuffix>
              )}
              <InputFormatter
                isEditing={isEditing.min}
                toggleEditing={value => toggleEdditing({ ...isEditing, min: value })}
                name="min"
                value={values[0]}
                format={format}
                handleBlur={handleBlur}
                handleKeyDown={handleKeyDown}
              />

              {(suffix || minSuffix) && <PrefixSuffix>{suffix || minSuffix}</PrefixSuffix>}
            </InputContainer>

            <InputContainer>
              {(prefix || maxPrefix) && (
                <PrefixSuffix className="prefix">{prefix || maxPrefix}</PrefixSuffix>
              )}
              <InputFormatter
                isEditing={isEditing.max}
                toggleEditing={value => toggleEdditing({ ...isEditing, max: value })}
                name="max"
                value={values[1]}
                format={format}
                handleBlur={handleBlur}
                handleKeyDown={handleKeyDown}
              />

              {(suffix || maxSuffix) && <PrefixSuffix>{suffix || maxSuffix}</PrefixSuffix>}
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
  minPrefix: PropTypes.string,
  maxPrefix: PropTypes.string,
  step: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  minSuffix: PropTypes.string,
  maxSuffix: PropTypes.string,
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
