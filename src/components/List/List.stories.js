import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import List from './index';
import ListItem from './ListItem/';
import CheckListItem from './CheckListItem/';
import IconFolder from '../../icons/Folder/index';
import TextLink from '../TextLink';
import { IconUser } from '../../icons';
import { LinkListItem } from '../../index';
import NavListItem from './NavListItem';

export default {
  title: 'List',
  component: List
};

const getCommonProps = () => {
  return {
    numberOfChildren: number('Number Of Children', 4)
  };
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <List {...getCommonProps()}>
        {elements.map((e, i) => (
          <ListItem key={i}>{i + 1}</ListItem>
        ))}
      </List>
    </div>
  );
};

export const WithChildrens = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List size={select('Sizes', ['medium', 'large'], 'medium')}>
        <ListItem leftContent={<IconFolder />}>Text</ListItem>
        <ListItem focused leftContent={<IconFolder />}>
          Text
        </ListItem>
        <ListItem rightContent={<IconFolder />} active>
          Text
        </ListItem>
        <ListItem onClick={() => {}}>Text with onclick</ListItem>
        <ListItem separator />
        <ListItem leftContent={<IconUser size={'small'} />} as={TextLink} href={'#'}>
          With Link
        </ListItem>
        <ListItem as={TextLink} href={'#'}>
          No icon with Link
        </ListItem>
        <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />}>
          Text
        </ListItem>
        <ListItem disabled={true} leftContent={<IconFolder />} rightContent={<IconFolder />}>
          Text
        </ListItem>
      </List>
    </div>
  );
};

export const WithCheckList = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List size={select('Sizes', ['medium', 'large'], 'medium')}>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem>Not active</CheckListItem>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem disabled>Disabled</CheckListItem>
      </List>
    </div>
  );
};

export const LinkList = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List {...getCommonProps()}>
        <LinkListItem href={'https://google.com'}>Link 1</LinkListItem>
        <LinkListItem active={true}>Link 2</LinkListItem>
        <LinkListItem focused href={'#test'}>
          Link 3
        </LinkListItem>
      </List>
    </div>
  );
};

export const NavbarList = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List {...getCommonProps()}>
        <NavListItem focusContent={true} leftContent={<IconUser />}>
          Nav 1
        </NavListItem>
        <NavListItem focusContent={true} leftContent={<IconUser />} active>
          Nav 2
        </NavListItem>
        <NavListItem leftContent={<IconUser />} disabled>
          Nav 2
        </NavListItem>
        <NavListItem as={TextLink} leftContent={<IconUser />} href={'https://google.com'}>
          Nav 2
        </NavListItem>
      </List>
    </div>
  );
};
