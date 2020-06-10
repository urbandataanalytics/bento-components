import React from 'react';
import List from '../List';

const LinkList = props => {
  const { children, ...other } = props;
  return <List {...other}>{children}</List>;
};

export default LinkList;
