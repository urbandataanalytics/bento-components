import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from './';

describe(`ListItem`, () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(<ListItem>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledContent');
      expect(message().text()).toBe('Message');
    });

    it('should not render left content', () => {
      const wrapper = shallow(<ListItem leftContent={'Left content'}>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledLeftContent');
      expect(message().text()).toBe('Left content');
    });

    it('should not render right content', () => {
      const wrapper = shallow(<ListItem rightContent={'Right content'}>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledRightContent');
      expect(message().text()).toBe('Right content');
    });
  });

  describe('Styles', () => {
    const component = mount(<ListItem active>Message</ListItem>);
    const theme = component.find('ListItem__StyledListItem').prop('theme');
    const content = component.find('div');

    it('should have active styles', () => {
      expect(content).toHaveStyleRule('color', theme.components.listItemColorActive);
    });
  });
});
