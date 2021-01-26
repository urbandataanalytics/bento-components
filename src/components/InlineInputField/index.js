import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import { IconOrderDesc } from '../../icons';

const FullInputContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ label }) => (label ? '2fr 10fr' : '1fr')};
  grid-template-rows: 2fr 1fr;
`;

const LabelText = styled.p`
  display: inline;
  font-size: ${({ theme }) => theme.components.inputFieldLabelFontSize};
  color: ${({ theme }) => theme.color.charcoal600};
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
  font-size: ${({ theme }) => theme.components.inputFieldHelpFontSize};
  min-height: 25px;
  color: ${({ theme }) => theme.color.charcoal600};
  &.error {
    color: ${({ theme }) => theme.components.inputFieldErrorHelpColor};
  }
`;

HelpText.defaultProps = {
  theme: defaultTheme
};

const IconWrapper = styled.span`
  display: inline-flex;
  margin: ${props => (props.direction === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
  & > svg {
    width: ${props => (props.size === 'large' ? '18px' : '15px')};
    height: ${props => (props.size === 'large' ? '18px' : '15px')};
    path {
      ${props =>
        props.disabled
          ? `fill: ${
              props.variant === 'primary'
                ? props.theme.color.white
                : props.theme.components.buttonSecondaryDisabledColor
            } ;`
          : null}
    }
  }
`;

export const Input = styled.input`
  outline: 0;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.components.inputFieldFontSize};
  line-height: 40px;
  text-indent: ${({ theme }) => theme.components.inputFieldTextIndent};
  padding-right: ${({ textAlign }) => (textAlign === 'right' ? '24px' : 0)};
  border-radius: 4px 4px 0 0;
  border-width: 1px;
  border-style: solid;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.color.charcoal400};
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme }) => theme.color.charcoal200};
  border-color: ${({ theme }) => theme.color.charcoal200};

  &::placeholder {
    color: ${({ theme }) => theme.components.inputFieldPlaceholderColor};
    transition: color 300ms ease-in-out;
  }

  &.error {
    background-color: ${({ theme }) => theme.components.inputFieldErrorBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldErrorBackgroundColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inputFieldErrorBorderColor};
    &::placeholder {
      color: ${({ theme }) => theme.components.inputFieldErrorPlaceholderColor};
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.components.inputFieldPlaceholderColor};
    }
  }

  &:focus {
    background-color: ${({ theme }) => theme.components.inputFieldFocusBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldFocusBackgroundColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inputFieldFocusBorderColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inputFieldFocusLabelColor};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.inputFieldDisabledBackgroundColor};
    border-color: ${({ theme }) => theme.components.inputFieldDisabledBackgroundColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inputFieldDisabledBorderColor};
    color: ${({ theme }) => theme.components.inputFieldDisabledColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.inputFieldDisabledLabelColor};
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
    <div className={className}>
      <FullInputContainer label={label}>
        {label && (
          <Label for={name}>
            {labelIcon && (
              <IconWrapper variant="secondary" disabled={disabled} direction="left" size="medium">
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
    </div>
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
