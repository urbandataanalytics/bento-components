import React from 'react';
import styled from 'styled-components';
import DefaultTheme from '../../themes/defaultTheme';
import CardSkeleton from './CardSkeleton';
const StyledCard = styled.article`
  border: 1px solid ${({ theme }) => theme.color.charcoal400};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
`;

StyledCard.defaultProps = {
  theme: DefaultTheme
};

const Card = React.forwardRef((props, ref) => {
  const { children, className, loading, ...other } = props;

  return (
    <StyledCard className={className} {...other}>
      {loading ? <CardSkeleton /> : children}
    </StyledCard>
  );
});

Card.displayName = 'Card';

export default Card;
