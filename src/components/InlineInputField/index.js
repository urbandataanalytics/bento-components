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

const InputWrapper = styled.div`
  align-items: center;
  outline: 0;
  width: 100%;
  border-radius: ${({ theme }) => theme.components.inlineInputFieldBorderRadius};
  border-width: 1px;
  border-style: solid;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.components.inlineInputFieldBottomBorderColor};
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme }) => theme.components.inlineInputFieldBackgroundColor};
  border-color: ${({ theme }) => theme.components.inlineInputFieldBorderColor};
`;

const Input = styled.input`
  width: 100%;
  padding-right: ${({ theme, textAlign, prefix }) =>
    textAlign === 'right' || prefix ? theme.spacings.small3 : 0};
  text-align: ${({ textAlign, prefix }) => (prefix ? 'right' : textAlign)};
  font-weight: ${({ theme, prefix }) => (prefix ? theme.global.fontWeightBold : '')};
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
  display: flex;
  align-self: center;
`;

Label.defaultProps = {
  theme: defaultTheme
};

const InnerLabel = styled.p`
  position: absolute;
  ${({ theme }) => theme.texts.p1b};
  color: ${({ theme }) => theme.color.charcoal600};
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;

  &.prefix {
    padding: 6px 10px 0 ${({ theme }) => theme.spacings.small3};
  }
`;

const InlineInputField = React.forwardRef((props, ref) => {
  const {
    className,
    disabled,
    error,
    help,
    label,
    labelIcon,
    name,
    onChange,
    placeholder,
    prefix,
    tabIndex,
    textAlign,
    type,
    value,
    ...other
  } = props;
  const [prefixWidth, setPrefixWidth] = useState(null);

  const getPrefixWidth = async node => {
    if (node) {
      const styles = await window.getComputedStyle(node);
      setPrefixWidth(styles.width);
    }
  };

  return (
    <>
      <FullInputContainer prefix={prefix} className={className} label={label} helpText={help}>
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
          <InputWrapper prefix={prefix}>
            {prefix && (
              <InnerLabel
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
              disabled={disabled}
              prefix={prefix}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              tabIndex={tabIndex}
              {...other}
            ></Input>
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
  value: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'right']),
  labelIcon: PropTypes.node,
  prefix: PropTypes.string
};

InlineInputField.defaultProps = {
  value: '',
  textAlign: 'left',
  disabled: false,
  type: 'text'
};

InlineInputField.displayName = 'InlineInputField';

export default InlineInputField;
