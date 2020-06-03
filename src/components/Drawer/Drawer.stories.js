import Drawer from './index';
import React, { useState } from 'react';
import Button from '../Button';
import ListItem from '../List/ListItem';
import IconFolder from '../../icons/Folder';
import List from '../List';
import { IconAsset, IconUser } from '../../icons';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Drawer',
  component: Drawer
};

const getCommonProps = () => {
  return {
    position: select('Position', ['right', 'left'], 'right')
  };
};

export const Normal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open drawer</Button>

      <Drawer
        {...getCommonProps()}
        open={boolean('Open', true)}
        header={<h4>{text('Title', 'Title')}</h4>}
        subHeader={<small>{text('Subtitle', 'Subtitle')}</small>}
        onClose={action('onClose')}
      >
        <List>
          <ListItem leftContent={<IconUser />}>Text</ListItem>
          <ListItem leftContent={<IconAsset />}>Text</ListItem>
          <ListItem leftContent={<IconFolder />}>Text</ListItem>
        </List>
      </Drawer>
    </>
  );
};
