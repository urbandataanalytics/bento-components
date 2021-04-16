import React from 'react';
import List from './index';
import ListItem from './ListItem/';
import CheckListItem from './CheckListItem/';
import IconFolder from '../../icons/Folder/index';
import TextLink from '../TextLink';
import { IconUser } from '../../icons';
import { LinkListItem } from '../../index';
import NavListItem from './NavListItem';

export default {
  title: 'List',
  component: List,
  subcomponents: { ListItem, LinkListItem, NavListItem },
  argTypes: {
    children: {
      description:
        'Any of the children options (LinkListItem, CheckListItem, ListItem, NavListItem), also admits any other children such as `<p>` or `<a>`',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'Adds the class name to the element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    size: {
      description: 'Size of the children, option',
      table: {
        category: 'format'
      }
    },
    numberOfChildren: {
      name: 'Number of Children to show',
      control: 'number',
      table: {
        category: 'Testing Data'
      }
    }
  },
  args: {
    numberOfChildren: 4
  }
};

const containerStyle = {
  padding: '2rem',
  size: 'medium'
};

export const Playground = ({ numberOfChildren, ...args }) => {
  const elements = Array.apply(null, Array(numberOfChildren));

  return (
    <div style={containerStyle}>
      <List>
        {elements.map((e, i) => (
          <ListItem leftContent="-" rightContent="View" active={false} disabled={false} key={i}>
            Regular ListItem {i}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const FormattedListItems = args => {
  return (
    <div style={containerStyle}>
      <List {...args}>
        <ListItem leftContent={<IconFolder />}>Item with 'leftContent' icon</ListItem>
        <ListItem focusLeftContent leftContent={<IconFolder customColor="#432AC3" />}>
          Item with 'focusLeftContent' and 'leftContent'
        </ListItem>
        <ListItem separator />
        <ListItem rightContent={<IconFolder customColor="#432AC3" />}>
          Item with 'rightContent' icon
        </ListItem>
        <ListItem focusRightContent rightContent={<IconFolder customColor="#432AC3" />}>
          <ListItem separator />
          Item with 'focusRightContent' and 'rightContent'
        </ListItem>
        <ListItem separator />
        <ListItem leftContent={<IconFolder />} rightContent={<IconFolder />}>
          Item with leftContent and rightContent
        </ListItem>
        <ListItem focusContent leftContent={<IconFolder />} rightContent={<IconFolder />}>
          Item with focusContent and leftContent and rightContent
        </ListItem>
        <ListItem separator />
        <ListItem focused leftContent={<IconFolder />}>
          Item focused
        </ListItem>
        <ListItem onClick={() => {}}>Item with onclick</ListItem>
        <ListItem separator />
        <ListItem leftContent={<IconUser size={'small'} />} as={TextLink} href={'#'}>
          Item using TextLink component and leftContent with Icon
        </ListItem>
        <ListItem disabled={true} leftContent={<IconFolder />} rightContent={<IconFolder />}>
          Item disabled
        </ListItem>
      </List>
    </div>
  );
};

export const WithCheckList = args => {
  return (
    <div style={containerStyle}>
      <List {...args}>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem>Not active</CheckListItem>
        <CheckListItem active leftContent={<IconUser size={'small'} />}>
          Active with LeftContent Icon
        </CheckListItem>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem active>Active</CheckListItem>
        <CheckListItem disabled>Disabled</CheckListItem>
      </List>
    </div>
  );
};

export const LinkList = args => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List {...args}>
        <LinkListItem href={'https://google.com'}>Link 1</LinkListItem>
        <LinkListItem active={true}>Link 2 - active Default rightContent</LinkListItem>
        <LinkListItem active={true} rightContent={<IconUser size={'small'} />}>
          Link 3 - active Defined rightContent
        </LinkListItem>
        <LinkListItem focused href={'#test'}>
          Link 4 - focused
        </LinkListItem>
      </List>
    </div>
  );
};

export const NavbarList = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <List>
        <NavListItem focusContent={true} leftContent={<IconUser />}>
          Nav 1
        </NavListItem>
        <NavListItem focusContent={true} leftContent={<IconUser />} active>
          Nav 2
        </NavListItem>
        <NavListItem leftContent={<IconUser />} disabled>
          Nav 2
        </NavListItem>
        <NavListItem as={TextLink} leftContent={<IconUser />} href={'https://google.com'}>
          Nav 2
        </NavListItem>
      </List>
    </div>
  );
};
