import React from 'react';
import { mount, shallow } from 'enzyme';
import Notification from './index';
import IconCheck from '../../icons/Check';
import IconInfo from '../../icons/Info';

describe('Notification', () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(<Notification>Message</Notification>);

      const message = () => wrapper.find('Notification__StyledMessage');
      expect(message().text()).toBe('Message');
    });

    it('should not render an icon', () => {
      const wrapper = shallow(<Notification>Message</Notification>);

      const icon = () => wrapper.find('Notification__StyledIcon');
      expect(icon().exists()).toBe(false);
    });

    it('should render an icon when the prop is true', () => {
      const wrapper = shallow(<Notification showIcon>Message</Notification>);

      const icon = () => wrapper.find('Notification__StyledIcon');
      expect(icon().exists()).toBe(true);
    });

    it('should render default icon for variant', () => {
      const wrapper = shallow(<Notification showIcon>Message</Notification>);

      const icon = () => wrapper.find(IconInfo);
      expect(icon().exists()).toBe(true);
    });

    it('should render a custom icon', () => {
      const wrapper = shallow(
        <Notification showIcon icon={<IconCheck />}>
          Message
        </Notification>
      );

      const icon = () => wrapper.find(IconCheck);
      expect(icon().exists()).toBe(true);
    });

    it('should be closable', () => {
      const onClose = jest.fn();
      const notification = shallow(
        <Notification showIcon closable onClose={onClose}>
          Message
        </Notification>
      );

      const CloseButton = notification.find('Notification__StyledCloseButton');
      CloseButton.simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('styles', () => {
    const component = mount(<Notification variant="error" />);
    const container = component.find('Notification__StyledNotification');
    const theme = container.prop('theme');

    it('should have error styles', () => {
      expect(container).toHaveStyleRule(
        'background-color',
        theme.components.notificationErrorBackgroundColor
      );
      expect(container).toHaveStyleRule('color', theme.components.notificationErrorColor);
    });
  });
});
