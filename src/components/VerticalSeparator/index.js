import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';

const StyledSeparator = styled.i`
  color: ${({ customColor, theme }) => (customColor ? customColor : theme.color.charcoal400)};
  ${({ separatorLocation }) =>
    separatorLocation === 'left' ? 'margin-right: 24px' : 'margin-right:12px; margin-left:10px'};
`;

StyledSeparator.defaultProps = {
  theme: defaultTheme
};

const VerticalSeparator = props => {
  const { customColor, separatorLocation, ...other } = props;

  return (
    <StyledSeparator customColor={customColor} separatorLocation={separatorLocation}>
      |
    </StyledSeparator>
  );
};

VerticalSeparator.defaultProps = {
  separatorLocation: 'right'
};

VerticalSeparator.propTypes = {
  separatorLocation: PropTypes.oneOf(['left', 'right']),
  customColor: PropTypes.string
};

VerticalSeparator.displayName = 'VerticalSeparator';
export default VerticalSeparator;
