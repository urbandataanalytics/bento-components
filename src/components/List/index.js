import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import PropTypes from 'prop-types';

const componentSizes = theme => ({
  medium: {
    padding: theme.components.linkListPaddingMedium
  },
  large: {
    padding: theme.components.linkListPaddingLarge
  }
});

const StyledList = styled.ul`
  background-color: ${props => props.theme.components.listBackgroundColor};
  box-sizing: border-box;
  ${props => componentSizes(props.theme)[props.size]};
`;

StyledList.defaultProps = {
  theme: defaultTheme
};

const List = React.forwardRef((props, ref) => {
  const { children, size, className, ...other } = props;

  return (
    <StyledList className={className} size={size} {...other}>
      {children}
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
