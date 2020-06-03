import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledList = styled.ul`
  padding: ${props => props.theme.components.listPadding};
  background-color: ${props => props.theme.components.listBackgroundColor};
  border: 1px solid ${props => props.theme.components.listBorderColor};
  box-sizing: border-box;
  box-shadow: ${props => props.theme.components.listBoxShadow};
  border-radius: ${props => props.theme.components.listBorderRadius};
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
