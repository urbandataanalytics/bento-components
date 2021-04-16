import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../themes/defaultTheme';

const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};
  background-color: ${({ theme }) => theme.color.charcoal300};
`;

StyledCardContent.defaultProps = {
  theme: defaultTheme
};

const CardContent = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <StyledCardContent className={className} {...other}>
      {children}
    </StyledCardContent>
  );
});

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CardContent.displayName = 'CardContent';

export default CardContent;
