import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';
import hexToRgba from '../../utils/hexToRgba';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import useTheme from '../../hooks/useTheme/index';

const StyledContainer = styled.div`
  background: white;
  border-radius: ${({ theme, isMobileOrTablet }) =>
    isMobileOrTablet
      ? `${theme.shapes.borderRadiusMedium} ${theme.shapes.borderRadiusMedium} 0 0`
      : theme.shapes.borderRadiusMedium};
  position: relative;
  width: 100%;
  max-width: ${({ isMobileOrTablet }) => (isMobileOrTablet ? '550px' : '75vw')};
  max-height: ${({ isMobileOrTablet }) => (isMobileOrTablet ? '75vh' : '90vh')};
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: ${({ isMobileOrTablet }) => (isMobileOrTablet ? 'auto' : 'fit-content')};
  ${({ isMobileOrTablet }) => isMobileOrTablet && 'width: 100vh'};
`;

StyledContainer.defaultProps = {
  theme: defaultTheme
};

const StyledHeader = styled.header`
  display: ${({ closable }) => (closable ? 'flex' : 'block')};
  justify-content: ${({ hasHeading }) => (hasHeading ? 'space-between' : 'flex-end')};
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small4} ${({ theme }) => theme.spacings.medium1}
    ${({ theme }) => theme.spacings.small3};
  border-bottom: 1px solid
    ${({ theme, hasHeading }) => (hasHeading ? theme.color.charcoal300 : 'transparent')};
`;

StyledHeader.defaultProps = {
  theme: defaultTheme
};

const StyleHeading = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.charcoal700};
`;

StyleHeading.defaultProps = {
  theme: defaultTheme
};

const StyledContent = styled.div`
  margin: ${({ theme, full }) => (full ? '0' : theme.spacings.medium1)} 0;
  padding: 0 ${({ theme, full }) => (full ? '0' : theme.spacings.small3)};
  overflow: auto;
  position: relative;
  height: 100%;
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.charcoal300};
  padding: ${({ theme }) =>
    `${theme.spacings.small4} ${theme.spacings.small3} ${theme.spacings.small4}`};
`;

StyledFooter.defaultProps = {
  theme: defaultTheme
};

const StyledOverlay = styled.div`
  background-color: ${({ theme, opacity }) => hexToRgba(theme.color.charcoal800, opacity)};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ zIndex }) => zIndex};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ isMobileOrTablet }) => (isMobileOrTablet ? 'flex-end' : 'center')};
`;

StyledOverlay.defaultProps = {
  theme: defaultTheme
};

const Modal = ({
  children,
  closable,
  enableClickOutside,
  footer,
  full,
  header,
  isOpen,
  onClose,
  opacity,
  zIndex,
  ...other
}) => {
  const theme = useTheme();

  const ref = useOnclickOutside(() => enableClickOutside && onClose());
  const prevBodyOverflowStyle = useRef(null);

  useEffect(() => {
    const overflow = document.body.scrollHeight > window.innerHeight;
    if (isOpen) {
      prevBodyOverflowStyle.current = document.body.style.overflowY;
      document.body.style.overflowY = overflow ? 'scroll' : '';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflowY = prevBodyOverflowStyle.current || '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isOpen]);

  const breakpoint = useBreakpoint();
  const isMobileOrTablet = breakpoint === 's' || breakpoint === 'm';

  return isOpen ? (
    <StyledOverlay zIndex={zIndex} opacity={opacity} isMobileOrTablet={isMobileOrTablet}>
      <StyledContainer {...other} ref={ref} isMobileOrTablet={isMobileOrTablet}>
        {(header && header.props.children) || closable ? (
          <StyledHeader hasHeading={header && header.props.children} closable={closable}>
            {header && header.props.children ? <StyleHeading>{header}</StyleHeading> : null}
            {closable ? (
              <button onClick={onClose}>
                <IconClose customColor={theme.color.charcoal600} />
              </button>
            ) : null}
          </StyledHeader>
        ) : null}
        <StyledContent full={full}>{children}</StyledContent>
        {footer && footer.props.children ? <StyledFooter>{footer}</StyledFooter> : null}
      </StyledContainer>
    </StyledOverlay>
  ) : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closable: PropTypes.bool,
  enableClickOutside: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  full: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  opacity: PropTypes.number
};

Modal.defaultProps = {
  full: false,
  closable: true,
  enableClickOutside: true,
  zIndex: 9999,
  opacity: 0.3
};
export default Modal;
