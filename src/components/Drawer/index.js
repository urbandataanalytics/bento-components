import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';

const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)'
};

const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0
  }
};

const StyledDrawerOverlay = styled.div`
  // display: flex;
  // visibility: ${props => (props.open ? 'visible' : 'hidden')};
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // width: 100%;
  // height: 100%;
  // z-index: 999;
  // max-width: 320px;
  
  
  //position: fixed;
  //position: absolute;
  //top: 0;
  //right: 0;
  //bottom: 0;
  //left: 0;
  //z-index: 8;
`;
// display: ${props => (props.open ? null : 'none')};

StyledDrawerOverlay.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerSide = styled.aside`
  display: block;
  position: absolute;
  box-sizing: border-box;
  z-index: 16;
  top: 0;
  ${({ position }) => position === 'right' && 'right: 0'};
  ${({ position }) => position === 'left' && 'left: 0'};
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 320px;
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.position === 'right'
      ? 'border-left: 1px solid #EFF2F7'
      : 'border-right: 1px solid #EFF2F7'};

  transform: translate3d(0px, 0px, 0px);
`;

// transform: ${props => (!props.open ? transforms[props.position] : null)};
// ${props => placements[props.position]}

StyledDrawerSide.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerHeader = styled.header`
  padding: 17px 24px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eff2f7; //charcoal300
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme
};

const StyleHeading = styled.div``;

StyleHeading.defaultProps = {
  theme: defaultTheme
};

const StyleSubHeading = styled.div`
  display: block;
`;

StyleSubHeading.defaultProps = {
  theme: defaultTheme
};

const CloseButton = styled.button`
  margin-left: auto;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dcdfe6; //charcoal400
  box-sizing: border-box;
  border-radius: 4px;
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerContent = styled.div``;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme
};

const Drawer = props => {
  const { open, position, size, header, subHeader, onClose, children, ...other } = props;

  return (
    <StyledDrawerOverlay open={open}>
      <StyledDrawerSide size={size} position={position} open={open} {...other}>
        <StyledDrawerHeader>
          <StyleHeading>
            {header}
            <StyleSubHeading>{subHeader}</StyleSubHeading>
          </StyleHeading>

          <CloseButton onClick={onClose}>
            <IconClose size={'medium'} />
          </CloseButton>
        </StyledDrawerHeader>
        <StyledDrawerContent>{children}</StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawerOverlay>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

// StyledDrawer;
export default Drawer;
