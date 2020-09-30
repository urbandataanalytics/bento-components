import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';

describe(`Slider Component`, () => {
  const commonProps = {
    onChange: jest.fn(),
    min: 0,
    max: 100
  };

  describe('Range', () => {
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
      expect(prefix.text()).toBe('prefix');
    });

    it('should render suffix', () => {
      const wrapper = shallow(
        <Slider suffix="suffix" value={[10, 90]} variant="range" {...commonProps} />
      );

      const suffix = wrapper.find('Slider__PrefixSuffix').first();
      expect(suffix.hasClass('prefix')).toBe(false);
      expect(suffix.text()).toBe('suffix');
    });

    it('should call onChange when modifying PrefixSuffix input', () => {
      const event = {
        preventDefault() {},
        target: { name: 'min', value: '20' }
      };
      const wrapper = shallow(
        <Slider suffix="suffix" value={[10, 90]} variant="range" {...commonProps} />
      );

      const minInput = wrapper.find('Slider__MinMaxInput').first();
      minInput.simulate('blur', event);
      expect(commonProps.onChange).toBeCalledWith([20, 90]);
    });
  });
});
