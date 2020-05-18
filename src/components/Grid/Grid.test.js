import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Grid from './index';

describe(`Grid`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<Grid>Content</Grid>);
    const message = () => wrapper.find('Grid__StyledGrid');
    expect(message().text()).toBe('Content');
  });

  describe(`Styles`, () => {
    const gridColumnStyle = 'repeat(3,1fr)';
    const gridGapStyle = '15px';

    const component = mount(<Grid columns={gridColumnStyle} gap={gridGapStyle}></Grid>);
    const container = component.find('Grid__StyledGrid');

    it('should have column style', () => {
      expect(container).toHaveStyleRule('grid-template-columns', gridColumnStyle);
    });

    it('should have gap style', () => {
      expect(container).toHaveStyleRule('grid-gap', gridGapStyle);
    });
  });
});
