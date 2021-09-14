import * as React from 'react';
import { mount, shallow } from 'enzyme';
import ButtonLink from './index';
import IconCheck from '../../icons/Check';

describe(`ButtonLink`, () => {
  it('should not render an icon', () => {
    const wrapper = shallow(<ButtonLink>Text</ButtonLink>);

    const icon = () => wrapper.find('ButtonLink__IconWrapper');
    expect(icon().exists()).toBe(false);
  });

  it('should render a left icon', () => {
    const wrapper = shallow(<ButtonLink iconLeft={<IconCheck />}>Text</ButtonLink>);

    const icon = () => wrapper.find(IconCheck);
    expect(icon().exists()).toBe(true);
  });

  it('should set disabled prop on buttonLink', () => {
    const wrapper = shallow(<ButtonLink disabled />);

    const buttonLink = () => wrapper.find('ButtonLink__StyledButtonLink');
    expect(buttonLink().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(buttonLink().props().disabled).toBe(false);
  });

  it('should set tabindex prop on buttonLink', () => {
    const wrapper = shallow(<ButtonLink tabIndex="-1" />);

    const buttonLink = () => wrapper.find('ButtonLink__StyledButtonLink');
    expect(buttonLink().props().tabIndex).toBe('-1');
  });

  describe('events', () => {
    it('should invoke onClick with expected value', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<ButtonLink onClick={onClick} />);

      wrapper.find('ButtonLink__StyledButtonLink').simulate('click');

      expect(onClick).toHaveBeenCalled();
    });
  });
});
