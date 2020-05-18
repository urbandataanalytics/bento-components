import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './index';

describe(`Checkbox`, () => {
  it('should render the text from label prop', () => {
    const wrapper = shallow(<Checkbox label="Default" />);
    const label = () => wrapper.find('Checkbox__LabelText');

    expect(label().text()).toBe('Default');
  });

  it('should set disabled prop on input', () => {
    const wrapper = shallow(<Checkbox disabled />);

    const input = () => wrapper.find('Checkbox__Input');
    expect(input().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(input().props().disabled).toBe(false);
  });

  it('should set checked prop on input', () => {
    const wrapper = shallow(<Checkbox checked />);

    const input = () => wrapper.find('Checkbox__Input');
    expect(input().props().checked).toBe(true);

    wrapper.setProps({ checked: false });
    expect(input().props().checked).toBe(false);
  });

  it('should set name prop on input', () => {
    const wrapper = shallow(<Checkbox name="form_checkbox" />);

    const input = () => wrapper.find('Checkbox__Input');
    expect(input().props().name).toBe('form_checkbox');
  });

  it('should set tabindex prop on input', () => {
    const wrapper = shallow(<Checkbox tabIndex="-1" />);

    const input = () => wrapper.find('Checkbox__Input');
    expect(input().props().tabIndex).toBe('-1');
  });

  describe('events', () => {
    it('should invoke onChange with expected value', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<Checkbox onChange={onChange} />);

      wrapper.find('Checkbox__Input').simulate('change');
      const [isChecked] = onChange.mock.calls[0];

      expect(onChange).toHaveBeenCalled();
      expect(isChecked).toBe(true);
    });
  });

  describe('styles', () => {
    const component = mount(<Checkbox size="medium" />);
    const container = component.find('Checkbox__CheckboxContainer');
    const theme = container.prop('theme');

    it('should have medium styles', () => {
      expect(container).toHaveStyleRule('width', theme.components.checkboxSizeMedium);
      expect(container).toHaveStyleRule('height', theme.components.checkboxSizeMedium);
    });
  });
});
