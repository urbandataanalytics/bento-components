import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Dropdown from '.';

describe(`Dropdown`, () => {
  it('should not render children content', () => {
    const wrapper = shallow(<Dropdown label={'Label'}>Message</Dropdown>);

    const message = () => wrapper.find('Dropdown__ChildrenContainer');
    expect(message().exists()).toBe(false);
  });

  it('should render children content with styles when is open', () => {
    const wrapper = mount(
      <Dropdown isOpen={true} label="Label">
        <p>Child 1</p>
        <p>Child 2</p>
        <p>Child 3</p>
      </Dropdown>
    );

    const message = () => wrapper.find('Dropdown__ChildrenContainer');
    expect(message().exists()).toBe(true);
  });

  it('should render children content when is open is false', () => {
    const wrapper = shallow(
      <Dropdown isOpen={false} label={'Label'}>
        Message
      </Dropdown>
    );

    const message = () => wrapper.find('Dropdown__ChildrenContainer');
    expect(message().exists()).toBe(false);
  });

  it('should render children content on label click', () => {
    const wrapper = shallow(<Dropdown label={'Label'}>Message</Dropdown>);

    wrapper.find('Dropdown__StyledLabel').simulate('click');

    const message = () => wrapper.find('Dropdown__ChildrenContainer div');
    expect(message().exists()).toBe(true);
    expect(message().text()).toBe('Message');
  });

  it('should render label content', () => {
    const wrapper = shallow(<Dropdown label={'Label'}>Message</Dropdown>);

    const message = () => wrapper.find('Dropdown__StyledLabel');
    expect(message().text()).toBe('Label');
  });

  it('should make childrenContainer dissapear when closeOnClickInside is true and click is done', () => {
    const wrapper = shallow(
      <Dropdown closeOnClickInside={true} label="Label">
        <p id="child1">Child 1</p>
      </Dropdown>
    );

    //Opens dropdown from button
    wrapper.find('Dropdown__StyledLabel').simulate('click');

    //Click inside to close
    wrapper.find('Dropdown__ChildrenContainer').simulate('click');

    expect(wrapper.find('Dropdown__ChildrenContainer').exists()).toBe(false);
  });

  it('should not close dropdown whtn inside click if closeOnClickInside is false', () => {
    const wrapper = shallow(
      <Dropdown closeOnClickInside={false} label="Label">
        <p id="child1">Child 1</p>
      </Dropdown>
    );

    //Opens dropdown from button
    wrapper.find('Dropdown__StyledLabel').simulate('click');

    //Click inside to close
    wrapper.find('Dropdown__ChildrenContainer').simulate('click');

    expect(wrapper.find('Dropdown__ChildrenContainer').exists()).toBe(true);
  });

  // it('childrenContainer should dissapear when closeOnClickOutside is true and click is done', () => {
  //   const wrapper = mount(
  //     <Dropdown closeOnClickOutside={true} label="Label">
  //       <p id="child1">Child 1</p>
  //     </Dropdown>
  //   );

  //   wrapper.find('Dropdown__StyledLabel').simulate('click');
  // @ TODO: Needs to register a click action outside the component
  //    expect(wrapper.find('Dropdown__ChildrenContainer').exists()).toBe(false);
  // });
});
