import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion/index';
import AccordionList from './index';
import { Children } from 'react';

describe(`Accordion List`, () => {
  it('should render two Accordion components with ', () => {
    const wrapper = shallow(
      <AccordionList>
        <Accordion header={'Accordion title'}>First Accordion</Accordion>
        <Accordion header={'Expanded by default'} isDefaultExpanded>
          Expanded
        </Accordion>
      </AccordionList>
    );

    expect(wrapper.children().length).toEqual(2);
  });

  it('should render Accordion with multiple expands ', () => {
    const wrapper = mount(
      <AccordionList toggleOnExpand={false}>
        <Accordion header={'Accordion title'} expanded>
          First Accordion
        </Accordion>
        <Accordion header={'Expanded by default'} expanded>
          Expanded
        </Accordion>
      </AccordionList>
    );

    wrapper.find('Accordion').forEach(node => {
      expect(node.prop('expanded')).toBe(true);
    });
  });

  it('test Toggle on expand true with no expanded child', () => {
    const wrapper = shallow(
      <AccordionList toggleOnExpand>
        <Accordion id="acc1" header={'Title 1'}>
          <p id="child1">FirstMessage</p>
        </Accordion>
        <Accordion id="acc2" header={'Title 2'}>
          <p id="child2">SecondMessage</p>
          <p id="child3">ThirdMessage</p>
        </Accordion>
      </AccordionList>
    );
    wrapper.find('#acc1').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(true);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(false);

    wrapper.find('#acc2').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(false);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(true);

    wrapper.find('#acc2').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(false);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(false);
  });

  it('tests toggleOnExpand false with expandedChild', () => {
    const wrapper = shallow(
      <AccordionList toggleOnExpand={false}>
        <Accordion id="acc1" header={'Title 1'}>
          <p id="child1">FirstMessage</p>
        </Accordion>
        <Accordion id="acc2" header={'Title 2'}>
          <p id="child2">SecondMessage</p>
          <p id="child3">ThirdMessage</p>
        </Accordion>
      </AccordionList>
    );

    wrapper.find('#acc1').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(true);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(false);

    wrapper.find('#acc2').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(true);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(true);

    wrapper.find('#acc2').simulate('click');

    expect(wrapper.find('#acc1').prop('expanded')).toBe(true);
    expect(wrapper.find('#acc2').prop('expanded')).toBe(false);
  });
});
