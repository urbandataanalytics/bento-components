import React from 'react';
import { shallow, mount } from 'enzyme';
import SelectField from './index';

describe(`SelectField`, () => {
  const props = {
    value: 'default Value',
    onChange: jest.fn(),
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' }
    ],
    type: 'text',
    size: 'medium'
  };

  it('should render the text from label prop', () => {
    const wrapper = shallow(<SelectField label="Default" {...props} />);
    const label = () => wrapper.find('SelectField__LabelText');

    expect(label().text()).toBe('Default');
  });

  it('should set disabled prop on input', () => {
    const wrapper = shallow(<SelectField disabled {...props} />);
    const input = () => wrapper.find('SelectField__StyledSelectField');
    expect(input().props().disabled).toBe(true);

    wrapper.setProps({ disabled: false });
    expect(input().props().disabled).toBe(false);
  });

  it('should set tab index prop on input', () => {
    const wrapper = shallow(<SelectField tabIndex="-1" {...props} />);
    const input = () => wrapper.find('SelectField__StyledSelectHeader');

    expect(input().props().tabIndex).toBe('-1');
  });

  it('should set size prop small', () => {
    const wrapper = shallow(<SelectField disabled {...props} />);
    const input = () => wrapper.find('SelectField__StyledSelectField');
    expect(input().props().size).toBe('medium');

    wrapper.setProps({ size: 'small' });
    expect(input().props().size).toBe('small');
  });

  it('should render options list content', () => {
    const wrapper = mount(<SelectField {...props} />);
    wrapper.find('SelectField__StyledSelectHeader').simulate('click');

    const options = () => wrapper.find('SelectField__StyledSelectList');
    expect(options().exists()).toBe(true);
  });

  xit('should execute onChange method', () => {
    const wrapper = shallow(<SelectField label="Default" {...props} />);
    wrapper.find('SelectField__StyledSelectHeader').simulate('click');

    const input = () => wrapper.find('SelectField__StyledSelectItem').at(0);
    input().simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  });
});
