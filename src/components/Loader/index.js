import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import { forwardRef } from 'react';

const componentSizes = theme => ({
  small: {
    width: theme.components.loaderSizeSmall,
    height: theme.components.loaderSizeSmall
  },
  medium: {
    width: theme.components.loaderSizeMedium,
    height: theme.components.loaderSizeMedium
  },
  large: {
    width: theme.components.loaderSizeLarge,
    height: theme.components.loaderSizeLarge
  }
});

const StyledLoader = styled.span`
  display: inline-block;
  ${({ theme, size }) => componentSizes(theme)[size]};
  position: relative;
  border: 6px solid
    ${({ theme, color }) => (color === 'primary' ? theme.color.primary500 : theme.color.primary300)};
  top: 50%;
  animation: ${({ theme }) => theme.animations.loader} 2s infinite ease;
`;

StyledLoader.defaultProps = {
  theme: defaultTheme
};

const StyledLoaderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.color.primary500 : theme.color.primary300};
  animation: ${({ theme }) => theme.animations.loaderInner} 2s infinite ease-in;
`;

StyledLoaderInner.defaultProps = {
  theme: defaultTheme
};

const Avatar = forwardRef((props, ref) => {
  const { size, color, ...other } = props;

  return (
    <StyledLoader size={size} color={color} {...other}>
      <StyledLoaderInner color={color} />
    </StyledLoader>
  );
});

Avatar.defaultProps = {
  size: 'medium',
  color: 'primary'
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary'])
};

export default Avatar;
