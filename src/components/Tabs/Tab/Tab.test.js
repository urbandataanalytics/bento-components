import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Tab from './index';

describe(`Tab`, () => {
  it('should set the label text insde', () => {
    const wrapper = shallow(<Tab label="A Label" />);

    const component = wrapper.find('Tab__StyledTabLabel');
    expect(component.text()).toBe('A Label');
  });

  it('should display the badge value', () => {
    const wrapper = shallow(<Tab label="A Label" badge={42} />);

    const component = wrapper.find('Tab__StyledTabBadge');
    expect(component.text()).toBe('42');
  });

  describe('events', () => {
    it('should sent the tab value when clicking on it', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<Tab label="A Label" value={42} onChange={onChange} />);

      wrapper.find('Tab__StyledTabContainer').simulate('click');
      const [event, value] = onChange.mock.calls[0]; // eslint-disable-line no-unused-vars

      expect(onChange).toHaveBeenCalled();
      expect(value).toBe(42);
    });

    it('should not fire onChange if disabled', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<Tab label="A Label" value={42} onChange={onChange} disabled />);

      wrapper.find('Tab__StyledTabContainer').simulate('click');

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('styles', () => {
    it('should have active styles', () => {
      const component = mount(<Tab label="A Label" active />);
      const container = component.find('Tab__StyledTabContainer');
      const theme = container.prop('theme');

      expect(container).toHaveStyleRule('color', theme.components.tabColorActive);
      expect(container).toHaveStyleRule(
        'border-bottom',
        `3px solid ${theme.components.tabBorderColorActive}`
      );
    });

    it('should have disabled styles', () => {
      const component = mount(<Tab label="A Label" disabled />);
      const container = component.find('Tab__StyledTabContainer');
      const theme = container.prop('theme');

      expect(container).toHaveStyleRule('color', theme.components.tabColorDisabled);
      expect(container).toHaveStyleRule(
        'border-bottom',
        `3px solid ${theme.components.tabBorderColor}`
      );
    });
  });
});
