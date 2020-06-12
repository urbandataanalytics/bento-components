import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultTheme from '../../themes/defaultTheme';

const Loader = () => {
  const StyledLoader = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    width: 5rem;
    height: 1.5s;
    transition: all 300ms ease-in-out 0s;
    z-index: 1;
    height: 5rem;
    > i {
      width: 33.3333%;
      height: 33.3333%;
      background-color: white;
      animation: cubes 1300ms infinite ease-in-out;

      &.cube-1 {
        animation-delay: 0.2s;
      }

      &.cube-2 {
        animation-delay: 0.3s;
      }

      &.cube-3 {
        animation-delay: 0.4s;
      }

      &.cube-4 {
        animation-delay: 0.1s;
      }

      &.cube-5 {
        animation-delay: 0.2s;
      }

      &.cube-6 {
        animation-delay: 0.3s;
      }

      &.cube-7 {
        animation-delay: 0s;
      }

      &.cube-8 {
        animation.cube-delay: 0.1s;
      }

      &.cube-9 {
        animation-delay: 0.2s;
      }
    }

    @keyframes cubes {
      0%,
      70%,
      100% {
        transform: scale3d(1, 1, 1);
      }
      35% {
        transform: scale3d(0, 0, 1);
      }
    }
  `;

  return (
    <StyledLoader>
      <i className="cube-1"></i>
      <i className="cube-2"></i>
      <i className="cube-3"></i>
      <i className="cube-4"></i>
      <i className="cube-5"></i>
      <i className="cube-6"></i>
      <i className="cube-7"></i>
      <i className="cube-8"></i>
      <i className="cube-9"></i>
    </StyledLoader>
  );
};

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
      <Loader />

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
