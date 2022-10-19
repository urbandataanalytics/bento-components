import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';

const transformsClose = {
  right: 'translateX(100%)',
  left: 'translateX(-100%)',
  bottom: 'translateY(100%)'
};

const transformsOpen = {
  right: 'translateX(0%)',
  left: 'translateX(0%)',
  bottom: 'translateY(0%)'
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
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

StyledDrawerOverlay.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerHeader = styled.header`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.components.drawerHeaderPadding};
  border-bottom: ${({ theme }) => theme.components.drawerHeaderBorder};
  min-height: ${({ theme }) => theme.components.drawerHeaderMinHeight};
  ${({ headerColor }) => (headerColor ? `background-color: ${headerColor}` : ``)}
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme
};

const StyleHeading = styled.div`
  ${({ theme }) => theme.texts.p1b};
  color: ${({ theme }) => theme.components.drawerHeaderColor};
`;

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
  position: absolute;
  z-index: 1;
  right: ${({ theme }) => theme.spacings.small3};
  top: ${({ theme }) => theme.spacings.small3};
  padding: ${({ theme }) => theme.components.drawerCloseButtonPadding};
  background: ${({ theme }) => theme.components.drawerCloseButtonBackground};
  border-radius: ${({ theme }) => theme.components.drawerCloseButtonBorderRadius};
  border: ${({ theme }) => theme.components.drawerCloseButtonBorder};
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerContent = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  flex-grow: 1;
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme
};

const StyledDrawerSide = styled.aside`
  position: fixed;
  box-sizing: border-box;
  z-index: 5;

  ${({ position, theme, width }) =>
    position === 'right' &&
    css`
      top: 0;
      right: 0;
      width: 100%;
      max-width: ${width ? width : theme.components.drawerMaxWidth};
    `};
  ${({ position, theme, width }) =>
    position === 'left' &&
    css`
      top: 0;
      left: 0;
      width: 100%;
      max-width: ${width ? width : theme.components.drawerMaxWidth};
    `};
  ${({ position, theme, height, width }) =>
    position === 'bottom' &&
    css`
      left: ${width ? 'auto' : theme.spacings.small3};
      right: ${width ? 'auto' : theme.spacings.small3};
      width: ${width ? width : `calc(100% - ${theme.spacings.small3} * 2)`};
      margin: 0 auto;
      max-height: ${height ? height : theme.components.drawerMaxHeight};
      border-top: ${theme.components.drawerBorder};
      border-right: ${theme.components.drawerBorder};
      border-left: ${theme.components.drawerBorder};
      border-radius: ${theme.components.drawerBorderRadius} ${theme.components.drawerBorderRadius} 0
        0;
    `};
  bottom: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.components.drawerBackgroundColor};
  transition: transform 0.3s ease-in-out;
  overflow: auto;
  display: flex;
  flex-direction: column;
  ${({ offsetTop }) => offsetTop && `height: calc(100% - ${offsetTop})`};
  ${({ offsetBottom }) => offsetBottom && `height: calc(100% + ${offsetBottom})`};
  ${({ offsetBottom }) => offsetBottom && `margin-bottom: ${offsetBottom}`};
  ${({ offsetLeft }) => offsetLeft && `margin-left: ${offsetLeft}`};
  ${({ offsetRight }) => offsetRight && `margin-right: ${offsetRight}`};
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop}`};
  ${({ theme, offsetTop }) => offsetTop && `border-top: ${theme.components.drawerBorder}`};
  ${props =>
    props.position === 'right'
      ? `border-left: ${props.theme.components.drawerBorder}`
      : `border-right: ${props.theme.components.drawerBorder}`};
  transform: ${props =>
    props.open ? transformsOpen[props.position] : transformsClose[props.position]};
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme
};

const Drawer = props => {
  const {
    children,
    closeButton,
    header,
    headerColor,
    offsetBottom,
    offsetLeft,
    offsetRight,
    offsetTop,
    onClose,
    open,
    position,
    showOverlay,
    size,
    subHeader,
    width,
    height,
    ...other
  } = props;

  return (
    <>
      {showOverlay && <StyledDrawerOverlay open={open} onClick={onClose} />}
      <StyledDrawerSide
        position={position}
        open={open}
        width={width}
        height={height}
        offsetTop={offsetTop}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        offsetBottom={offsetBottom}
        {...other}
      >
        {header && (
          <StyledDrawerHeader headerColor={headerColor}>
            <div>
              <StyleHeading>{header}</StyleHeading>
              <StyleSubHeading>{subHeader}</StyleSubHeading>
            </div>
          </StyledDrawerHeader>
        )}
        <StyledDrawerContent>{children}</StyledDrawerContent>
        {closeButton ? (
          <CloseButton onClick={onClose}>
            <IconClose size={'small'} />
          </CloseButton>
        ) : null}
      </StyledDrawerSide>
    </>
  );
};

Drawer.defaultProps = {
  closeButton: true
};
Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  offsetBottom: PropTypes.string,
  offsetLeft: PropTypes.string,
  offsetRight: PropTypes.string,
  offsetTop: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'bottom']).isRequired,
  showOverlay: PropTypes.bool,
  subHeader: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  closeButton: PropTypes.bool,
  headerColor: PropTypes.string
};

export default Drawer;
