import React from 'react';
import { shallow } from 'enzyme';
import MapActions from '.';
import MapActionsSkeleton from './MapActionsSkeleton';

describe(`MapActions`, () => {
  describe('Normal', () => {
    it('should render children', () => {
      const wrapper = shallow(<MapActions>Test</MapActions>);
      const message = () => wrapper.find('MapActions__StyledContent');
      expect(message().text()).toBe('Test');
    });

    it('should render loading Skeleton', () => {
      const wrapper = shallow(<MapActions isLoading />);
      const skeleton = () => wrapper.find(MapActionsSkeleton);
      expect(skeleton().exists()).toBe(true);
    });

    it('must change icon when button is pressed', () => {
      const wrapper = shallow(<MapActions>Test</MapActions>);
      wrapper.find('MapActions__StyledButton').simulate('click');
      expect(wrapper.find('IconArrowDoubleLeft').exists()).toBe(true);
    });
  });
});
