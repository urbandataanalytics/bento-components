import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../../themes/defaultTheme';
import { useBreakpoint } from '../../hooks/useBreakpoint';

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
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightMedium};
  margin: 0;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  ${props => componentSizes(props.theme)[props.size]}
  ${props => componentVariants(props.theme)[props.variant]}
  ${props => props.disabled && componentDisabled(props.theme)}

  ${({ isDesktop }) => isDesktop && `transition: ${({ theme }) => theme.global.transitionS};`};

  ${({ isMobile }) =>
    isMobile &&
    `
    transition: none;
    &:hover{
      color: inherit !important;
    }
  `};
`;

StyledTextLink.defaultProps = {
  theme: defaultTheme
};

const TextLink = React.forwardRef((props, ref) => {
  const {
    variant,
    tabIndex,
    size,
    href,
    external,
    disabled,
    className,
    children,
    ...other
  } = props;

  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 's' || breakpoint === 'm';
  const isDesktop = breakpoint === 'l' || breakpoint === 'xl' || breakpoint === 'xxl';

  return (
    <StyledTextLink
      isMobile={isMobile}
      isDesktop={isDesktop}
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
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

TextLink.displayName = 'TextLink';

export default TextLink;
