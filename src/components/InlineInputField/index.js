import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const FullInputContainer = styled.div`
  width: 100%;
  display: grid;
  column-gap: 16px;
  grid-template-columns: ${({ label }) => (label ? '128px 10fr' : '1fr')};
  grid-template-rows: ${({ helpText }) => (helpText ? '1fr 1fr' : '1fr')};
`;

const LabelText = styled.p`
  display: inline;
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.components.inlineInputFieldDisabledLabelColor
      : theme.components.inlineInputFieldLabelColor};
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

const InputWrapper = styled.div`
  position: relative;
  align-items: center;
  outline: 0;
  width: 100%;
  border-radius: ${({ theme }) => theme.components.inlineInputFieldBorderRadius};
  border-width: 1px;
  border-style: solid;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldBottomBorderColor};
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme, inputBackground }) =>
    inputBackground ? inputBackground : theme.components.inlineInputFieldBackgroundColor};
  border-color: ${({ theme }) => theme.components.inlineInputFieldBorderColor};
`;

const Input = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.global.fontFamily};
  ${({ theme, prefix }) => (prefix ? theme.texts.p1b : theme.texts.p1)};
  padding-right: ${({ theme, textAlign, prefix, suffixWidth }) =>
    (textAlign === 'right') & (prefix && suffixWidth)
      ? theme.spacings.small3
      : `calc(${suffixWidth} + 2px)`};
  text-align: ${({ textAlign, prefix, suffix }) => (prefix || suffix ? 'right' : textAlign)};
  font-weight: ${({ theme, prefix }) => (prefix ? theme.global.fontWeightMedium : '')};
  line-height: ${({ theme, prefix }) =>
    prefix
      ? theme.components.inlineInputFieldPrefixLineHeight
      : theme.components.inlineInputFieldLineHeight};
  text-indent: ${({ theme, prefix }) => (prefix ? 0 : theme.components.inlineInputFieldTextIndent)};
  padding-left: ${({ prefix, prefixWidth }) => (prefix ? prefixWidth : 0)};
  background-color: transparent;
  border: none;

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
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.inlineInputFieldDisabledBackgroundColor};
    border-color: ${({ theme }) => theme.components.inlineInputFieldDisabledBorderColor};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldDisabledBottomBorderColor};
    color: ${({ theme }) => theme.components.inlineInputFieldDisabledColor};
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
  display: flex;
  align-self: center;
`;

Label.defaultProps = {
  theme: defaultTheme
};

const InnerLabel = styled.p`
  position: absolute;
  ${({ theme }) => theme.texts.p1b};
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;

  &.prefix {
    padding: 6px 10px 0 ${({ theme }) => theme.spacings.small3};
    color: ${({ theme, disabled }) =>
      disabled ? theme.components.inlineInputFieldDisabledLabelColor : theme.color.charcoal600};
  }

  &.suffix {
    top: ${({ prefix }) => (prefix ? '6px' : '10px')};
    right: 0;
    padding-right: ${({ theme }) => theme.spacings.small3};
    color: ${({ theme, disabled }) =>
      disabled ? theme.components.inlineInputFieldDisabledLabelColor : theme.color.charcoal800};
    ${({ theme, prefix }) => (prefix ? theme.texts.p1b : theme.texts.p1)}
  }
`;

const InlineInputField = React.forwardRef((props, ref) => {
  const {
    className,
    disabled,
    error,
    help,
    inputBackground,
    label,
    labelIcon,
    name,
    onChange,
    placeholder,
    prefix,
    suffix,
    tabIndex,
    textAlign,
    type,
    value,
    ...other
  } = props;
  const [prefixWidth, setPrefixWidth] = useState(null);
  const [suffixWidth, setSuffixWidth] = useState(null);

  const getPrefixWidth = async node => {
    if (node) {
      const styles = await window.getComputedStyle(node);
      setPrefixWidth(styles.width);
    }
  };

  const getSuffixWidth = async node => {
    if (node) {
      const styles = await window.getComputedStyle(node);
      setSuffixWidth(styles.width);
    }
  };

  return (
    <>
      <FullInputContainer prefix={prefix} className={className} label={label} helpText={help}>
        {label && (
          <Label htmlFor={name}>
            {labelIcon && (
              <IconWrapper variant="secondary" disabled={disabled} size="medium">
                {labelIcon}
              </IconWrapper>
            )}
            <LabelText disabled={disabled}>{label}</LabelText>
          </Label>
        )}
        <InputContainer>
          <InputWrapper prefix={prefix} inputBackground={inputBackground}>
            {prefix && (
              <InnerLabel
                disabled={disabled}
                ref={node => {
                  getPrefixWidth(node);
                }}
                className={'prefix'}
              >
                {prefix}
              </InnerLabel>
            )}
            <Input
              textAlign={textAlign}
              className={error ? `error` : null}
              type={type}
              prefixWidth={prefixWidth}
              suffixWidth={suffixWidth}
              disabled={disabled}
              prefix={prefix}
              suffix={suffix}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              tabIndex={tabIndex}
              {...other}
            ></Input>
            <InnerLabel
              disabled={disabled}
              prefix={prefix}
              ref={node => {
                getSuffixWidth(node);
              }}
              className="suffix"
            >
              {suffix}
            </InnerLabel>
          </InputWrapper>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(['left', 'right']),
  labelIcon: PropTypes.node,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  inputBackground: PropTypes.string
};

InlineInputField.defaultProps = {
  value: '',
  textAlign: 'left',
  disabled: false,
  type: 'text'
};

InlineInputField.displayName = 'InlineInputField';

export default InlineInputField;
