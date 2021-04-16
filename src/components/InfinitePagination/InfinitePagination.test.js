import * as React from 'react';
import { shallow } from 'enzyme';
import InfinitePagination from './index';

describe(`InfinitePagination`, () => {
  it('should render label', () => {
    const wrapper = shallow(
      <InfinitePagination currentCount={50} totalCount={100} label="testLabel"></InfinitePagination>
    );
    const message = () => wrapper.find('InfinitePagination__StyledPaginationLabel');
    expect(message().text()).toBe('testLabel');
  });

  it('must render certain value of width', () => {
    const wrapper = shallow(
      <InfinitePagination currentCount={50} totalCount={100} label="testLabel"></InfinitePagination>
    );
    const message = () => wrapper.find('span');
    expect(message().prop('style')).toEqual({ width: '50%' });
  });
});
