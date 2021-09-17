import React from 'react';
import { mount, shallow } from 'enzyme';
import ListItem from './';
import TextLink from '../../TextLink';

describe(`ListItem`, () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(<ListItem>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledComponent');
      expect(message().text()).toBe('Message');
    });

    it('should render left content', () => {
      const wrapper = shallow(<ListItem leftContent={'Left content'}>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledLeftContent');
      expect(message().text()).toBe('Left content');
    });

    it('should render right content', () => {
      const wrapper = shallow(<ListItem rightContent={'Right content'}>Message</ListItem>);

      const message = () => wrapper.find('ListItem__StyledRightContent');
      expect(message().text()).toBe('Right content');
    });

    it('should render custom component wrapper', () => {
      const wrapper = mount(<ListItem as={TextLink}>Message</ListItem>);

      const message = () => wrapper.find('TextLink');
      expect(message().exists()).toBeTruthy();
    });

    it('should call onlick', () => {
      const onClick = jest.fn();
      const wrapper = shallow(
        <ListItem onClick={onClick} as={TextLink}>
          Message
        </ListItem>
      );
      wrapper.find('ListItem__StyledListItem').simulate('click');

      expect(onClick).toHaveBeenCalled();
    });

    it('should not call onlick if disabled', () => {
      const onClick = jest.fn();
      const wrapper = shallow(
        <ListItem disabled={true} onClick={onClick} as={TextLink}>
          Message
        </ListItem>
      );

      wrapper.find('ListItem__StyledListItem').simulate('click');
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  // describe('Styles', () => {
  //   const component = mount(<ListItem>Message</ListItem>);
  //   const theme = component.find('ListItem__StyledListItem').prop('theme');

  //   it('should have active styles', () => {
  //     component.setProps({ active: true });
  //     const content = component.find('ListItem__StyledListItem');
  //     expect(content).toHaveStyleRule('color', theme.components.listItemColorActive);
  //   });

  //   it('should have disabled styles', () => {
  //     component.setProps({ disabled: true });
  //     const content = component.find('ListItem__StyledListItem');
  //     expect(content).toHaveStyleRule('color', theme.components.listItemColorDisabled);
  //   });
  // });
});
