import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const componentIconContainerSizes = theme => ({
  small: {
    width: theme.components.radioButtonSizeSmall,
    height: theme.components.radioButtonSizeSmall
  },
  medium: {
    width: theme.components.radioButtonSizeMedium,
    height: theme.components.radioButtonSizeMedium
  }
});

const componentGlyphSizes = theme => ({
  small: {
    width: theme.components.radioButtonGlyphSizeSmall,
    height: theme.components.radioButtonGlyphSizeSmall
  },
  medium: {
    width: theme.components.radioButtonGlyphSizeMedium,
    height: theme.components.radioButtonGlyphSizeMedium
  }
});

const Glyph = styled.span`
  visibility: hidden;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.components.radioButtonBackgroundDisabled
      : theme.components.radioButtonBackgroundChecked};
  border-radius: ${({ theme }) => theme.components.radioButtonBorderRadius};
  flex-shrink: 0;
  ${props => componentGlyphSizes(props.theme)[props.size]};
`;

Glyph.defaultProps = {
  theme: defaultTheme
};

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: ${props => props.theme.components.radioButtonBackground};
  border: ${props => props.theme.components.radioButtonBorderWidth} solid
    ${props => props.theme.components.radioButtonBorderColor};
  padding: 0;
  margin: 0;
  ${props => componentIconContainerSizes(props.theme)[props.size]}
  border-radius: ${props => props.theme.components.radioButtonBorderRadius};
`;

IconContainer.defaultProps = {
  theme: defaultTheme
};

const LabelText = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => `0 0 0 ${props.theme.components.radioButtonLabelMargin}`};
  flex: 1;
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightRegular};
  font-size: ${props => props.theme.components.radioButtonLabelFontSize};
  color: ${({ theme, color, checked }) =>
    color && checked ? color : theme.components.radioButtonLabelColor};
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const Input = styled.input`
  opacity: 0;

  position: absolute;

  &:focus {
    outline: none;
  }

  &:checked + ${IconContainer} {
    border-color: ${({ theme }) => theme.components.radioButtonBackgroundChecked};
  }
  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }

  &:disabled + ${IconContainer} {
    border-color: ${({ theme }) => theme.components.radioButtonBackgroundDisabled};
    background-color: ${({ theme }) => theme.components.radioButtonBackgroundDisabled};
  }

  &:disabled ~ ${LabelText} {
    color: ${({ theme }) => theme.components.radioButtonBackgroundDisabled};
  }
`;

Input.defaultProps = {
  theme: defaultTheme
};

const StyledLabel = styled.label`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  color: ${({ theme, color }) => (color ? color : theme.components.radioButtonLabelColor)};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme
};

const RadioButton = React.forwardRef((props, ref) => {
  const {
    checked,
    customLabelColor,
    disabled,
    label,
    name,
    onChange,
    size,
    tabIndex,
    value,
    ...other
  } = props;

  return (
    <StyledLabel disabled={disabled} checked={checked}>
      <Input
        size={size}
        type="radio"
        value={value}
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        checked={checked}
        onChange={onChange}
        ref={ref}
        {...other}
      />
      <IconContainer disabled={disabled} checked={checked} size={size}>
        <Glyph disabled={disabled} size={size} />
      </IconContainer>
      {label && (
        <LabelText checked={checked} color={customLabelColor}>
          {label}
        </LabelText>
      )}
    </StyledLabel>
  );
});

RadioButton.propTypes = {
  checked: PropTypes.bool,
  customLabelColor: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
  tabIndex: PropTypes.string,
  value: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium'
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
