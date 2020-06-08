import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultTheme from '../../themes/defaultTheme';

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
    borderColor: theme.components.buttonPrimaryBorderColor,
    borderRadius: theme.components.buttonPrimaryBorderRadius,
    '&:hover': {
      backgroundColor: theme.components.buttonPrimaryHoverBackgroundColor,
      borderColor: theme.components.buttonPrimaryHoverBorderColor,
      color: theme.components.buttonPrimaryHoverColor
    },
    '&:disabled': {
      backgroundColor: theme.components.buttonPrimaryDisabledBackgroundColor,
      borderColor: theme.components.buttonPrimaryDisabledBorderColor
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
      borderColor: theme.components.buttonSecondaryDisabledBorderColor
    }
  }
});

const StyledButton = styled.button`
  border-width: 1px;
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
  transition: ${props => props.theme.global.transition};

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
  }
`;

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
    variant,
    ...other
  } = props;

  return (
    <StyledButton
      block={block}
      className={className}
      disabled={disabled}
      ref={ref}
      size={size}
      tabIndex={tabIndex}
      variant={variant}
      {...other}
    >
      {iconLeft && (
        <IconWrapper direction="left" size={size}>
          {iconLeft}
        </IconWrapper>
      )}
      {children}
      {iconRight && (
        <IconWrapper direction="right" size={size}>
          {iconRight}
        </IconWrapper>
      )}
    </StyledButton>
  );
});

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  tabIndex: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'primary', 'secondary']).isRequired
};

Button.defaultProps = {
  block: false,
  disabled: false,
  size: 'medium',
  variant: 'primary'
};

StyledButton.defaultProps = {
  theme: DefaultTheme
};

IconWrapper.defaultProps = {
  theme: DefaultTheme
};

Button.displayName = 'Button';

export default Button;
