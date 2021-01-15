import React from 'react';
import Accordion from './index';
import AccordionList from '../index';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    children: {
      description: 'The content of the Accordion',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    expanded: {
      description: 'content will be be displayed',
      control: 'boolean',
      table: {
        category: 'behaviour'
      }
    },
    onClick: {
      description: 'Function for handling onClick ',
      action: 'clicked',
      table: {
        category: 'events'
      }
    },
    isDefaultExpanded: {
      description: 'Sets a default expanded state',
      table: {
        category: 'behaviour'
      }
    },
    header: {
      description: 'Header of the accordion',
      table: {
        category: 'content'
      }
    },
    leftContent: {
      description: 'Displayed item on the left',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    rightContent: {
      description: 'Displayed item on the right',
      control: 'text',
      table: {
        category: 'content'
      }
    },
    subHeader: {
      description: 'Subheader text pot the Accordion',
      control: 'text',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    children: 'First Child',
    header: 'Header title',
    subHeader: 'Subheader text'
  }
};

export const Playground = args => {
  return (
    <AccordionList toggleOnExpand={false}>
      <Accordion {...args} />
    </AccordionList>
  );
};

Playground.args = {
  children: 'First Child',
  header: 'Header title',
  subHeader: 'Subheader text'
};
