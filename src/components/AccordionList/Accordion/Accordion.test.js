import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './index';
import { IconUser } from '../../../icons';

describe(`Accordion`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<Accordion header={'Title'}>Message</Accordion>);

    const message = () => wrapper.find('Accordion__StyledAccordionContent');
    const header = () => wrapper.find('Accordion__StyledHeaderContent');
    expect(message().text()).toBe('Message');
    expect(header().text()).toBe('Title');
  });

  it('should render sub header content', () => {
    const wrapper = shallow(
      <Accordion header={'Title'} subHeader={'subheader message'}>
        Message
      </Accordion>
    );

    const subHeader = () => wrapper.find('Accordion__StyledSubHeaderContent');
    expect(subHeader().text()).toBe('subheader message');
  });

  it('should render right content', () => {
    const wrapper = shallow(
      <Accordion header={'Title'} rightContent={<IconUser />}>
        Message
      </Accordion>
    );

    const rightContent = () => wrapper.find('Accordion__StyledRightContent');
    expect(rightContent().find(<IconUser />)).toBeTruthy();
  });

  it('should render left content', () => {
    const wrapper = shallow(
      <Accordion header={'Title'} leftContent={<IconUser />}>
        Message
      </Accordion>
    );

    const leftContent = () => wrapper.find('Accordion__StyledLeftContent');
    expect(leftContent().find(<IconUser />)).toBeTruthy();
  });

  it('should invoke onClick with expected value', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Accordion header={'Title'} onClick={onClick}>
        Message
      </Accordion>
    );

    wrapper.find('Accordion__StyledAccordionLabel').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
