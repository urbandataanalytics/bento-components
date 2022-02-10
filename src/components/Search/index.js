import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import IconSearch from '../../icons/Search/index';
import IconClose from '../../icons/Close/index';
import useTheme from '../../hooks/useTheme/index';

const StyledContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 24px 1fr auto;
  align-items: center;
  padding: 16px 24px;
  box-shadow: 0 8px 16px rgba(54, 60, 75, 0.1);
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacings.small3};
`;

const StyledSeparator = styled.i`
  margin: 0 ${({ theme }) => theme.spacings.small3};
  height: 16px;
  width: 1px;
  background-color: ${({ theme }) => theme.color.charcoal400};
`;

const StyledHeading = styled.h5`
  color: ${({ theme }) => theme.color.charcoal600};
`;

const Input = styled.input`
  outline: 0;
  transition: ${({ theme }) => theme.global.transitionM};
  border: 0 solid transparent;
  ${({ theme }) => theme.texts.p1b};
  color: ${({ theme }) => theme.color.charcoal600};
  white-space: nowrap;
  text-indent: 4px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.charcoal400};
    transition: color 300ms ease-in-out;
  }
`;

const Search = ({
  className,
  closable,
  disabled,
  enableClickOutside = true,
  leftContent,
  name,
  onChange,
  onClose,
  placeholder,
  tabIndex,
  value,
  ...other
}) => {
  const ref = useOnclickOutside(() => enableClickOutside && onClose());
  const theme = useTheme();

  const handleKeyDown = event => event.keyCode === 27 && onClose();

  return (
    <StyledContainer>
      <IconSearch customColor={theme.color.charcoal600} />
      <StyledWrapper>
        {leftContent ? <StyledHeading>{leftContent}</StyledHeading> : null}
        {leftContent ? <StyledSeparator /> : null}
        <Input
          type="text"
          disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          tabIndex={tabIndex}
          ref={ref}
          {...other}
        />
      </StyledWrapper>
      {closable ? (
        <button type="button" onClick={onClose}>
          <IconClose customColor={theme.color.charcoal600} />
        </button>
      ) : null}
    </StyledContainer>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  closable: PropTypes.bool,
  disabled: PropTypes.bool,
  enableClickOutside: PropTypes.bool,
  leftContent: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string
};

Search.defaultProps = {
  value: '',
  disabled: false,
  closable: true
};

Search.displayName = 'Search';

export default Search;
