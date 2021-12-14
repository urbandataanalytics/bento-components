import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import Loader from './Loader/';
import { useBreakpoint } from '../../hooks/useBreakpoint';

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
  },
  tertiary: {
    color: theme.components.buttonTertiaryColor,
    backgroundColor: theme.components.buttonTertiaryBackgroundColor,
    borderColor: theme.components.buttonTertiaryBorderColor,
    borderRadius: theme.components.buttonTertiaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonTertiaryHoverBackgroundColor,
      borderColor: theme.components.buttonTertiaryHoverBorderColor,
      color: theme.components.buttonTertiaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonTertiaryDisabledBackgroundColor,
      borderColor: theme.components.buttonTertiaryDisabledBorderColor,
      color: theme.components.buttonTertiaryDisabledColor
    }
  },
  dangerPrimary: {
    color: theme.components.buttonDangerPrimaryColor,
    backgroundColor: theme.components.buttonDangerPrimaryBackgroundColor,
    borderRadius: theme.components.buttonDangerPrimaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonDangerPrimaryHoverBackgroundColor,
      color: theme.components.buttonDangerPrimaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonDangerPrimaryDisabledBackgroundColor
    }
  },
  dangerSecondary: {
    color: theme.components.buttonDangerSecondaryColor,
    backgroundColor: theme.components.buttonDangerSecondaryBackgroundColor,
    borderColor: theme.components.buttonDangerSecondaryBorderColor,
    borderRadius: theme.components.buttonDangerSecondaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonDangerSecondaryHoverBackgroundColor,
      borderColor: theme.components.buttonDangerSecondaryHoverBorderColor,
      color: theme.components.buttonDangerSecondaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonDangerSecondaryDisabledBackgroundColor,
      borderColor: theme.components.buttonDangerSecondaryDisabledBorderColor,
      color: theme.components.buttonDangerSecondaryDisabledColor
    }
  }
});

const StyledButton = styled.button`
  border-width: ${props =>
    props.variant === 'secondary' || props.variant === 'dangerSecondary' ? '1px' : 0};
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
  position: relative;
  overflow: hidden;

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      transition: ${props => props.theme.global.transitionM};
      &:after {
        content: '';
        background: rgba(255, 255, 255, 0.3);
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
    `}



  &:disabled {
    cursor: default;
  }

  ${props => (props.block ? 'width: 100%;' : '')}
  ${props => componentSizes(props.theme)[props.size]}
  ${props => componentVariants(props.theme)[props.variant]}

  ${({ isMobile }) =>
    isMobile &&
    css`
      transition: none;
      height: 48px;
      &:hover {
        backgroundcolor: inherit !important;
        color: white !important;
        border-color: inherit !important;
      }
    `}
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

  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 's' || breakpoint === 'm';
  const isDesktop = breakpoint === 'l' || breakpoint === 'xl' || breakpoint === 'xxl';

  return (
    <StyledButton
      isDesktop={isDesktop}
      isMobile={isMobile}
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
      {iconLeft ? (
        <IconWrapper variant={variant} disabled={disabled} direction="left" size={size}>
          {iconLeft}
        </IconWrapper>
      ) : null}
      <StyledContent>{children}</StyledContent>
      {iconRight ? (
        <IconWrapper variant={variant} disabled={disabled} direction="right" size={size}>
          {iconRight}
        </IconWrapper>
      ) : null}
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
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'dangerPrimary', 'dangerSecondary'])
};

StyledButton.defaultProps = {
  theme: defaultTheme
};

IconWrapper.defaultProps = {
  theme: defaultTheme
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
