import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

import 'rc-slider/assets/index.css';

import RcSlider from 'rc-slider';
import { Range } from 'rc-slider';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinMaxInput = styled.input`
  ${({ theme }) => theme.texts.p2b};
  border: none;
  width: 60px;
  border-bottom: ${({ theme }) => '1px solid' + theme.color.charcoal400};
  color: ${({ theme }) => theme.color.charcoal700};
  text-align: center;
  &:focus {
    border-bottom: ${({ theme }) => '1px solid' + theme.color.primary500};
    background: ${({ theme }) => theme.color.primary100};
  }
`;

const Slider = React.forwardRef((props, ref) => {
  const { name, variant, min, max, value, step, format, onChange, disabled, ...other } = props;
  const [values, setValues] = useState(value);

  useEffect(() => {
    setValues(value);
  }, [value]);

  const handleSliderChange = value => {
    setValues(value);
    onChange(value);
  };

  const onValuesChange = event => {
    let value = Number(event.target.value);
    value = value >= min ? value : min;
    value = value <= max ? value : max;

    let current = [...values];
    if (event.target.name === 'min') current[0] = value;
    else current[1] = value;

    setValues(current);
    onChange(current);
  };

  return (
    <div>
      {variant === 'slider' ? (
        <RcSlider
          min={min}
          max={max}
          value={values}
          step={step}
          disabled={disabled}
          onChange={handleSliderChange}
        ></RcSlider>
      ) : (
        <>
          <Range
            min={min}
            max={max}
            value={values}
            step={step}
            disabled={disabled}
            onChange={handleSliderChange}
            ref={ref}
            railStyle={{ backgroundColor: props.theme.components.sliderRailColor }}
            trackStyle={[{ backgroundColor: props.theme.components.sliderTrackColor }]}
            handleStyle={[
              {
                backgroundColor: props.theme.components.sliderHandleColor,
                borderColor: props.theme.components.sliderHandleColor
              },
              {
                backgroundColor: props.theme.components.sliderHandleColor,
                borderColor: props.theme.components.sliderHandleColor
              }
            ]}
          ></Range>
          <InputContainer>
            <MinMaxInput
              type="text"
              name="min"
              value={values[0]}
              onChange={onValuesChange}
            ></MinMaxInput>
            <MinMaxInput
              type="text"
              name="max"
              value={values[1]}
              onChange={onValuesChange}
            ></MinMaxInput>
          </InputContainer>
        </>
      )}
    </div>
  );
});

Slider.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf(['slider', 'range']),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  step: PropTypes.number,
  format: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Slider.defaultProps = {
  disabled: false,
  variant: 'slider',
  theme: defaultTheme
};

Slider.displayName = 'Slider';

export default Slider;
