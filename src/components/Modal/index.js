import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import useTheme from '../../hooks/useTheme/index';
import defaultTheme from '../../themes/defaultTheme';
import { IconClose } from '../../icons';
import hexToRgba from '../../utils/hexToRgba';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  padding: 0 ${({ theme }) => theme.spacings.medium2};
  background: white;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  position: relative;
  max-width: 75vh;
  max-height: 90vh;
`;

StyledContainer.defaultProps = {
  theme: defaultTheme
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small4} 0 ${({ theme }) => theme.spacings.small3};
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
  margin: ${({ theme }) => theme.spacings.medium1} 0 ${({ theme }) => theme.spacings.medium2};
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacings.small4} 0 ${({ theme }) => theme.spacings.small4};
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
  open,
  ...other
}) => {
  const theme = useTheme();

  const ref = useOnclickOutside(() => enableClickOutside && onClose());

  return open ? (
    <StyledOverlay>
      <StyledContainer {...other} ref={ref}>
        {(header || closable) && (
          <StyledHeader>
            {header && <StyleHeading>{header}</StyleHeading>}
            {closable && (
              <button onClick={onClose}>
                <IconClose customColor={theme.color.charcoal600} />
              </button>
            )}
          </StyledHeader>
        )}
        <StyledContent>{children}</StyledContent>
        {footer && <StyledFooter>{footer}</StyledFooter>}
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
  open: PropTypes.bool.isRequired
};

export default Modal;
