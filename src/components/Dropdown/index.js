import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';
import useDimensions from '../../hooks/useDimensions';
import Portal from '../Portal/index';

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;

StyledDropdown.defaultProps = {
  theme: defaultTheme
};

const StyledLabel = styled.div`
  cursor: pointer;
  height: 100%;
`;

const ChildrenContainer = styled.div`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  position: absolute;
  min-width: 200px;
  border: 1px solid ${props => props.theme.components.dropdownBorderColor};
  box-shadow: ${props => props.theme.components.dropdownBoxShadow};
  border-radius: ${props => props.theme.components.dropdownBorderRadius};
  background: ${props => props.theme.components.dropdownBackground};
  padding: ${props => props.theme.components.dropdownPadding};
  z-index: 10;
`;

ChildrenContainer.defaultProps = {
  theme: defaultTheme
};

const DROPDOWN_OFFSET = 8;

const calculatePosition = (align, position, dimensions) => {
  const {
    containerHeight,
    containerLeft,
    containerTop,
    containerWidth,
    popperHeight,
    popperWidth,
    windowWidth
  } = dimensions;

  let top = 0;
  let left = 0;

  top =
    position === 'bottom' ? containerTop + containerHeight + 10 : containerTop - popperHeight - 10;
  if (align === 'left') {
    left = containerLeft;
    if (left <= DROPDOWN_OFFSET) {
      left = DROPDOWN_OFFSET;
    }
  } else if (align === 'center') {
    left = containerLeft + containerWidth / 2 - popperWidth / 2;
  } else if (align === 'right') {
    left = containerLeft + containerWidth - popperWidth;
    if (left + popperWidth >= windowWidth - DROPDOWN_OFFSET) {
      left = windowWidth - popperWidth - DROPDOWN_OFFSET;
    }
  }

  return { top, left };
};

const Dropdown = ({
  children,
  label,
  autoClose,
  align,
  position,
  onChange = () => {},
  ...other
}) => {
  const [isOpen, setOpen] = useState(false);

  const container = useRef(null);
  const dropdown = useRef(null);
  const content = useRef(null);

  useOnclickOutside(
    () => {
      if (!autoClose) return;
      setOpen(false);
    },
    {
      refs: [container, dropdown]
    }
  );

  const dimensions = useDimensions(
    { container, popper: dropdown, content },
    children,
    container,
    isOpen
  );
  let dropdownPosition = calculatePosition(align, position, dimensions);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dropdownPosition = calculatePosition(align, position, dimensions);
  }, [isOpen]);

  useEffect(() => {
    onChange(isOpen);
  }, [onChange, isOpen]);

  return (
    <StyledDropdown {...other} ref={container}>
      <StyledLabel onClick={() => setOpen(!isOpen)}>{label}</StyledLabel>
      {isOpen && (
        <Portal renderInto="dropdowns">
          <ChildrenContainer isOpen={isOpen} ref={dropdown} style={dropdownPosition}>
            <div ref={content}>{children}</div>
          </ChildrenContainer>
        </Portal>
      )}
    </StyledDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  align: PropTypes.oneOf(['right', 'center', 'left']),
  autoClose: PropTypes.bool
};

Dropdown.defaultProps = {
  autoClose: true,
  position: 'bottom',
  align: 'left'
};

export default Dropdown;
