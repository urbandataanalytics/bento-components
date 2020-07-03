import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;

StyledDropdown.defaultProps = {
  theme: defaultTheme
};

const StyledLabel = styled.label`
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.isOpen ? '10px' : '0')});
  transition: ${props => props.theme.global.transitionM};
  position: absolute;
  min-width: 200px;
  border: 1px solid ${props => props.theme.components.dropdownBorderColor};
  box-shadow: ${props => props.theme.components.dropdownBoxShadow};
  border-radius: ${props => props.theme.components.dropdownBorderRadius};
  background: ${props => props.theme.components.dropdownBackground};
  padding: ${props => props.theme.components.dropdownPadding};
  ${props => `${props.position}: 8px`};
  z-index: 1;
`;

ChildrenContainer.defaultProps = {
  theme: defaultTheme
};

const Dropdown = ({ children, label, autoClose, position, onChange = () => {}, ...other }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef();

  useOnclickOutside(ref, () => {
    if (!autoClose) return;
    setOpen(false);
  });

  useEffect(() => {
    onChange(isOpen);
  }, [onChange, isOpen]);

  return (
    <StyledDropdown {...other} ref={ref}>
      <StyledLabel onClick={() => setOpen(!isOpen)}>{label}</StyledLabel>
      <ChildrenContainer isOpen={isOpen} position={position}>
        {children}
      </ChildrenContainer>
    </StyledDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  autoClose: true,
  position: 'left'
};

export default Dropdown;
