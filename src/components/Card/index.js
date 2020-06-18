import React from 'react';
import styled from 'styled-components';
import DefaultTheme from '../../themes/defaultTheme';

const StyledCard = styled.article`
  border: 1px solid ${({ theme }) => theme.color.charcoal400};
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
`;

StyledCard.defaultProps = {
  theme: DefaultTheme
};

const Card = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <StyledCard className={className} {...other}>
      {children}
    </StyledCard>
  );
});

Card.displayName = 'Card';

export default Card;
