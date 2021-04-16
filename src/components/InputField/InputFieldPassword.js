import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '../../icons';
import useTheme from '../../hooks/useTheme/index';
import { Input } from './index.js';

const InputFieldPassword = React.forwardRef((props, ref) => {
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

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = e => {
    e.preventDefault();
    setPasswordVisibility(!isPasswordVisible);
  };

  const theme = useTheme();

  return (
    <>
      <Input
        className={error ? `error` : null}
        type={isPasswordVisible ? 'text' : 'password'}
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        tabIndex={tabIndex}
        ref={ref}
        {...other}
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {isPasswordVisible ? (
          <IconEyeOff customColor={theme.color.charcoal500} />
        ) : (
          <IconEye customColor={theme.color.primary500} />
        )}
      </button>
    </>
  );
});

export default InputFieldPassword;
