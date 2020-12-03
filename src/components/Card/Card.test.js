import * as React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe(`Card`, () => {
  it('should render children content', () => {
    const wrapper = shallow(<Card>Content</Card>);
    const message = () => wrapper.find('Card__StyledCard');
    expect(message().text()).toBe('Content');
  });
});
