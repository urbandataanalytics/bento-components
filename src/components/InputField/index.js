import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const LabelText = styled.p`
  font-size: ${({ theme }) => theme.components.inputFieldLabelFontSize};
  color: ${({ theme }) => theme.components.inputFieldLabelColor};
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const InputFieldContainer = styled.div``;

InputFieldContainer.defaultProps = {
  theme: defaultTheme
};

const HelpText = styled.small`
  padding-top: 4px;
  display: block;
  font-size: ${({ theme }) => theme.components.inputFieldHelpFontSize};
  color: ${props =>
    props.error
      ? props.theme.components.inputFieldErrorHelpColor
      : props.theme.components.inputFieldHelpColor};
`;

HelpText.defaultProps = {
  theme: defaultTheme
};

const Input = styled.input`
  outline: 0;
  font-size: ${({ theme }) => theme.components.inputFieldFontSize};
  line-height: ${({ theme }) => theme.components.inputFieldLineHeight};
  text-indent: ${({ theme }) => theme.components.inputFieldTextIndent};
  border-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
  background-color: ${props =>
    props.error
      ? props.theme.components.inputFieldErrorBackgroundColor
      : props.theme.components.inputFieldBackgroundColor};

  border-color: ${props =>
    props.error
      ? props.theme.components.inputFieldErrorBorderColor
      : props.theme.components.inputFieldBorderColor};

  border-width: 1px;
  border-style: solid;
  transition: 300ms ease-in-out;

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

Input.defaultProps = {
  theme: defaultTheme
};

const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
`;

Label.defaultProps = {
  theme: defaultTheme
};

const InputField = React.forwardRef((props, ref) => {
  const {
    className,
    disabled = false,
    error,
    help,
    label,
    name,
    onChange,
    placeholder,
    tabIndex,
    type = 'text',
    value,
    ...other
  } = props;

  return (
    <InputFieldContainer>
      <Label className={className}>
        <Input
          error={error}
          type={type}
          disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          tabIndex={tabIndex}
          ref={ref}
          {...other}
        />
        {label && (
          <LabelText error={error} disabled={disabled}>
            {label}
          </LabelText>
        )}
      </Label>
      {help && <HelpText error={error}>{help}</HelpText>}
    </InputFieldContainer>
  );
});

InputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

InputField.displayName = 'InputField';

export default InputField;
