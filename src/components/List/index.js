import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  padding: ${props => props.theme.components.listPadding};
  background-color: ${props => props.theme.components.listBackgroundColor};
  box-sizing: border-box;
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

List.propTypes = {
  children: PropTypes.node.isRequired
};

export default List;
