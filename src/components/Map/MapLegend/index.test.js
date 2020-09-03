import React from 'react';
import { shallow } from 'enzyme';
import MapLegend from './';
import MapLegendSkeleton from './MapLegendSkeleton';

describe(`MapLegend`, () => {
  const commonProps = {
    rangeColors: [
      '#03045E',
      '#ADE8F4',
      '#90D8EF',
      '#48B5E4',
      '#008BC7',
      '#0077B6',
      '#023E8A',
      '#03045E'
    ],
    rangeTextMin: 'Min',
    rangeTextMax: 'Max'
  };
  describe('Normal', () => {
    it('should render title content', () => {
      const wrapper = shallow(<MapLegend title="Title" {...commonProps} />);
      const message = () => wrapper.find('MapLegend__StyledTitle');
      expect(message().text()).toBe('Title');
    });

    it('should render description content', () => {
      const wrapper = shallow(<MapLegend description="Description" {...commonProps} />);
      const message = () => wrapper.find('MapLegend__StyledDescription');
      expect(message().text()).toBe('Description');
    });

    it('should render colors legend', () => {
      const wrapper = shallow(<MapLegend {...commonProps} />);
      const colors = wrapper.find('MapLegend__StyledRangeColors');
      expect(colors.children().find('MapLegend__StyledColor').length).toEqual(
        commonProps.rangeColors.length
      );
    });

    it('should render colors style', () => {
      const wrapper = shallow(<MapLegend {...commonProps} />);
      const colors = wrapper.find('MapLegend__StyledRangeColors');
      expect(colors.children().find('MapLegend__StyledColor').first().props().color).toEqual(
        commonProps.rangeColors[0]
      );
    });

    it('should render min text', () => {
      const wrapper = shallow(<MapLegend {...commonProps} />);
      const minMaxText = () => wrapper.find('MapLegend__StyledMinMaxText');
      expect(minMaxText().children().first().text()).toBe(commonProps.rangeTextMin);
    });

    it('should render max text', () => {
      const wrapper = shallow(<MapLegend {...commonProps} />);
      const minMaxText = () => wrapper.find('MapLegend__StyledMinMaxText');
      expect(minMaxText().children().last().text()).toBe(commonProps.rangeTextMax);
    });

    it('should render loading Skeleton', () => {
      const wrapper = shallow(<MapLegend isLoading {...commonProps} />);
      const skeleton = () => wrapper.find(MapLegendSkeleton);
      expect(skeleton().exists()).toBe(true);
    });
  });
});
