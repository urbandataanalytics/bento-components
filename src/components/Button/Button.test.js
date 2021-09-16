import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './index';
import IconCheck from '../../icons/Check';

describe(`Button`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<Button>Text</Button>);
    const message = () => wrapper.find('Button__StyledContent');
    expect(message().text()).toBe('Text');
  });

  it('should not render an icon', () => {
    const wrapper = shallow(<Button>Text</Button>);

    const icon = () => wrapper.find('Button__IconWrapper');
    expect(icon().exists()).toBe(false);
  });

  it('should render a left icon', () => {
    const wrapper = shallow(<Button iconLeft={<IconCheck />}>Text</Button>);

    const icon = () => wrapper.find(IconCheck);
    expect(icon().exists()).toBe(true);
  });

  it('should set disabled prop on button', () => {
    const wrapper = shallow(<Button disabled />);

    const button = () => wrapper.find('Button__StyledButton');
    expect(button().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(button().props().disabled).toBe(false);
  });

  it('should set tabindex prop on button', () => {
    const wrapper = shallow(<Button tabIndex="-1" />);

    const button = () => wrapper.find('Button__StyledButton');
    expect(button().props().tabIndex).toBe('-1');
  });

  describe('events', () => {
    it('should invoke onClick with expected value', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Button onClick={onClick} />);

      wrapper.find('Button__StyledButton').simulate('click');

      expect(onClick).toHaveBeenCalled();
    });
  });
});
