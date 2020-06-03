import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transform: translate(${props => (props.isOpen ? '10px, 10px' : '10px, 0')});
  transition: ${props => props.theme.global.transition};
  position: fixed;
  min-width: 200px;
`;

ChildrenContainer.defaultProps = {
  theme: defaultTheme
};

const Dropdown = ({ children, label, autoClose, ...other }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef();

  useOnclickOutside(ref, () => {
    if (autoClose) return;
    setOpen(false);
  });

  return (
    <StyledDropdown {...other} ref={ref}>
      <StyledLabel onClick={() => setOpen(!isOpen)}>{label}</StyledLabel>
      <ChildrenContainer isOpen={isOpen}>{children}</ChildrenContainer>
    </StyledDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  autoClose: true
};

export default Dropdown;
