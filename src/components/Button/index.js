import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DefaultTheme from '../../themes/defaultTheme';
import Loader from './Loader/';

const componentSizes = theme => ({
  medium: {
    padding: theme.components.buttonPaddingMedium,
    fontSize: theme.components.buttonFontSizeMedium,
    minWidth: theme.components.buttonMinWidthMedium
  },
  large: {
    padding: theme.components.buttonPaddingLarge,
    fontSize: theme.components.buttonFontSizeLarge,
    minWidth: theme.components.buttonMinWidthLarge
  }
});

const componentVariants = theme => ({
  primary: {
    color: theme.components.buttonPrimaryColor,
    backgroundColor: theme.components.buttonPrimaryBackgroundColor,
    borderRadius: theme.components.buttonPrimaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonPrimaryHoverBackgroundColor,
      color: theme.components.buttonPrimaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonPrimaryDisabledBackgroundColor
    }
  },
  secondary: {
    color: theme.components.buttonSecondaryColor,
    backgroundColor: theme.components.buttonSecondaryBackgroundColor,
    borderColor: theme.components.buttonSecondaryBorderColor,
    borderRadius: theme.components.buttonSecondaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonSecondaryHoverBackgroundColor,
      borderColor: theme.components.buttonSecondaryHoverBorderColor,
      color: theme.components.buttonSecondaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonSecondaryDisabledBackgroundColor,
      borderColor: theme.components.buttonSecondaryDisabledBorderColor,
      color: theme.components.buttonSecondaryDisabledColor
    }
  }
});

const StyledButton = styled.button`
  border-width: ${props => (props.variant === 'secondary' ? '1px' : 0)};
  border-style: solid;
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightMedium};
  outline: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.global.transitionM};
  position: relative;
  overflow: hidden;

  &:after{
    content: "";
    background: rgba(255,255,255,0.3);
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 500px;
    height: 500px;
    margin: auto;
    opacity: 0;
    transition: all 1s ease-in-out;
  }

  &:active:after {
    height: 1px;
    width: 1px;
    opacity: 1;
    transition: 0s;
  }


  &:disabled {
    cursor: default;
  }

  ${props => (props.block ? 'width: 100%;' : '')}
  ${props => componentSizes(props.theme)[props.size]}
  ${props => componentVariants(props.theme)[props.variant]}
`;

const IconWrapper = styled.span`
  margin: ${props => (props.direction === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
  & > svg {
    width: ${props => (props.size === 'large' ? '18px' : '15px')};
    height: ${props => (props.size === 'large' ? '18px' : '15px')};
    path {
      ${props =>
        props.disabled
          ? `fill: ${
              props.variant === 'primary'
                ? props.theme.color.white
                : props.theme.components.buttonSecondaryDisabledColor
            } ;`
          : null}
    }
  }
`;

const StyledContent = styled.span``;

const Button = React.forwardRef((props, ref) => {
  const {
    block,
    children,
    className,
    disabled,
    iconLeft,
    iconRight,
    size,
    tabIndex,
    loading,
    loadingText,
    variant,
    ...other
  } = props;

  return (
    <StyledButton
      block={block}
      className={className}
      disabled={loading || disabled}
      ref={ref}
      size={size}
      tabIndex={tabIndex}
      variant={variant}
      {...other}
    >
      <Loader loading={loading} loadingText={loadingText} />
      {iconLeft && (
        <IconWrapper variant={variant} disabled={disabled} direction="left" size={size}>
          {iconLeft}
        </IconWrapper>
      )}
      <StyledContent>{children}</StyledContent>
      {iconRight && (
        <IconWrapper variant={variant} disabled={disabled} direction="right" size={size}>
          {iconRight}
        </IconWrapper>
      )}
    </StyledButton>
  );
});

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['medium', 'large']),
  tabIndex: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary'])
};
// Quitar opción "normal" de aquí? - No aplica ningun efecto

StyledButton.defaultProps = {
  theme: DefaultTheme
};

IconWrapper.defaultProps = {
  theme: DefaultTheme
};

Button.defaultProps = {
  block: false,
  disabled: false,
  loading: false,
  size: 'medium',
  variant: 'primary'
};

Button.displayName = 'Button';

export default Button;
