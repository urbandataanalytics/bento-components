import React from 'react';
import { number } from '@storybook/addon-knobs';
import List from './index';
import ListItem from './ListItem/';

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
        <ListItem leftContent="Icon">Text</ListItem>
        <ListItem rightContent="Icon" active>
          Text
        </ListItem>
        <ListItem separator />
        <ListItem leftContent="Icon" rightContent="Icon">
          Text
        </ListItem>
      </List>
    </div>
  );
};
