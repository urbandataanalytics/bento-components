import * as React from 'react';
import { shallow, mount } from 'enzyme';
import TextLink from './index';

describe(`TextLink`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<TextLink>Text</TextLink>);

    const message = () => wrapper.find('TextLink__StyledTextLink');
    expect(message().text()).toBe('Text');
  });

  it('should set disabled prop on button', () => {
    const wrapper = shallow(<TextLink disabled>Text</TextLink>);

    const button = () => wrapper.find('TextLink__StyledTextLink');
    expect(button().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(button().props().disabled).toBe(false);
  });

  it('should set tabindex prop on button', () => {
    const wrapper = shallow(<TextLink tabIndex="-1">Text</TextLink>);

    const button = () => wrapper.find('TextLink__StyledTextLink');
    expect(button().props().tabIndex).toBe('-1');
  });

  describe('events', () => {
    it('should invoke onClick with expected value', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<TextLink onClick={onClick}>Text</TextLink>);

      wrapper.find('TextLink__StyledTextLink').simulate('click');

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('styles', () => {
    const component = mount(<TextLink variant="secondary">Text</TextLink>);
    const container = component.find('TextLink__StyledTextLink');
    const theme = container.prop('theme');

    it('should have secondary styles', () => {
      expect(container).toHaveStyleRule('color', theme.components.textLinkSecondaryColor);
      expect(container).toHaveStyleRule('color', theme.components.textLinkSecondaryHoverColor, {
        modifier: ':hover'
      });
    });
  });
});
