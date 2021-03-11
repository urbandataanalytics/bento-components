import React from 'react';
import { mount, shallow } from 'enzyme';
import TextareaField from './index';

describe(`TextareaField`, () => {
  const props = {
    value: 'default Value',
    onChange: jest.fn()
  };

  it('should render the text from label prop', () => {
    const wrapper = shallow(<TextareaField label="Default" {...props} />);
    const label = () => wrapper.find('TextareaField__LabelText');

    expect(label().text()).toBe('Default');
  });

  it('should set disabled prop on textarea', () => {
    const wrapper = shallow(<TextareaField disabled {...props} />);

    const textarea = () => wrapper.find('TextareaField__Textarea');
    expect(textarea().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(textarea().props().disabled).toBe(false);
  });

  it('should set tabindex prop on textarea', () => {
    const wrapper = shallow(<TextareaField tabIndex="-1" {...props} />);

    const textarea = () => wrapper.find('TextareaField__Textarea');
    expect(textarea().props().tabIndex).toBe('-1');
  });

  it('should execute onChange method', () => {
    const wrapper = shallow(<TextareaField label="Default" {...props} />);
    const textarea = () => wrapper.find('TextareaField__Textarea');

    textarea().simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  describe('styles', () => {
    const component = mount(<TextareaField help="Help text" error {...props} />);
    const help = component.find('TextareaField__HelpText');
    const textarea = component.find('TextareaField__Textarea');
    const theme = textarea.prop('theme');

    it('should have error classname', () => {
      expect(textarea.hasClass('error')).toBe(true);
      expect(textarea).toHaveStyleRule(
        'border-color',
        theme.components.textareaFieldErrorBorderColor,
        {
          modifier: '&.error'
        }
      );
    });

    it('should have error classname', () => {
      expect(help.hasClass('error')).toBe(true);
      expect(help).toHaveStyleRule('color', theme.components.textareaFieldErrorHelpColor, {
        modifier: '&.error'
      });
    });
  });
});
