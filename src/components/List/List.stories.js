import React from 'react';
import { number } from '@storybook/addon-knobs';
import List from './index';
import ListItem from './ListItem/';
import IconFolder from '../../icons/Folder/index';

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
      <List>
        <ListItem leftContent={<IconFolder />}>Text</ListItem>
        <ListItem rightContent={<IconFolder />} active>
          Text
        </ListItem>
        <ListItem separator />
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
