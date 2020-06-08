import React from 'react';
import { mount } from 'enzyme';
import IconUser from '../../icons/User';

describe(`Icon`, () => {
  const IconName = 'IconUser';
  const component = mount(<IconUser />);
  const iconComponent = component.find('Icon');
  const svg = component.find('svg');
  const theme = component.find('Icon__StyledIcon').prop('theme');

  it('should render SVG', () => {
    expect(component.find('svg').exists()).toBe(true);
  });

  it('should render Icon with same name', () => {
    expect(component.find('svg').prop('data-name')).toBe(IconName);
  });

  it('should have default sizing', () => {
    expect(svg).toHaveStyleRule('height', theme.components.iconSizeMedium);
    expect(svg).toHaveStyleRule('width', theme.components.iconSizeMedium);
  });

  it('should have passed props', () => {
    const viewBox = iconComponent.prop('viewBox');

    expect(svg.prop('preserveAspectRatio')).toBe('xMidYMid meet');
    expect(svg.prop('viewBox')).toBe(viewBox);
  });

  it('should change size attribute', () => {
    component.setProps({ size: 'large' });
    expect(component.find('svg')).toHaveStyleRule('height', theme.components.iconSizeLarge);
    expect(component.find('svg')).toHaveStyleRule('width', theme.components.iconSizeLarge);
  });

  it('should change color', () => {
    const customColor = '#f1f1f1';
    component.setProps({ customColor });
    expect(component.find('svg')).toHaveStyleRule('color', customColor);
  });
});
