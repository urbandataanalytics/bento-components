import * as React from 'react';
import Accordion from './index';
import AccordionList from './AccordionList/index';
import { IconActivity } from '../../icons';
import ListItem from '../List/ListItem';
import IconFolder from '../../icons/Folder';
import List from '../List';
import TextLink from '../TextLink';

export default {
  title: 'Accordion',
  component: Accordion
};

export const Normal = () => (
  <Accordion iconLeft={<IconActivity />} header={'Accordion title'}>
    Child message
  </Accordion>
);

export const AccordionListExpandOneByOne = () => (
  <AccordionList>
    <Accordion leftContent={<IconActivity />} header={'Accordion title'}>
      Child message
    </Accordion>
    <Accordion
      leftContent={<IconActivity />}
      rightContent={<TextLink>link</TextLink>}
      header={'Accordion title'}
      subHeader={'small content'}
    >
      <List>
        <ListItem leftContent={<IconFolder />}>Text</ListItem>
        <ListItem rightContent={<IconFolder />}>Text</ListItem>
        <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />} active>
          Text
        </ListItem>
      </List>
    </Accordion>
    <Accordion leftContent={<IconActivity />} header={'Expanded by default'} isDefaultExpanded>
      Expanded
    </Accordion>
  </AccordionList>
);

export const AccordionListExpandAll = () => (
  <AccordionList toggleOnExpand={false}>
    <Accordion iconLeft={<IconActivity />} header={'Accordion First'}>
      First child
    </Accordion>
    <Accordion iconLeft={<IconActivity />} header={'Accordion Second'} isDefaultExpanded>
      Second child
    </Accordion>
  </AccordionList>
);
