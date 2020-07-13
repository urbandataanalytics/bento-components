import React from 'react';
import styled from 'styled-components';
import DefaultTheme from '../../../themes/defaultTheme';

const StyledCardHeader = styled.header`
  padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};
  background-color: white;
`;

const StyledContainer = styled.div`
  display: flex;
  /* grid-template-columns: 55px 1fr 55px; */
  align-items: top;
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal400};
  padding-bottom: ${({ theme }) => theme.spacings.small2};
`;

const StyledChildrenContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacings.small2};
`;

StyledCardHeader.defaultProps = {
  theme: DefaultTheme
};

const StyledRightContent = styled.div`
  width: 55px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLeftContent = styled.div`
  width: 55px;
`;

const StyledCenterContent = styled.div`
  flex: 1;
`;

const CardHeader = React.forwardRef((props, ref) => {
  const { children, leftContent, rightContent, title, subheader, className, ...other } = props;

  return (
    <StyledCardHeader className={className} {...other}>
      <StyledContainer>
        <StyledLeftContent>{leftContent}</StyledLeftContent>
        <StyledCenterContent>
          <div>{title}</div>
          <div>{subheader}</div>
        </StyledCenterContent>
        <StyledRightContent>{rightContent}</StyledRightContent>
      </StyledContainer>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledCardHeader>
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
