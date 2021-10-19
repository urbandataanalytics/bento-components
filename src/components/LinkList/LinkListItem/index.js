import React from 'react';
import ListItem from '../../List/ListItem';
import { TextLink } from '../../../index';

const BULLET_ICON = `\u2022`;

const LinkListItem = props => {
  const { children, active, as = TextLink, ...other } = props;

  return (
    <ListItem
      active={active}
      as={as}
      rightContent={active ? <span>{BULLET_ICON}</span> : null}
      {...other}
    >
      {children}
    </ListItem>
  );
};

export default LinkListItem;
