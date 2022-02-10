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
    backgroundColor: theme.components.notificationNormalBackgroundColor,
    borderColor: theme.components.notificationNormalBorderColor
  },
  success: {
    color: theme.components.notificationSuccessColor,
    backgroundColor: theme.components.notificationSuccessBackgroundColor,
    borderColor: theme.components.notificationSuccessBorderColor
  },
  error: {
    color: theme.components.notificationErrorColor,
    backgroundColor: theme.components.notificationErrorBackgroundColor,
    borderColor: theme.components.notificationErrorBorderColor
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

const StyledNotification = styled.aside`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-radius: ${props => props.theme.components.notificationBorderRadius};
  box-sizing: border-box;
  padding: ${props => props.theme.components.notificationPadding};
  border: 1px solid transparent;
  ${props => componentVariants(props.theme)[props.variant]}
`;
StyledNotification.defaultProps = {
  theme: defaultTheme
};

const StyledMessage = styled.div`
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightRegular};
  font-size: 14px;
  line-height: 24px;
  margin-right: ${props => props.theme.components.notificationPadding};
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
  const { children, closable, icon, onClose, showIcon, variant } = props;

  const DefaultIcon = variants[variant].icon;
  return (
    <StyledNotification variant={variant}>
      {showIcon ? <StyledIcon>{icon || <DefaultIcon size="medium" />}</StyledIcon> : null}
      <StyledMessage>{children}</StyledMessage>
      {closable ? (
        <StyledCloseButton onClick={onClose}>
          <IconClose size="medium" />
        </StyledCloseButton>
      ) : null}
    </StyledNotification>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
  closable: PropTypes.bool,
  icon: PropTypes.node,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  variant: PropTypes.oneOf(['normal', 'success', 'error']).isRequired
};

Notification.defaultProps = {
  variant: 'normal',
  showIcon: false,
  closable: false
};

Notification.displayName = 'Notification';

export default Notification;
