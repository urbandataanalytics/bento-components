import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import List from './index';
import ListItem from './ListItem/';
import IconFolder from '../../icons/Folder/index';
import TextLink from '../TextLink';
import { IconUser } from '../../icons';

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
        <ListItem rightContent={<IconFolder />} active>
          Text
        </ListItem>
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
