import React from 'react';
import { shallow, mount } from 'enzyme';
import Dropdown from './';

describe(`Dropdown`, () => {
  describe('Normal', () => {
    it('should render children content', () => {
      const wrapper = shallow(<Dropdown>Message</Dropdown>);

      const message = () => wrapper.find('Dropdown__ChildrenContainer');
      expect(message().text()).toBe('Message');
    });

    it('should render label content', () => {
      const wrapper = shallow(<Dropdown label={'Label'}>Message</Dropdown>);

      const message = () => wrapper.find('Dropdown__StyledLabel');
      expect(message().text()).toBe('Label');
    });
  });

  describe('Styles', () => {
    const component = mount(
      <Dropdown>
        <div>Children</div>
      </Dropdown>
    );
    const content = component.find('Dropdown__ChildrenContainer');
    it('should have default styles', () => {
      expect(content).toHaveStyleRule('opacity', '0');
    });
  });
});
