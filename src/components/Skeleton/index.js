import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import styled from 'styled-components';

const componentVariants = (theme, width, height) => ({
  text: {
    width: width,
    height: height,
    borderRadius: theme.shapes.borderRadiusSmall
  },
  circular: {
    width: width,
    height: width,
    borderRadius: '50%'
  },
  rounded: {
    width: width,
    height: height,
    borderRadius: theme.shapes.borderRadiusMedium
  },
  square: {
    width: width,
    height: width,
    borderRadius: '0px'
  }
});

const StyledSkeleton = styled.i`
  ${({ theme, width, height, variant }) => componentVariants(theme, width, height)[variant]};
  animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
  display: block;
`;

StyledSkeleton.defaultProps = {
  theme: defaultTheme
};

const Skeleton = React.forwardRef((props, ref) => {
  const { width, height, variant, ...other } = props;

  return <StyledSkeleton variant={variant} width={width} height={height} {...other} />;
});

Skeleton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  variant: PropTypes.string.isRequired
};

Skeleton.defaultProps = {
  height: '8px',
  width: '100%',
  variant: 'text'
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
