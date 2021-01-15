import React from 'react';
import LinkList from './index';
import LinkListItem from '../List/LinkListItem';

export default {
  title: 'LinkList',
  component: LinkList
};

export const Normal = () => {
  return (
    <LinkList>
      <LinkListItem href={'#'}>Link default</LinkListItem>
      <LinkListItem href={'#'} active>
        Link active
      </LinkListItem>
      <LinkListItem href={'#'} disabled>
        Link disabled
      </LinkListItem>
    </LinkList>
  );
};
