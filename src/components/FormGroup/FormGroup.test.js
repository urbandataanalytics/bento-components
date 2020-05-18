import * as React from 'react';
import { shallow, mount } from 'enzyme';
import FormGroup from './index';

describe(`FormGroup`, () => {
  const component = mount(<FormGroup />);
  const container = component.find('FormGroup__StyledFormGroup');
  const theme = container.prop('theme');

  it('should render children content', () => {
    const wrapper = shallow(<FormGroup>Content</FormGroup>);
    const message = () => wrapper.find('FormGroup__StyledFormGroup');
    expect(message().text()).toBe('Content');
  });

  describe(`Styles`, () => {
    it('should have margin bottom style', () => {
      expect(container).toHaveStyleRule('margin-bottom', theme.components.formGroupMarginBottom);
    });
  });
});
