import React from 'react';
import LinkList from './index';
import LinkListItem from './LinkListItem';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'LinkList',
  component: LinkList
};

export const Normal = () => {
  return (
    <LinkList size={select('Sizes', ['medium', 'large'], 'medium')} style={{ margin: '20px' }}>
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
