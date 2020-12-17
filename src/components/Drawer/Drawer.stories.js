import Drawer from './index';
import React, { useState } from 'react';
import Button from '../Button';
import ListItem from '../List/ListItem';
import IconFolder from '../../icons/Folder';
import List from '../List';
import { IconAsset, IconEye, IconFilter, IconNavigation, IconUser } from '../../icons';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Accordion from '../AccordionList/Accordion';
import { ButtonLink, Grid } from '../../index';

export default {
  title: 'Drawer',
  component: Drawer
};

const getCommonProps = () => {
  return {
    position: select('Position', ['right', 'left'], 'right')
  };
};

export const Playground = () => {
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
        open={boolean('Open', isOpen)}
        header={<h4>{text('Title', 'Title')}</h4>}
        subHeader={<small>{text('Subtitle', 'Subtitle')}</small>}
        onClose={handleClose}
        width={text('Width', '320px')}
        offsetTop={text('Offset Top', '0px')}
        offsetRight={text('Offset Right', '0px')}
        offsetLeft={text('Offset Left', '0px')}
        offsetBottom={text('Offset Bottom', '0px')}
      >
        <Accordion header={'Accordion title 1'} leftContent={<IconNavigation />}>
          <List>
            <ListItem leftContent={<IconUser />}>Text</ListItem>
            <ListItem leftContent={<IconAsset />}>Text</ListItem>
            <ListItem leftContent={<IconFolder />}>Text</ListItem>
          </List>
        </Accordion>

        <Accordion header={'Accordion title 2'} leftContent={<IconUser />}>
          <Grid columns={'90% 10%'} gap={'5px'}>
            <List>
              <ListItem rightContent={<IconFilter size={'small'} />}>Text 1</ListItem>
              <ListItem rightContent={<IconFilter size={'small'} />}>Text 2</ListItem>
              <ListItem rightContent={<IconFilter size={'small'} />}>Text 3</ListItem>
            </List>
            <div>
              <div
                style={{
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center'
                }}
              >
                <ButtonLink size={'small'} variant={'primary'} style={{ minHeight: '34px' }}>
                  <IconEye />
                </ButtonLink>
              </div>
              <div
                style={{
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center'
                }}
              >
                <ButtonLink size={'small'} variant={'secondary'} style={{ minHeight: '34px' }}>
                  <IconEye />
                </ButtonLink>
              </div>
              <div
                style={{
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center'
                }}
              >
                <ButtonLink size={'small'} variant={'secondary'} style={{ minHeight: '34px' }}>
                  <IconEye />
                </ButtonLink>
              </div>
            </div>
          </Grid>
        </Accordion>
      </Drawer>
    </>
  );
};
