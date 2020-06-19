import React from 'react';
import ListItem from '../../List/ListItem';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledNavListItem = styled(ListItem)`
  color: ${props =>
    props.active
      ? props.theme.components.listNavItemColorActive
      : props.theme.components.listNavItemColorDefault};
  ${props => props.disabled && `color: ${props.theme.components.listNavItemColorDisabled}`};

  &:hover {
    ${props => !props.active && `color: ${props.theme.components.listNavItemColorHover}`};
    ${props => props.disabled && `color: ${props.theme.components.listNavItemColorDisabled}`};
  }
`;

StyledNavListItem.defaultProps = {
  theme: defaultTheme
};

const NavListItem = props => {
  const { children, size = 'large', ...other } = props;

  return (
    <StyledNavListItem size={size} {...other}>
      {children}
    </StyledNavListItem>
  );
};

NavListItem.propTypes = ListItem.propTypes;

export default NavListItem;
