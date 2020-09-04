import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './../index';
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

  it('should render two Accordion no expanded ', () => {
    const wrapper = shallow(
      <AccordionList toggleOnExpand={false}>
        <Accordion header={'Accordion title'}>First Accordion</Accordion>
        <Accordion header={'Expanded by default'} isDefaultExpanded>
          Expanded
        </Accordion>
      </AccordionList>
    );

    wrapper.children().forEach(node => {
      expect(node.prop('expanded')).toBe(false);
    });
  });
});
