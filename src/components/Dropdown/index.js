import React, { useEffect, useRef, useState } from 'react';
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
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
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
  z-index: ${({ zIndex }) => zIndex};
  animation: ${({ theme }) => theme.animations.dropDownDisplay} 125ms
    cubic-bezier(0.73, 0.005, 0.22, 1);
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
    windowWidth,
    windowHeight
  } = dimensions;

  let top = 0;
  let left = 0;

  const bottomPosition = containerTop + containerHeight + 10;
  const topPosition = containerTop - popperHeight - 10;

  if (position === 'bottom') {
    top = bottomPosition + popperHeight > windowHeight ? topPosition : bottomPosition;
  } else {
    top = topPosition <= 0 ? bottomPosition : topPosition;
  }

  if (align === 'left') {
    left = containerLeft;
    if (left <= DROPDOWN_OFFSET) {
      left = DROPDOWN_OFFSET;
    }
    if (left + popperWidth >= windowWidth - DROPDOWN_OFFSET) {
      left = windowWidth - popperWidth - DROPDOWN_OFFSET;
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
  align,
  children,
  closeOnClickInside,
  closeOnClickOutside,
  isOpen,
  label,
  onChange = () => {},
  position,
  zIndex,
  portalClassName,
  portalStyle,
  disabled,
  ...other
}) => {
  const [isDropdownOpen, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const container = useRef(null);
  const dropdown = useRef(null);
  const content = useRef(null);

  useOnclickOutside(
    () => {
      if (!closeOnClickOutside) return;
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
    isDropdownOpen
  );
  let dropdownPosition = calculatePosition(align, position, dimensions);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dropdownPosition = calculatePosition(align, position, dimensions);
  }, [isDropdownOpen]);

  useEffect(() => {
    onChange(isDropdownOpen);
  }, [onChange, isDropdownOpen]);

  return (
    <StyledDropdown {...other} ref={container}>
      <StyledLabel
        disabled={disabled}
        onClick={() => {
          if (disabled) {
            return;
          }
          setOpen(!isDropdownOpen);
        }}
      >
        {label}
      </StyledLabel>
      {isDropdownOpen ? (
        <Portal renderInto="dropdowns">
          <ChildrenContainer
            zIndex={zIndex}
            isOpen={isDropdownOpen}
            ref={dropdown}
            style={{ ...dropdownPosition, ...portalStyle }}
            onClick={() => (closeOnClickInside ? setOpen(false) : null)}
            className={portalClassName}
          >
            <div ref={content}>{children}</div>
          </ChildrenContainer>
        </Portal>
      ) : null}
    </StyledDropdown>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  closeOnClickInside: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  position: PropTypes.oneOf(['top', 'bottom']),
  portalClassName: PropTypes.string,
  portalStyle: PropTypes.object,
  zIndex: PropTypes.number
};

Dropdown.defaultProps = {
  closeOnClickOutside: true,
  isOpen: false,
  disabled: false,
  closeOnClickInside: false,
  position: 'bottom',
  align: 'left',
  zIndex: 10
};

export default Dropdown;
