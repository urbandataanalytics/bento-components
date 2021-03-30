import * as React from 'react';
import { mount, shallow } from 'enzyme';
import ToggleGroup from './index';
import ButtonLink from '../ButtonLink/index';

describe(`ToggleGroup`, () => {
  it('should set the active tab by index', () => {
    const wrapper = shallow(
      <ToggleGroup value={0}>
        <ButtonLink />
        <ButtonLink />
      </ToggleGroup>
    );

    expect(wrapper.find('ButtonLink').at(0).props().variant).toBe('primary');
    expect(wrapper.find('ButtonLink').at(1).props().variant).toBe('secondary');
  });

  it('should set the variant tab using tab values', () => {
    const wrapper = shallow(
      <ToggleGroup value={'b'}>
        <ButtonLink value="a" />
        <ButtonLink value="b" />
      </ToggleGroup>
    );

    expect(wrapper.find('ButtonLink').at(0).props().variant).toBe('secondary');
    expect(wrapper.find('ButtonLink').at(1).props().variant).toBe('primary');
  });

  it('fails on invalid child', () => {
    const invalidChild = 'stringToFail';
    const wrapper = shallow(
      <ToggleGroup value={'b'}>
        {invalidChild}
        <ButtonLink value="b" />
      </ToggleGroup>
    );
    expect(wrapper.find('ToggleGroup__StyledToggleGroupContainer').children().length).toBe(1);
  });

  describe('events', () => {
    it('should invoke onChange with expected value', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <ToggleGroup value={0} onChange={onChange}>
          <ButtonLink />
          <ButtonLink />
        </ToggleGroup>
      );

      wrapper.find('ButtonLink').last().simulate('click');
      const [event, index] = onChange.mock.calls[0]; // eslint-disable-line no-unused-vars

      expect(onChange).toHaveBeenCalled();
      expect(index).toBe(1);
    });
  });
});
