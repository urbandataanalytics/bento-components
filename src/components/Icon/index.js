import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';

const componentSizes = theme => ({
  small: {
    width: theme.components.iconSizeSmall,
    height: theme.components.iconSizeSmall
  },
  medium: {
    width: theme.components.iconSizeMedium,
    height: theme.components.iconSizeMedium
  },
  large: {
    width: theme.components.iconSizeLarge,
    height: theme.components.iconSizeLarge
  }
});

const componentVariants = theme => ({
  primary: {
    color: theme.components.iconPrimaryColor
  },
  secondary: {
    color: theme.components.iconSecondaryColor
  }
});

const StyledIcon = styled(
  ({ className, viewBox, name, children, ariaHidden, ariaLabel, color }) => (
    <svg
      className={className}
      viewBox={viewBox}
      data-name={name}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </svg>
  )
)`
  flex-shrink: 0;
  vertical-align: middle;
  fill: currentColor;
  ${props =>
    props.customColor ? { color: props.customColor } : componentVariants(props.theme)[props.color]}
  ${props => componentSizes(props.theme)[props.size]}
`;

StyledIcon.defaultProps = {
  theme: defaultTheme
};

const Icon = props => {
  const {
    size,
    color,
    customColor,
    className,
    children,
    viewBox,
    name,
    ariaHidden,
    reverseOnRtl,
    ariaLabel
  } = props;
  return (
    <StyledIcon
      viewBox={viewBox}
      size={size}
      className={className}
      name={name}
      customColor={customColor}
      color={color}
      ariaHidden={ariaHidden}
      reverseOnRtl={reverseOnRtl}
      ariaLabel={ariaLabel}
    >
      {children}
    </StyledIcon>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customColor: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.node
};

Icon.defaultProps = {
  size: 'medium'
};

export default Icon;
