import React from 'react';
import ListItem from '../List/ListItem/';
import List from '../List/';
import Button from '../Button/';
import Dropdown from './index';
import IconFolder from '../../icons/Folder/index';

export default {
  title: 'Dropdown',
  component: Dropdown,
  subcomponents: { List, ListItem },
  argTypes: {
    align: {
      description:
        'The alignment side on which side the Dropdown children container should appear.',
      table: {
        category: 'format'
      }
    },
    children: {
      description:
        'Elements to be included within the Dropdown.                                   ',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    closeOnClickInside: {
      description: 'Close Dropdown when an option is selected. ',
      table: {
        category: 'behaviour'
      }
    },
    closeOnClickOutside: {
      description: 'Close Dropdown when a click outside is detected.   ',
      table: {
        category: 'behaviour'
      }
    },
    isOpen: {
      description: 'Set Dropdown open status.',
      table: {
        category: 'behaviour'
      }
    },
    label: {
      description: 'The label for the Dropdown.  ',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    onChange: {
      description: 'Function for handling onChange event. ',
      action: 'onChangeEvent',
      table: {
        category: 'events'
      }
    },
    position: {
      description: 'The position on which side the Dropdown children container should appear.',
      table: {
        category: 'format'
      }
    },
    zIndex: {
      description: 'Allows to set a custom z-index property',
      table: {
        category: 'format'
      }
    },
    portalStyle: {
      description: 'Allows to add custom css to Portal',
      table: {
        category: 'format'
      }
    },
    portalClassName: {
      description: 'Allows to add custom css class name to Portal',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    align: 'left',
    closeOnClickInside: false,
    closeOnClickOutside: true,
    isOpen: false,
    position: 'bottom',
    label: <Button>Label example</Button>,
    zIndex: 1000,
    portalStyle: { marginTop: '0px' },
    portalClassName: 'custom-class'
  }
};

const containerStyle = {
  padding: '2rem'
};

export const Playground = args => {
  const numberOfChild = 4;
  const elements = Array.apply(null, Array(numberOfChild));

  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

export const WithChildrens = args => {
  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
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

export const CloseOnClickInside = args => {
  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
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

CloseOnClickInside.args = {
  closeOnClickInside: true
};
export const TopPosition = args => {
  const containerTopStyle = {
    padding: '15rem 2rem'
  };

  const elements = Array.apply(null, Array(4));

  return (
    <div style={containerTopStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

TopPosition.args = {
  position: 'top'
};

export const BottomPosition = args => {
  const elements = Array.apply(null, Array(4));

  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};

BottomPosition.args = {
  position: 'bottom',
  align: 'center'
};

export const RightAlignment = args => {
  const elements = Array.apply(null, Array(4));

  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};
RightAlignment.args = {
  align: 'right'
};

export const CenterAlignment = args => {
  const elements = Array.apply(null, Array(4));

  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};
CenterAlignment.args = {
  align: 'center'
};

export const LeftAlignment = args => {
  const elements = Array.apply(null, Array(4));

  return (
    <div style={containerStyle}>
      <Dropdown {...args}>
        <List>
          {elements.map((e, i) => (
            <ListItem key={i}>{i + 1}</ListItem>
          ))}
        </List>
      </Dropdown>
    </div>
  );
};
LeftAlignment.args = {
  align: 'left'
};
