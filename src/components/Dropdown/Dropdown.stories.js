import React from 'react';
import { number } from '@storybook/addon-knobs';
import ListItem from '../List/ListItem/';
import List from '../List/';
import Button from '../Button/';
import Dropdown from './index';
import IconFolder from '../../icons/Folder/index';

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
      <Dropdown label={<Button>Label example</Button>}>
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
      <Dropdown label={<Button>Label example</Button>}>
        <List>
          <ListItem leftContent={<IconFolder />}>Text</ListItem>
          <ListItem rightContent={<IconFolder />}>Text</ListItem>
          <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />} active>
            Text
          </ListItem>
        </List>
      </Dropdown>
    </div>
  );
};
