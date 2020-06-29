import React from 'react';
import ListItem from '../../List/ListItem';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';
import { StyledComponent, StyledLeftContent } from '../ListItem';

const StyledNavListItem = styled(({ component, ...props }) => (
  <ListItem as={component} {...props} />
))`
  &:hover {
    ${props =>
      props.disabled &&
      `background-color: ${props.theme.components.listNavItemBackgroundColorDisabled}`};
  }

  > ${StyledComponent} {
    color: ${props =>
      props.active
        ? props.theme.components.listNavItemColorActive
        : props.theme.components.listNavItemColorDefault};
    ${props => props.disabled && `color: ${props.theme.components.listNavItemColorDisabled}`};
    font-weight: ${props => props.theme.components.listNavItemFontWeight};
    font-size: ${props => props.theme.components.listNavItemFontSize};

    &:hover {
      ${props => !props.active && `color: ${props.theme.components.listNavItemColorHover}`};
      ${props => props.disabled && `color: ${props.theme.components.listNavItemColorDisabled}`};
      ${props =>
        props.disabled &&
        `background-color: ${props.theme.components.listNavItemBackgroundColorDisabled}`};
    }
  }

  ${StyledLeftContent} {
    > svg {
      fill: ${props =>
        props.active
          ? props.theme.components.listNavItemColorActive
          : props.theme.components.listNavItemColorDefault};
      ${props => props.disabled && `fill: ${props.theme.components.listNavItemColorDisabled}`};
    }
  }
`;

StyledNavListItem.defaultProps = {
  theme: defaultTheme
};

const NavListItem = props => {
  const { size = 'large', as, ...other } = props;

  return <StyledNavListItem size={size} component={as} {...other} />;
};

NavListItem.propTypes = ListItem.propTypes;

export default NavListItem;
