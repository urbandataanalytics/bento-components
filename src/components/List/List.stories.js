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

  const CustomLink = props => <TextLink {...props}>prueba</TextLink>;

  return (
    <div style={containerStyle}>
      <List size={select('Sizes', ['medium', 'large'], 'medium')}>
        <TextLink href={'#'}>Link</TextLink>
        <TextLink href={'#'}>Link</TextLink>
      </List>

      <List size={select('Sizes', ['medium', 'large'], 'medium')}>
        <ListItem leftContent={<IconFolder />}>Text</ListItem>
        <ListItem rightContent={<IconFolder />} active>
          Text
        </ListItem>
        <ListItem separator />
        <ListItem leftContent={<IconFolder />}>
          <TextLink href={'#'}>Link</TextLink>
        </ListItem>

        <ListItem leftContent={<IconUser />} as={TextLink} asProps={{ href: '#' }}>
          With Link
        </ListItem>

        <ListItem leftContent={<IconFolder />} as={CustomLink}></ListItem>
        {/*<ListItem*/}
        {/*  leftContent={<IconFolder />}*/}
        {/*  rightContent={<IconFolder />}*/}
        {/*  asComponent={'TextLink'}*/}
        {/*  href={'#'}*/}
        {/*>*/}
        {/*  Link*/}
        {/*  /!*<TextLink href={'#'}>Link</TextLink>*!/*/}
        {/*</ListItem>*/}
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
