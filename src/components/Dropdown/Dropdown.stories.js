import React from 'react';
import { number } from '@storybook/addon-knobs';
import ListItem from '../List/ListItem/';
import List from '../List/';
import Button from '../Button/';
import Dropdown from './index';

export default {
  title: 'Dropdown',
  component: Dropdown
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
      <Dropdown label={<Button size="large">Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const WithChildrens = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Dropdown label={<Button size="large">Label example</Button>}>
        <List>
          <ListItem leftContent="Icon">Text</ListItem>
          <ListItem rightContent="Icon">Text</ListItem>
          <ListItem leftContent="Icon" rightContent="Icon" active>
            Text
          </ListItem>
        </List>
      </Dropdown>
    </div>
  );
};
