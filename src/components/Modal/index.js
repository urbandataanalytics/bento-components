import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import useTheme from '../../hooks/useTheme/index';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';
import hexToRgba from '../../utils/hexToRgba';

const StyledContainer = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  position: relative;
  max-width: 75vw;
  max-height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: fit-content;
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

const StyleHeading = styled.h3`
  color: ${({ theme }) => theme.color.charcoal700};
`;

StyleHeading.defaultProps = {
  theme: defaultTheme
};

const StyledContent = styled.div`
  margin: ${({ theme, full }) => (full ? '0' : theme.spacings.medium1)} 0;
  padding: 0 ${({ theme, full }) => (full ? '0' : theme.spacings.small3)};
  overflow: hidden;
  position: relative;
  height: 100%;
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacings.small4} ${({ theme }) => theme.spacings.small3}
    ${({ theme }) => theme.spacings.small4};
`;

StyledFooter.defaultProps = {
  theme: defaultTheme
};

const StyledOverlay = styled.div`
  background-color: ${({ theme }) => hexToRgba(theme.color.charcoal800, 0.2)};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledOverlay.defaultProps = {
  theme: defaultTheme
};

const Modal = ({
  children,
  closable = true,
  enableClickOutside = true,
  footer,
  header,
  onClose,
  isOpen,
  full = false,
  ...other
}) => {
  const theme = useTheme();

  const ref = useOnclickOutside(() => enableClickOutside && onClose());
  const prevBodyOverflowStyle = useRef(null);

  useEffect(() => {
    if (isOpen) {
      prevBodyOverflowStyle.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = prevBodyOverflowStyle.current || '';
    };
  }, [isOpen]);

  return isOpen ? (
    <StyledOverlay>
      <StyledContainer {...other} ref={ref}>
        {((header && header.props.children) || closable) && (
          <StyledHeader hasHeading={header && header.props.children} closable={closable}>
            {header && header.props.children && <StyleHeading>{header}</StyleHeading>}
            {closable && (
              <button onClick={onClose}>
                <IconClose customColor={theme.color.charcoal600} />
              </button>
            )}
          </StyledHeader>
        )}
        <StyledContent full={full}>{children}</StyledContent>
        {footer && footer.props.children && <StyledFooter>{footer}</StyledFooter>}
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
  isOpen: PropTypes.bool.isRequired
};

export default Modal;
