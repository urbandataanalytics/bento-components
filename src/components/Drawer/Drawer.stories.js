import Drawer from './index';
import React from 'react';
import ListItem from '../List/ListItem';
import IconFolder from '../../icons/Folder';
import List from '../List';
import { IconAsset, IconEye, IconFilter, IconNavigation, IconUser } from '../../icons';
import Accordion from '../AccordionList/Accordion';
import { ButtonLink, Grid } from '../../index';

export default {
  title: 'Drawer',
  component: Drawer,
  subcomponents: { Accordion, ButtonLink, Grid, List, ListItem },
  argTypes: {
    children: {
      description: ' The content of the Drawer.                                           ',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    header: {
      description: "Title of the Drawer that will be rendered in the Drawer's header.",
      control: 'text',
      table: {
        category: 'content'
      }
    },
    offsetBottom: {
      description: 'The bottom offset of the Drawer.',
      table: {
        category: 'format'
      }
    },
    offsetLeft: {
      description: 'The Left offset of the Drawer.',
      table: {
        category: 'format'
      }
    },
    offsetRight: {
      description: 'The right offset of the Drawer.',
      table: {
        category: 'format'
      }
    },
    offsetTop: {
      description: 'The top offset of the Drawer.',
      table: {
        category: 'format'
      }
    },
    onClose: {
      description: ' Function for handling onClose event.  ',
      action: 'onCloseEvent',
      table: {
        category: 'Events'
      }
    },
    open: {
      description: 'Shows the drawer',
      table: {
        category: 'behaviour'
      }
    },
    position: {
      description: 'The position on which side the Drawer should appear.',
      table: {
        category: 'format'
      }
    },
    showOverlay: {
      description: 'If `true`, the Drawer will have cloudy background.',
      table: {
        category: 'format'
      }
    },
    subHeader: {
      description: "Subtitle of the Drawer that will be rendered in the Drawer's header.",
      table: {
        category: 'content'
      }
    },
    width: {
      description: 'Width of the drawer',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    open: true,
    position: 'left',
    width: '320px',
    offsetTop: '0px',
    offsetRight: '0px',
    offsetLeft: '0px',
    offsetBottom: '0px'
  }
};

export const Playground = args => {
  return (
    <>
      <Drawer {...args}>
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

Playground.args = {
  header: 'Accordion title 1',
  subHeader: 'Subtitle'
};

export const RightPosition = args => {
  return (
    <>
      <Drawer {...args}>
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

RightPosition.args = {
  header: 'Accordion title 1',
  subHeader: 'Subtitle',
  position: 'right'
};
