import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const LabelText = styled.p`
  font-size: ${({ theme }) => theme.components.textareaFieldLabelFontSize};
  color: ${({ theme }) => theme.components.textareaFieldLabelColor};
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const HelpText = styled.small`
  padding-top: 4px;
  display: block;
  font-size: ${({ theme }) => theme.components.textareaFieldHelpFontSize};
  min-height: 25px;
  color: ${({ theme }) => theme.components.textareaFieldHelpColor};
  &.error {
    color: ${({ theme }) => theme.components.textareaFieldErrorHelpColor};
  }
`;

HelpText.defaultProps = {
  theme: defaultTheme
};

export const Textarea = styled.textarea`
  resize: ${({ resize }) => resize};
  min-height: 100px;
  appearance: none;
  outline: 0;
  padding: ${({ theme }) => theme.components.textareaFieldPadding};
  font-family: ${props => props.theme.global.fontFamily};
  font-size: ${({ theme }) => theme.components.textareaFieldFontSize};
  line-height: ${({ theme }) => theme.components.textareaFieldLineHeight};
  border-radius: ${({ theme }) => theme.components.textareaFieldBorderRadius};
  border-width: 1px;
  border-style: solid;
  transition: ${({ theme }) => theme.global.transitionM};
  background-color: ${({ theme }) => theme.components.textareaFieldBackgroundColor};
  border-color: ${({ theme }) => theme.components.textareaFieldBorderColor};

  + button {
    position: absolute;
    right: 0;
    bottom: -2px;
    cursor: pointer;
    padding: 16px;

    /* Safari 11+ */
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) and (stroke-color: transparent) {
        bottom: 2px;
      }
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.components.textareaFieldPlaceholderColor};
    transition: color 300ms ease-in-out;
  }

  &.error {
    background-color: ${({ theme }) => theme.components.textareaFieldErrorBackgroundColor};
    border-color: ${({ theme }) => theme.components.textareaFieldErrorBorderColor};

    &::placeholder {
      color: ${({ theme }) => theme.components.textareaFieldErrorPlaceholderColor};
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.components.textareaFieldPlaceholderColor};
    }
  }

  &:focus {
    background-color: ${({ theme }) => theme.components.textareaFieldFocusBackgroundColor};
    border-color: ${({ theme }) => theme.components.textareaFieldFocusBorderColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.textareaFieldFocusLabelColor};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.textareaFieldDisabledBackgroundColor};
    border-color: ${({ theme }) => theme.components.textareaFieldDisabledBorderColor};
    color: ${({ theme }) => theme.components.textareaFieldDisabledColor};

    + ${LabelText} {
      color: ${({ theme }) => theme.components.textareaFieldDisabledLabelColor};
    }
  }
`;

Textarea.defaultProps = {
  theme: defaultTheme
};

const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

Label.defaultProps = {
  theme: defaultTheme
};

const SubContainer = styled.div`
  display: flex;
  justify-content: ${({ help }) => (help ? 'space-between' : 'flex-end')};
  width: 100%;
`;

const TextareaField = React.forwardRef((props, ref) => {
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
    value,
    maxlength,
    counter,
    resize,
    ...other
  } = props;

  return (
    <div className={className}>
      <Label>
        <Textarea
          className={error ? `error` : null}
          resize={resize}
          disabled={disabled}
          value={value.length < maxlength ? value : value.slice(0, maxlength)}
          name={name}
          placeholder={placeholder}
          tabIndex={tabIndex}
          onChange={onChange}
          ref={ref}
          {...other}
        />
        {label && <LabelText disabled={disabled}>{label}</LabelText>}
      </Label>
      <SubContainer help={help}>
        {help && <HelpText className={error ? 'error' : null}>{help}</HelpText>}
        {maxlength && counter && (
          <HelpText>
            {value.length < maxlength ? value.length : maxlength}/{maxlength}
          </HelpText>
        )}
      </SubContainer>
    </div>
  );
});

TextareaField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  maxlength: PropTypes.number,
  counter: PropTypes.bool,
  resize: PropTypes.oneOf(['vertical', 'none', 'vertical', 'initial', 'horizontal', 'both'])
};

TextareaField.defaultProps = {
  value: '',
  disabled: false,
  counter: true,
  resize: 'vertical'
};

TextareaField.displayName = 'TextareaField';

export default TextareaField;
