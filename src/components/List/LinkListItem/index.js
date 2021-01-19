import React from 'react';
import ListItem from '../../List/ListItem';
import { TextLink } from '../../../index';
import PropTypes from 'prop-types';

const BULLET_ICON = `\u2022`;

const LinkListItem = props => {
  const { children, active, as = TextLink, ...other } = props;

  return (
    <ListItem
      active={active}
      as={as}
      rightContent={active && <span>{BULLET_ICON}</span>}
      {...other}
    >
      {children}
    </ListItem>
  );
};

LinkListItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

export default LinkListItem;
