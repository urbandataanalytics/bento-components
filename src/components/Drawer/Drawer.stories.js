import Drawer from './index';
import React, { useState } from 'react';
import Button from '../Button';
import ListItem from '../List/ListItem';
import IconFolder from '../../icons/Folder';
import List from '../List';
import { IconAsset, IconNavigation, IconUser } from '../../icons';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Accordion from '../Accordion';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open drawer</Button>

      <Drawer
        {...getCommonProps()}
        open={isOpen}
        header={<h4>{text('Title', 'Title')}</h4>}
        subHeader={<small>{text('Subtitle', 'Subtitle')}</small>}
        onClose={handleClose}
        width={text('Width', '320px')}
      >
        <Accordion header={'Accordion title 1'} leftContent={<IconNavigation />}>
          <List>
            <ListItem leftContent={<IconUser />}>Text</ListItem>
            <ListItem leftContent={<IconAsset />}>Text</ListItem>
            <ListItem leftContent={<IconFolder />}>Text</ListItem>
          </List>
        </Accordion>

        <Accordion header={'Accordion title 2'} leftContent={<IconUser />}>
          <List>
            <ListItem leftContent={<IconUser />}>Text</ListItem>
          </List>
        </Accordion>
      </Drawer>
    </>
  );
};
