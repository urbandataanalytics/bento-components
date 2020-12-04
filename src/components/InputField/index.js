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

const Input = styled.input`
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

  &::placeholder {
    color: ${({ theme }) => theme.components.inputFieldPlaceholderColor};
    transition: color 300ms ease-in-out;
  }

  &.error {
    background-color: ${({ theme }) => theme.components.inputFieldErrorBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldErrorBorderColor};

    &::placeholder {
      color: ${({ theme }) => theme.components.inputFieldErrorPlaceholderColor};
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.components.inputFieldPlaceholderColor};
    }
  }

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
    disabled,
    error,
    help,
    label,
    name,
    onChange,
    placeholder,
    tabIndex,
    type,
    value,
    ...other
  } = props;

  return (
    <div className={className}>
      <Label>
        <Input
          className={error ? `error` : null}
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
        {label && <LabelText disabled={disabled}>{label}</LabelText>}
      </Label>
      {help && <HelpText className={error ? 'error' : null}>{help}</HelpText>}
    </div>
  );
});

InputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

InputField.defaultProps = {
  value: '',
  disabled: false,
  type: 'text'
};

InputField.displayName = 'InputField';

export default InputField;
