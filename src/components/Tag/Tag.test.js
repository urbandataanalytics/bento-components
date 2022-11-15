import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Tag from './index';

describe(`Tag`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<Tag>Text</Tag>);
    const message = () => wrapper.find('Tag__Container');
    expect(message().text()).toBe('Text');
  });

  it('should have theme styles', () => {
    const color = '#ff0000';

    const component = mount(<Tag>Text</Tag>);
    const container = component.find('Tag__Container');
    const theme = container.prop('theme');

    expect(container).toHaveStyleRule('font-size', theme.components.TagFontSize);
    expect(container).toHaveStyleRule('font-weight', theme.components.TagFontWeight);
    expect(container).toHaveStyleRule('color', theme.components.TagColor);
    expect(container).toHaveStyleRule('border-radius', theme.components.TagBorderRadius);
    expect(container).toHaveStyleRule('padding', theme.components.TagPadding);
    expect(container).toHaveStyleRule('line-height', theme.components.TagLineHeight);
  });

  it('should have custom color from props', () => {
    const color = '#ff0000';

    const component = mount(<Tag customColor={color}>Text</Tag>);
    const container = component.find('Tag__Container');

    expect(container).toHaveStyleRule('background-color', color);
  });
});
