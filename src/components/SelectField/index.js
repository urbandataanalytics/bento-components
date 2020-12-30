import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import IconArrowClose from '../../icons/ArrowClose/index';
const LabelText = styled.p`
  font-size: ${({ theme }) => theme.components.inputFieldLabelFontSize};
  color: ${({ theme }) => theme.components.inputFieldLabelColor};
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const HelpText = styled.small`
  padding-top: 4px;
  display: block;
  font-size: ${({ theme }) => theme.components.inputFieldHelpFontSize};
  min-height: 25px;
  color: ${({ theme }) => theme.components.inputFieldHelpColor};
  &.error {
    color: ${({ theme }) => theme.components.inputFieldErrorHelpColor};
  }
`;

HelpText.defaultProps = {
  theme: defaultTheme
};

const Select = styled.select`
  appearance: none;
  outline: 0;
  font-size: ${({ theme }) => theme.components.inputFieldFontSize};
  line-height: ${({ theme }) => theme.components.inputFieldLineHeight};
  text-indent: ${({ theme }) => theme.components.inputFieldTextIndent};
  border-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
  border-width: 1px;
  border-style: solid;
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme }) => theme.components.inputFieldBackgroundColor};
  border-color: ${({ theme }) => theme.components.inputFieldBorderColor};

  &:focus {
    background-color: ${({ theme }) => theme.components.inputFieldFocusBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldFocusBorderColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inputFieldFocusLabelColor};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.inputFieldDisabledBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldDisabledBorderColor};
    color: ${({ theme }) => theme.components.inputFieldDisabledColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inputFieldDisabledLabelColor};
    }
  }
`;

Select.defaultProps = {
  theme: defaultTheme
};

const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  > svg {
    position: absolute;
    right: ${({ theme }) => theme.components.inputFieldTextIndent};
    top: 35px;
  }
`;

Label.defaultProps = {
  theme: defaultTheme
};

const SelectField = React.forwardRef((props, ref) => {
  const {
    className,
    defaultLabel,
    disabled,
    error,
    help,
    label,
    name,
    onChange,
    options,
    tabIndex,
    value,
    ...other
  } = props;

  return (
    <div className={className}>
      <Label>
        <IconArrowClose customColor={defaultTheme.color.charcoal600} />
        <Select
          className={error ? `error` : null}
          disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          tabIndex={tabIndex}
          ref={ref}
          {...other}
        >
          {defaultLabel && <option defaultValue>{defaultLabel}</option>}
          {options &&
            options.map((opt, key) => (
              <option key={key} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </Select>
        {label && <LabelText disabled={disabled}>{label}</LabelText>}
      </Label>
      <HelpText className={error ? 'error' : null}>{help}</HelpText>
    </div>
  );
});

SelectField.propTypes = {
  className: PropTypes.string,
  defaultLabel: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.string.isRequired
};

SelectField.defaultProps = {
  value: '',
  disabled: false
};

SelectField.displayName = 'SelectField';

export default SelectField;
