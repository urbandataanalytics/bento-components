import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';

const StyledSeparator = styled.i`
  margin: 0 ${({ theme }) => theme.spacings.small3};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ customColor, theme }) =>
    customColor ? customColor : theme.color.charcoal400};
  ${({ separatorLocation }) =>
    separatorLocation === 'left' ? 'margin-right: 24px' : 'margin-right:12px; margin-left:10px'};
`;

StyledSeparator.defaultProps = {
  theme: defaultTheme
};

const VerticalSeparator = props => {
  const { customColor, separatorLocation, height, width, ...other } = props;

  return (
    <StyledSeparator
      width={width}
      height={height}
      customColor={customColor}
      separatorLocation={separatorLocation}
      {...other}
    />
  );
};

VerticalSeparator.defaultProps = {
  separatorLocation: 'right',
  height: '16px',
  width: '1px'
};

VerticalSeparator.propTypes = {
  separatorLocation: PropTypes.oneOf(['left', 'right']),
  customColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

VerticalSeparator.displayName = 'VerticalSeparator';
export default VerticalSeparator;
