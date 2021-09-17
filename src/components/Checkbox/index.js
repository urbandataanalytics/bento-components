import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconCheck from '../../icons/Check';
import defaultTheme from '../../themes/defaultTheme';

const componentSizes = theme => ({
  small: {
    width: theme.components.checkboxSizeSmall,
    height: theme.components.checkboxSizeSmall
  },
  medium: {
    width: theme.components.checkboxSizeMedium,
    height: theme.components.checkboxSizeMedium
  }
});

const CheckboxContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: ${props => props.theme.components.checkboxBackground};
  border: ${props => props.theme.components.checkboxBorderWidth} solid
    ${props => props.theme.components.checkboxBorderColor};
  padding: 0;
  margin: 0;
  border-radius: ${props => props.theme.components.checkboxBorderRadius};
  ${props => componentSizes(props.theme)[props.size]}

  & > svg {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
`;

CheckboxContainer.defaultProps = {
  theme: defaultTheme
};

const LabelText = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => `0 0 0 ${props.theme.components.checkboxLabelMargin}`};
  flex: 1;
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightRegular};
  font-size: ${props => props.theme.components.checkboxLabelFontSize};
  color: ${props => props.theme.components.checkboxLabelColor};
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const Input = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:focus {
    outline: none;
  }

  &:checked + ${CheckboxContainer} {
    border: 0;
    background-color: ${props => props.theme.components.checkboxBackgroundChecked};
  }

  &:checked + ${CheckboxContainer} > svg {
    visibility: visible;
  }

  &:disabled + ${CheckboxContainer} {
    border: 0;
    background-color: ${props => props.theme.components.checkboxBackgroundDisabled};
  }

  &:disabled ~ ${LabelText} {
    color: ${props => props.theme.components.checkboxLabelDisabled};
  }
`;

Input.defaultProps = {
  theme: defaultTheme
};

export const Label = styled.label`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  position: relative;

  ${CheckboxContainer} {
    color: ${props => props.theme.components.checkboxIconColor};
  }
`;

Label.defaultProps = {
  theme: defaultTheme
};

const Checkbox = React.forwardRef((props, ref) => {
  const { size, checked, disabled, label, name, tabIndex, onChange, ...other } = props;
  const handleToggle = event => {
    if (!disabled && onChange) {
      onChange(event, !checked);
    }
  };

  return (
    <Label disabled={disabled} checked={checked}>
      <Input
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        checked={checked}
        onChange={handleToggle}
        ref={ref}
        {...other}
      />
      <CheckboxContainer disabled={disabled} checked={checked} size={size}>
        <IconCheck />
      </CheckboxContainer>
      {label && <LabelText>{label}</LabelText>}
    </Label>
  );
});

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  tabIndex: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium'
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
