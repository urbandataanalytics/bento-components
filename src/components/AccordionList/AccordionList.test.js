import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from './Accordion/index';
import AccordionList from './index';

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
});
