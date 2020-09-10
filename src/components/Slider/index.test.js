import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';

describe(`Slider`, () => {
  const commonProps = {
    onChange: jest.fn(),
    min: 0,
    max: 100
  };

  it('should render Range option', () => {
    const wrapper = shallow(<Slider value={[10, 90]} variant="range" {...commonProps} />);
    const range = () => wrapper.find('ComponentEnhancer(Range)');
    expect(range().exists()).toBe(true);
  });

  it('should render prefix', () => {
    const wrapper = shallow(
      <Slider prefix="prefix" value={[10, 90]} variant="range" {...commonProps} />
    );
    const prefix = wrapper.find('Slider__PrefixSuffix').first();
    expect(prefix.hasClass('prefix')).toBe(true);
  });
});
