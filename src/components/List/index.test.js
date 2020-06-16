import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './';
import ListItem from './ListItem';

describe(`List`, () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(
        <List>
          <ListItem>Message</ListItem>
        </List>
      );

      const message = () => wrapper.find('List__StyledList');
      expect(message().text()).toBe('Message');
    });
  });

  describe('Styles', () => {
    const component = mount(
      <List>
        <ListItem>Message</ListItem>
      </List>
    );
    const theme = component.find('List__StyledList').prop('theme');
    const content = component.find('ul');

    it('should have default styles', () => {
      expect(content).toHaveStyleRule('background-color', theme.components.listBackgroundColor);
    });
  });
});
