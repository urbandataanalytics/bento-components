import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './';

describe(`List`, () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(<List>Message</List>);

      const message = () => wrapper.find('List__StyledList');
      expect(message().text()).toBe('Message');
    });
  });

  describe('Styles', () => {
    const component = mount(<List>Message</List>);
    const theme = component.find('List__StyledList').prop('theme');
    const content = component.find('ul');

    it('should have default styles', () => {
      expect(content).toHaveStyleRule('padding', theme.components.listPadding);
    });
  });
});
