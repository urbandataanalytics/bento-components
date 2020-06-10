import React from 'react';
import ListItem from '../../List/ListItem';

const BULLET_ICON = `\u2022`;

const LinkListItem = props => {
  const { children, active, ...other } = props;

  return (
    <ListItem active={active} rightContent={active && <span>{BULLET_ICON}</span>} {...other}>
      {children}
    </ListItem>
  );
};

export default LinkListItem;
