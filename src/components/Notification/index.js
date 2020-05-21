import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import IconSuccess from '../../icons/Success';
import IconError from '../../icons/Warning';
import IconInfo from '../../icons/Info';
import IconClose from '../../icons/Close';

const componentVariants = theme => ({
  normal: {
    color: theme.components.notificationNormalColor,
    backgroundColor: theme.components.notificationNormalBackgroundColor
  },
  success: {
    color: theme.components.notificationSuccessColor,
    backgroundColor: theme.components.notificationSuccessBackgroundColor
  },
  error: {
    color: theme.components.notificationErrorColor,
    backgroundColor: theme.components.notificationErrorBackgroundColor
  }
});

const variants = {
  normal: {
    icon: IconInfo
  },
  success: {
    icon: IconSuccess
  },
  error: {
    icon: IconError
  }
};

const StyledNotification = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-radius: ${props => props.theme.components.notificationBorderRadius};
  box-sizing: border-box;
  padding: ${props => props.theme.components.notificationPadding};

  ${props => componentVariants(props.theme)[props.variant]}
`;
StyledNotification.defaultProps = {
  theme: defaultTheme
};

const StyledMessage = styled.div`
  font-family: ${props => props.theme.global.fontFamilyRegular};
  font-size: 14px;
  line-height: 24px;
  width: 100%;
`;
StyledMessage.defaultProps = {
  theme: defaultTheme
};

const StyledIcon = styled.div`
  margin-right: 11px;
`;
StyledIcon.defaultProps = {
  theme: defaultTheme
};

const StyledCloseButton = styled.button`
  background: none;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.components.notificationCloseButtonColor};
  text-align: center;
  padding: 0;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme
};

const Notification = props => {
  const { showIcon, icon, variant, children, closable, onClose } = props;

  const DefaultIcon = variants[variant].icon;
  return (
    <StyledNotification variant={variant}>
      {showIcon && <StyledIcon>{icon || <DefaultIcon size="medium" />}</StyledIcon>}
      <StyledMessage>{children}</StyledMessage>
      {closable && (
        <StyledCloseButton onClick={onClose}>
          <IconClose size="medium" />
        </StyledCloseButton>
      )}
    </StyledNotification>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['normal', 'success', 'error']),
  showIcon: PropTypes.bool,
  icon: PropTypes.node,
  closable: PropTypes.bool
};

Notification.defaultProps = {
  variant: 'normal',
  showIcon: false,
  closable: false
};

Notification.displayName = 'Notification';

export default Notification;
