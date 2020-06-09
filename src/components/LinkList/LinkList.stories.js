import React from 'react';
import LinkList from './index';
import TextLink from '../TextLink';
import LinkListItem from './LinkListItem';

export default {
  title: 'LinkList',
  component: LinkList
};

export const Normal = () => {
  return (
    <LinkList style={{ margin: '20px' }}>
      <LinkListItem>
        <TextLink href={'#'}>Link 1</TextLink>
      </LinkListItem>
      <LinkListItem active>
        <TextLink href={'#'}>Link 2</TextLink>
      </LinkListItem>
      <LinkListItem disabled>
        <TextLink href={'#'}>Link 3</TextLink>
      </LinkListItem>
    </LinkList>
  );
};
