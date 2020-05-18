import React from 'react';
import { shallow, mount } from 'enzyme';
import InputField from './index';

describe(`InputField`, () => {
  const props = {
    value: 'default Value',
    onChange: jest.fn(),
    type: 'text'
  };

  it('should render the text from label prop', () => {
    const wrapper = shallow(<InputField label="Default" {...props} />);
    const label = () => wrapper.find('InputField__LabelText');

    expect(label().text()).toBe('Default');
  });

  it('should set disabled prop on input', () => {
    const wrapper = shallow(<InputField disabled {...props} />);

    const input = () => wrapper.find('InputField__Input');
    expect(input().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(input().props().disabled).toBe(false);
  });

  it('should set error prop on input', () => {
    const wrapper = shallow(<InputField error {...props} />);

    const input = () => wrapper.find('InputField__Input');
    expect(input().props().error).toBe(true);

    wrapper.setProps({ error: false });
    expect(input().props().error).toBe(false);
  });

  it('should set tabindex prop on input', () => {
    const wrapper = shallow(<InputField tabIndex="-1" {...props} />);

    const input = () => wrapper.find('InputField__Input');
    expect(input().props().tabIndex).toBe('-1');
  });

  it('should execute onChange method', () => {
    const wrapper = shallow(<InputField label="Default" {...props} />);
    const input = () => wrapper.find('InputField__Input');

    input().simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  describe('styles', () => {
    const component = mount(<InputField error {...props} />);
    const container = component.find('InputField__Input');
    const theme = container.prop('theme');

    it('should have error styles', () => {
      expect(container).toHaveStyleRule(
        'background-color',
        theme.components.inputFieldErrorBackgroundColor
      );
      expect(container).toHaveStyleRule(
        'border-color',
        theme.components.inputFieldErrorBorderColor
      );
    });
  });
});
