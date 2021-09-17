import React from 'react';
import ListItem from '../../List/ListItem';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';
import { StyledComponent, StyledLeftContent } from '../ListItem';

const StyledNavListItem = styled(({ component, ...props }) => (
  <ListItem as={component} {...props} />
))`
  &:hover {
    ${props =>
      props.disabled &&
      css`
        background-color: ${props.theme.components.listNavItemBackgroundColorDisabled};
      `};
  }

  > ${StyledComponent} {
    color: ${props =>
      props.active
        ? props.theme.components.listNavItemColorActive
        : props.theme.components.listNavItemColorDefault};
    ${props =>
      props.disabled &&
      css`
        color: ${props.theme.components.listNavItemColorDisabled};
      `};
    font-weight: ${props => props.theme.components.listNavItemFontWeight};
    font-size: ${props => props.theme.components.listNavItemFontSize};
    padding: ${props => props.theme.components.listItemPaddingLarge};

    &:hover {
      ${props =>
        !props.active &&
        css`
          color: ${props.theme.components.listNavItemColorHover};
        `};
      ${props =>
        props.disabled &&
        css`
          color: ${props.theme.components.listNavItemColorDisabled};
        `};
      ${props =>
        props.disabled &&
        css`
          background-color: ${props.theme.components.listNavItemBackgroundColorDisabled};
        `};
    }
  }

  ${StyledLeftContent} {
    > svg {
      fill: ${props =>
        props.active
          ? props.theme.components.listNavItemColorActive
          : props.theme.components.listNavItemColorDefault};
      ${props =>
        props.disabled &&
        css`
          fill: ${props.theme.components.listNavItemColorDisabled};
        `};
    }
  }
`;

StyledNavListItem.defaultProps = {
  theme: defaultTheme
};

const NavListItem = props => {
  const { as, ...other } = props;

  return <StyledNavListItem component={as} {...other} />;
};

NavListItem.propTypes = ListItem.propTypes;

export default NavListItem;
