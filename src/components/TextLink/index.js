import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultTheme from '../../themes/defaultTheme';

const componentSizes = theme => ({
  medium: {
    fontSize: theme.components.textLinkFontSizeMedium
  },
  large: {
    fontSize: theme.components.textLinkFontSizeLarge
  }
});

const componentVariants = theme => ({
  primary: {
    color: theme.components.textLinkPrimaryColor,
    '&:hover': {
      color: theme.components.textLinkPrimaryHoverColor
    }
  },
  secondary: {
    color: theme.components.textLinkSecondaryColor,
    '&:hover': {
      color: theme.components.textLinkSecondaryHoverColor
    }
  }
});

const componentDisabled = theme => ({
  color: theme.components.textLinkDisabledColor,
  pointerEvents: 'none',
  '&:hover': {
    color: theme.components.textLinkDisabledColor
  }
});

const StyledTextLink = styled.a`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: inline-block;
  font-family: ${({ theme }) => theme.global.fontFamilyBold};
  font-weight: 500;
  margin: 0;
  outline: none;
  text-decoration: none;
  transition: color 300ms ease-in-out;
  white-space: nowrap;
  ${props => componentSizes(props.theme)[props.size]}
  ${props => componentVariants(props.theme)[props.variant]}
  ${props => props.disabled && componentDisabled(props.theme)}
`;

const TextLink = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    disabled,
    external,
    href,
    size,
    tabIndex,
    variant,
    ...other
  } = props;

  return (
    <StyledTextLink
      className={className}
      disabled={disabled}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      size={size}
      tabIndex={tabIndex}
      target={external ? '_blank' : undefined}
      variant={variant}
      {...other}
    >
      {children}
    </StyledTextLink>
  );
});

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'large']),
  tabIndex: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

TextLink.defaultProps = {
  disabled: false,
  external: false,
  href: '#',
  size: 'medium',
  variant: 'primary'
};

StyledTextLink.defaultProps = {
  theme: DefaultTheme
};

TextLink.displayName = 'TextLink';

export default TextLink;
