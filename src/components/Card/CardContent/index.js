import React from 'react';
import styled from 'styled-components';
import DefaultTheme from '../../../themes/defaultTheme';

const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};
  background-color: ${({ theme }) => theme.color.charcoal300};
`;

StyledCardContent.defaultProps = {
  theme: DefaultTheme
};

const CardContent = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <StyledCardContent className={className} {...other}>
      {children}
    </StyledCardContent>
  );
});

CardContent.displayName = 'CardContent';

export default CardContent;
