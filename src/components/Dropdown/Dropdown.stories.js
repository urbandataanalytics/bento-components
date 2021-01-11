import React from 'react';
import { number, boolean, select } from '@storybook/addon-knobs';
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

const getDropdownProps = () => {
  return {
    align: select('Align', ['left', 'right', 'center'], 'left'),
    closeOnClickInside: boolean('Close on click inside', false),
    closeOnClickOutside: boolean('Close on click outside', true),
    isOpen: boolean('Is Open', false),
    position: select('Position', ['top', 'bottom'], 'bottom')
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
      <Dropdown {...getDropdownProps()} label={<Button>Label example</Button>}>
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
          <ListItem rightContent={<IconFolder />} disabled>
            Text
          </ListItem>
          <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />} active>
            Text
          </ListItem>
        </List>
      </Dropdown>
    </div>
  );
};

export const CloseOnClickInside = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Dropdown label={<Button>Label example</Button>} closeOnClickInside={true}>
        <List>
          <ListItem leftContent={<IconFolder />}>Text</ListItem>
          <ListItem rightContent={<IconFolder />} disabled>
            Text
          </ListItem>
          <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />} active>
            Text
          </ListItem>
        </List>
      </Dropdown>
    </div>
  );
};

export const TopPosition = () => {
  const containerStyle = {
    padding: '15rem 2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown position="top" align="center" label={<Button>Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const BottomPosition = () => {
  const containerStyle = {
    padding: '2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown position="bottom" align="center" label={<Button>Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const RightAlignment = () => {
  const containerStyle = {
    padding: '2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown align="right" label={<Button>Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const CenterAlignment = () => {
  const containerStyle = {
    padding: '2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown align="center" label={<Button>Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const LeftAlignment = () => {
  const containerStyle = {
    padding: '2rem'
  };

  const numberOfChild = getCommonProps().numberOfChildren;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown align="left" label={<Button>Label example</Button>}>
        <List {...getCommonProps()}>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};
