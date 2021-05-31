import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../../themes/defaultTheme';

const componentSizes = theme => ({
  small: {
    padding: theme.components.buttonLinkPaddingSmall,
    fontSize: theme.components.buttonLinkFontSizeSmall
  },
  medium: {
    padding: theme.components.buttonLinkPaddingMedium,
    fontSize: theme.components.buttonLinkFontSizeMedium
  },
  large: {
    padding: theme.components.buttonLinkPaddingLarge,
    fontSize: theme.components.buttonLinkFontSizeLarge
  }
});

const componentVariants = (theme, contrast) => {
  if (contrast) {
    return {
      primary: {
        color: theme.components.buttonLinkPrimaryContrastColor
      },
      secondary: {
        color: theme.components.buttonLinkSecondaryContrastColor
      },
      danger: {
        color: theme.components.buttonLinkDangerContrastColor
      }
    };
  }
  return {
    primary: {
      color: theme.components.buttonLinkPrimaryColor
    },
    secondary: {
      color: theme.components.buttonLinkSecondaryColor
    },
    danger: {
      color: theme.components.buttonLinkDangerColor
    }
  };
};

const StyledButtonLink = styled.button`
  font-family: ${({ theme }) => theme.global.fontFamily};
  font-weight: ${({ theme }) => theme.global.fontWeightMedium};
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  outline: none;
  cursor: pointer;
  margin: 0;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: 'transparent';
  transition: ${({ theme }) => theme.global.transitionS};
  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.components.buttonLinkDisabledColor};
  }

  &:hover {
    background-color: ${props =>
      props.disabled ? 'transparent' : props.theme.components.buttonLinkHoverBackgroundColor};
    ${({ theme, variant, contrast }) =>
      variant === 'secondary' && contrast
        ? { color: theme.components.buttonLinkHoverSecondaryContrastColor }
        : null}
  }

  ${props => componentVariants(props.theme, props.contrast)[props.variant]}
  ${props => componentSizes(props.theme)[props.size]}
`;

const IconWrapper = styled.span`
  margin: ${props => (props.direction === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
  & > svg {
    width: ${props =>
      props.size === 'small' ? '16px' : props.size === 'medium' ? '24px' : '32px'};
    height: ${props =>
      props.size === 'small' ? '16px' : props.size === 'medium' ? '24px' : '32px'};
    path {
      ${props => props.disabled && props.theme.components.buttonLinkDisabledColor}
    }
  }
`;

const ButtonLink = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    disabled,
    iconLeft,
    iconRight,
    size,
    tabIndex,
    variant,
    contrast,
    ...other
  } = props;

  return (
    <StyledButtonLink
      className={className}
      disabled={disabled}
      ref={ref}
      size={size}
      tabIndex={tabIndex}
      variant={variant}
      contrast={contrast}
      {...other}
    >
      {iconLeft && (
        <IconWrapper variant={variant} disabled={disabled} direction="left" size={size}>
          {iconLeft}
        </IconWrapper>
      )}
      {children}
      {iconRight && (
        <IconWrapper variant={variant} disabled={disabled} direction="right" size={size}>
          {iconRight}
        </IconWrapper>
      )}
    </StyledButtonLink>
  );
});

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  tabIndex: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  contrast: PropTypes.bool
};

ButtonLink.defaultProps = {
  disabled: false,
  size: 'medium',
  variant: 'primary',
  contrast: false
};

StyledButtonLink.defaultProps = {
  theme: defaultTheme
};

IconWrapper.defaultProps = {
  theme: defaultTheme
};

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
