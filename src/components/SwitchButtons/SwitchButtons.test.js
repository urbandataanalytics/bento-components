import * as React from 'react';
import { mount, shallow } from 'enzyme';
import SwitchButtons from './index';
import ButtonLink from '../ButtonLink/index';

describe(`SwitchButtons`, () => {
  it('should set the active tab by index', () => {
    const wrapper = shallow(
      <SwitchButtons value={0}>
        <ButtonLink />
        <ButtonLink />
      </SwitchButtons>
    );

    expect(wrapper.find('ButtonLink').at(0).props().variant).toBe('primary');
    expect(wrapper.find('ButtonLink').at(1).props().variant).toBe('secondary');
  });

  it('should set the variant tab using tab values', () => {
    const wrapper = shallow(
      <SwitchButtons value={'b'}>
        <ButtonLink value="a" />
        <ButtonLink value="b" />
      </SwitchButtons>
    );

    expect(wrapper.find('ButtonLink').at(0).props().variant).toBe('secondary');
    expect(wrapper.find('ButtonLink').at(1).props().variant).toBe('primary');
  });

  it('fails on invalid child', () => {
    const invalidChild = 'stringToFail';
    const wrapper = shallow(
      <SwitchButtons value={'b'}>
        {invalidChild}
        <ButtonLink value="b" />
      </SwitchButtons>
    );
    expect(wrapper.find('SwitchButtons__StyledSwitchButtonsContainer').children().length).toBe(1);
  });

  describe('events', () => {
    it('should invoke onChange with expected value', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <SwitchButtons value={0} onChange={onChange}>
          <ButtonLink />
          <ButtonLink />
        </SwitchButtons>
      );

      wrapper.find('ButtonLink').last().simulate('click');
      const [event, index] = onChange.mock.calls[0]; // eslint-disable-line no-unused-vars

      expect(onChange).toHaveBeenCalled();
      expect(index).toBe(1);
    });
  });
});
