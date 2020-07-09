import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';

const transforms = {
  right: 'translateX(100%)',
  left: 'translateX(-100%)'
};

const StyledDrawerOverlay = styled.div`
  display: flex;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

StyledDrawerOverlay.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerSide = styled.aside`
  display: block;
  position: fixed;
  box-sizing: border-box;
  z-index: 4;
  top: 0;
  ${({ position }) => position === 'right' && 'right: 0'};
  ${({ position }) => position === 'left' && 'left: 0'};
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: ${({ theme, width }) => width || theme.components.drawerMaxWidth};
  background-color: ${({ theme }) => theme.components.drawerBackgroundColor};
  transition: transform 0.3s ease-in-out;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop}`};
  ${({ offsetBottom }) => offsetBottom && `margin-bottom: ${offsetBottom}`};
  ${({ offsetLeft }) => offsetLeft && `margin-left: ${offsetLeft}`};
  ${({ offsetRight }) => offsetRight && `margin-right: ${offsetRight}`};
  ${props =>
    props.position === 'right'
      ? `border-left: ${props.theme.components.drawerBorder}`
      : `border-right: ${props.theme.components.drawerBorder}`};
  transform: ${props => (props.open ? 'translateX(0)' : transforms[props.position])};
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerHeader = styled.header`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.components.drawerHeaderPadding};
  border-bottom: ${({ theme }) => theme.components.drawerHeaderBorder};
  min-height: ${({ theme }) => theme.components.drawerHeaderMinHeight};
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
  padding: ${({ theme }) => theme.components.drawerCloseButtonPadding};
  background: ${({ theme }) => theme.components.drawerCloseButtonBackground};
  border-radius: ${({ theme }) => theme.components.drawerCloseButtonBorderRadius};
  border: ${({ theme }) => theme.components.drawerCloseButtonBorder};
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme
};

const Drawer = props => {
  const {
    open,
    position,
    size,
    header,
    subHeader,
    showOverlay,
    onClose,
    children,
    width,
    offsetTop,
    offsetLeft,
    offsetRight,
    offsetBottom,
    ...other
  } = props;

  const DrawerContent = (
    <StyledDrawerSide
      size={size}
      position={position}
      open={open}
      width={width}
      offsetTop={offsetTop}
      offsetLeft={offsetLeft}
      offsetRight={offsetRight}
      offsetBottom={offsetBottom}
      {...other}
    >
      <StyledDrawerHeader>
        <StyleHeading>
          {header}
          <StyleSubHeading>{subHeader}</StyleSubHeading>
        </StyleHeading>

        <CloseButton onClick={onClose}>
          <IconClose size={'small'} />
        </CloseButton>
      </StyledDrawerHeader>
      <StyledDrawerContent>{children}</StyledDrawerContent>
    </StyledDrawerSide>
  );

  return showOverlay ? (
    <StyledDrawerOverlay open={open}>{DrawerContent}</StyledDrawerOverlay>
  ) : (
    DrawerContent
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  subHeader: PropTypes.node,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  showOverlay: PropTypes.bool,
  width: PropTypes.string,
  offsetTop: PropTypes.string,
  offsetLeft: PropTypes.string,
  offsetRight: PropTypes.string,
  offsetBottom: PropTypes.string
};

export default Drawer;
