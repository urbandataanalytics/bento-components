import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '.';

describe(`Dropdown`, () => {
  it('should not render children content', () => {
    const wrapper = shallow(<Dropdown>Message</Dropdown>);

    const message = () => wrapper.find('Dropdown__ChildrenContainer');
    expect(message().exists()).toBe(false);
  });

  it('should render children content on label click', () => {
    const wrapper = shallow(<Dropdown>Message</Dropdown>);

    wrapper.find('Dropdown__StyledLabel').simulate('click');

    const message = () => wrapper.find('Dropdown__ChildrenContainer div');
    expect(message().exists()).toBe(true);
    expect(message().text()).toBe('Message');
  });

  it('should render label content', () => {
    const wrapper = shallow(<Dropdown label={'Label'}>Message</Dropdown>);

    const message = () => wrapper.find('Dropdown__StyledLabel');
    expect(message().text()).toBe('Label');
  });
});
