import React from 'react';
import { mount, shallow } from 'enzyme';
import SelectField from './index';

describe(`SelectField`, () => {
  const props = {
    value: 'default Value',
    onChange: jest.fn(),
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' }
    ],
    type: 'text'
  };

  it('should render the text from label prop', () => {
    const wrapper = shallow(<SelectField label="Default" {...props} />);
    const label = () => wrapper.find('SelectField__LabelText');

    expect(label().text()).toBe('Default');
  });

  it('should set disabled prop on input', () => {
    const wrapper = shallow(<SelectField disabled {...props} />);

    const input = () => wrapper.find('SelectField__Select');
    expect(input().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(input().props().disabled).toBe(false);
  });

  it('should set tabindex prop on input', () => {
    const wrapper = shallow(<SelectField tabIndex="-1" {...props} />);

    const input = () => wrapper.find('SelectField__Select');
    expect(input().props().tabIndex).toBe('-1');
  });

  it('should execute onChange method', () => {
    const wrapper = shallow(<SelectField label="Default" {...props} />);
    const input = () => wrapper.find('SelectField__Select');

    input().simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  describe('styles', () => {
    const component = mount(<SelectField error {...props} help="Help text" />);
    const help = component.find('SelectField__HelpText');
    const input = component.find('SelectField__Select');
    const theme = input.prop('theme');

    it('should have error classname', () => {
      expect(help.hasClass('error')).toBe(true);
      expect(help).toHaveStyleRule('color', theme.components.inputFieldErrorHelpColor, {
        modifier: '&.error'
      });
    });
  });
});
