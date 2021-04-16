import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Tabs from './index';
import Tab from './Tab/index';

describe(`Tabs`, () => {
  it('should set the active tab by index', () => {
    const wrapper = shallow(
      <Tabs value={0}>
        <Tab label="Label 1" />
        <Tab label="Label 2" />
      </Tabs>
    );

    expect(wrapper.find('Tab').at(0).props().active).toBe(true);
    expect(wrapper.find('Tab').at(1).props().active).toBe(false);
  });

  it('should set the active tab using tab values', () => {
    const wrapper = shallow(
      <Tabs value={'b'}>
        <Tab label="Label 1" value="a" />
        <Tab label="Label 2" value="b" />
      </Tabs>
    );

    expect(wrapper.find('Tab').at(0).props().active).toBe(false);
    expect(wrapper.find('Tab').at(1).props().active).toBe(true);
  });

  it('fails on invalid child', () => {
    const invalidChild = 'stringToFail';
    const wrapper = shallow(
      <Tabs>
        {invalidChild}
        <Tab header="testHeader">Text</Tab>
      </Tabs>
    );
    expect(wrapper.find('Tabs__StyledTabsContainer').children().length).toBe(1);
  });

  describe('events', () => {
    it('should invoke onChange with expected value', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Tabs value={0} onChange={onChange}>
          <Tab label="Label 1" />
          <Tab label="Label 2" />
        </Tabs>
      );

      wrapper.find('Tab').last().simulate('click');
      const [event, index] = onChange.mock.calls[0]; // eslint-disable-line no-unused-vars

      expect(onChange).toHaveBeenCalled();
      expect(index).toBe(1);
    });
  });
});
