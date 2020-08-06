import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Skeleton from './index';

describe(`Skeleton`, () => {
  describe(`Styles`, () => {
    const width = '100px';
    const height = '15px';

    const component = mount(<Skeleton width={width} height={height} />);
    const container = component.find('Skeleton__StyledSkeleton');

    it('should have column style', () => {
      expect(container).toHaveStyleRule('width', width);
      expect(container).toHaveStyleRule('height', height);
    });
  });
});
