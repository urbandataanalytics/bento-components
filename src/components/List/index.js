import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledList = styled.ul`
  padding: 8px;
  background-color: ${props => props.theme.color.white};
  border: 1px solid ${props => props.theme.color.charcoal300};
  box-sizing: border-box;
  box-shadow: 0px 16px 32px rgba(54, 60, 75, 0.1);
  border-radius: 4px;
`;

StyledList.defaultProps = {
  theme: defaultTheme
};

const List = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <StyledList className={className} {...other}>
      {children}
    </StyledList>
  );
});

List.displayName = 'List';

export default List;
