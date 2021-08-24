import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const REGEX_PATTERN_NUMBER = 'd+(.d*)?';

const MinMaxInput = styled.input`
  ${({ theme, size }) => (size === 'medium' ? theme.texts.p2b : theme.texts.p1b)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal400};
  color: ${({ theme }) => theme.color.charcoal800};
  background-color: transparent;
  text-align: center;
  width: ${({ valueLength }) => `calc(${valueLength}ch + 15px)`};
  box-sizing: initial;
  padding: 0 ${({ theme }) => theme.spacings.small1};
  border-radius: 0;
  height: 100%;

  .prefix {
    order: -1;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary500};
    background-color: ${({ theme }) => theme.color.primary100};

    ~ span {
      border-color: ${({ theme }) => theme.color.primary500};
      background-color: ${({ theme }) => theme.color.primary100};
    }
  }
`;

MinMaxInput.defaultProps = {
  theme: defaultTheme
};

const InputFormatter = ({
  isEditing,
  toggleEditing,
  name,
  value,
  format,
  size,
  handleBlur,
  handleKeyDown
}) => {
  const getValueLength = value => {
    return value || !isNaN(value) ? value.toString().length : 0;
  };

  const [inputValue, setInputValue] = useState(value);
  const onChange = event => {
    if (isNaN(event.target.value)) return;
    setInputValue(Number(event.target.value));
  };

  useEffect(() => {
    if (isEditing) {
      setInputValue(value);
    } else {
      setInputValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  return isEditing ? (
    <>
      <MinMaxInput
        name={name}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        pattern={REGEX_PATTERN_NUMBER}
        type="text"
        size={size}
        value={Number(inputValue)}
        valueLength={getValueLength(value)}
      />
    </>
  ) : (
    <>
      <MinMaxInput
        type="text"
        size={size}
        value={format(value)}
        valueLength={getValueLength(format(value))}
        onClick={() => toggleEditing(true)}
        readOnly
      />
    </>
  );
};

export default InputFormatter;
