import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const FullInputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ label }) => (label ? '2fr 10fr' : '1fr')};
  grid-template-rows: ${({ helpText }) => (helpText ? '2fr 1fr' : '1fr')};
`;

const LabelText = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.components.inlineInputFieldLabelFontSize};
  color: ${({ theme }) => theme.components.inlineInputLabelColor};
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const HelpText = styled.small`
  grid-column-start: ${({ label }) => (label ? 2 : 1)};
  grid-row-start: 2;
  text-align: ${({ textAlign }) => textAlign};
  padding-top: 7px;
  display: block;
  font-size: ${({ theme }) => theme.components.inlineInputFieldHelpFontSize};
  min-height: 25px;
  color: ${({ theme }) => theme.color.charcoal600};
  &.error {
    color: ${({ theme }) => theme.components.inlineInputFieldErrorHelpColor};
  }
`;

HelpText.defaultProps = {
  theme: defaultTheme
};

const IconWrapper = styled.span`
  display: inline-flex;
  margin: '0 8px 0 0';
  & > svg {
    width: '${props => (props.size === 'large' ? '18px' : '15px')}';
    height: ${props => (props.size === 'large' ? '18px' : '15px')};
  }
`;

const Input = styled.input`
  outline: 0;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.components.inlineInputFieldFontSize};
  line-height: ${({ theme }) => theme.components.inlineInputFieldLineHeight};
  text-indent: ${({ theme }) => theme.components.inlineInputFieldTextIndent};
  padding-right: ${({ textAlign }) => (textAlign === 'right' ? '24px' : 0)};
  border-radius: ${({ theme }) => theme.components.inlineInputFieldBorderRadius};
  border-width: 1px;
  border-style: solid;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldBottomBorderColor};
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme }) => theme.components.inlineInputFieldBackgroundColor};
  border-color: ${({ theme }) => theme.components.inlineInputFieldBorderColor};

  &::placeholder {
    color: ${({ theme }) => theme.components.inlineInputFieldPlaceholderColor};
    transition: color 300ms ease-in-out;
  }

  &.error {
    background-color: ${({ theme }) => theme.components.inlineInputFieldErrorBackgroundColor};
    border-color: ${({ theme }) => theme.components.inlineInputFieldErrorBorderColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldErrorBottomBorderColor};
    &::placeholder {
      color: ${({ theme }) => theme.components.inlineInputFieldErrorPlaceholderColor};
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.components.inlineInputFieldPlaceholderColor};
    }
  }

  &:focus {
    background-color: ${({ theme }) => theme.components.inlineInputFieldFocusBackgroundColor};
    border-color: ${({ theme }) => theme.components.inlineInputFieldFocusBorderColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldFocusBottomBorderColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inlineInputFieldFocusLabelColor};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.inlineInputFieldDisabledBackgroundColor};
    border-color: ${({ theme }) => theme.components.inlineInputFieldDisabledBorderColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldDisabledBottomBorderColor};
    color: ${({ theme }) => theme.components.inlineInputFieldDisabledColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inlineInputFieldDisabledLabelColor};
    }
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

Input.defaultProps = {
  theme: defaultTheme
};

const Label = styled.label`
  max-width: 100px;
  display: flex;
  align-self: center;
  margin-right: 16px;
`;

Label.defaultProps = {
  theme: defaultTheme
};

const InlineInputField = React.forwardRef((props, ref) => {
  const {
    className,
    disabled,
    error,
    labelIcon,
    label,
    help,
    textAlign,
    name,
    onChange,
    placeholder,
    tabIndex,
    type,
    value,
    ...other
  } = props;

  return (
    <>
      <FullInputContainer className={className} label={label} helpText={help}>
        {label && (
          <Label for={name}>
            {labelIcon && (
              <IconWrapper variant="secondary" disabled={disabled} size="medium">
                {labelIcon}
              </IconWrapper>
            )}
            <LabelText disabled={disabled}>{label}</LabelText>
          </Label>
        )}
        <InputContainer>
          <Input
            textAlign={textAlign}
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
        </InputContainer>
        {help && (
          <HelpText label={label} textAlign={textAlign} className={error ? 'error' : null}>
            {help}
          </HelpText>
        )}
      </FullInputContainer>
    </>
  );
});

InlineInputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'right']),
  labelIcon: PropTypes.node
};

InlineInputField.defaultProps = {
  value: '',
  textAlign: 'left',
  disabled: false,
  type: 'text'
};

InlineInputField.displayName = 'InlineInputField';

export default InlineInputField;
