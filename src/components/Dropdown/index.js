import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transform: translateY(${props => (props.isOpen ? '10px' : '0')});
  transition: all 300ms ease-in-out;
  position: fixed;
  min-width: 200px;
`;

const Dropdown = React.forwardRef((props, ref) => {
  const { children, label, ...other } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledDropdown {...other}>
      <StyledLabel onClick={() => setOpen(true)}>{label}</StyledLabel>
      <ChildrenContainer isOpen={isOpen}>{children}</ChildrenContainer>
    </StyledDropdown>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
