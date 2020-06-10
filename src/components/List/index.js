import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  background-color: ${props => props.theme.components.listBackgroundColor};
  box-sizing: border-box;
`;

StyledList.defaultProps = {
  theme: defaultTheme
};

const List = React.forwardRef((props, ref) => {
  const { children, size, className, ...other } = props;

  return (
    <StyledList className={className} size={size} {...other}>
      {Children.map(children, child => cloneElement(child, { size }))}
    </StyledList>
  );
});

List.displayName = 'List';

List.defaultProps = {
  size: 'medium'
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['medium', 'large'])
};

export default List;
