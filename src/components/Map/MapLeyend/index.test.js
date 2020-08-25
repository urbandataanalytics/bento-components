import React from 'react';
import { shallow } from 'enzyme';
import MapLeyend from './';
import MapLeyendSkeleton from './MapLeyendSkeleton';

describe(`MapLeyend`, () => {
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
      const wrapper = shallow(<MapLeyend title="Title" {...commonProps} />);
      const message = () => wrapper.find('MapLeyend__StyledTitle');
      expect(message().text()).toBe('Title');
    });

    it('should render description content', () => {
      const wrapper = shallow(<MapLeyend description="Description" {...commonProps} />);
      const message = () => wrapper.find('MapLeyend__StyledDescription');
      expect(message().text()).toBe('Description');
    });

    it('should render colors legend', () => {
      const wrapper = shallow(<MapLeyend {...commonProps} />);
      const colors = wrapper.find('MapLeyend__StyledRangeColors');
      expect(colors.children().find('MapLeyend__StyledColor').length).toEqual(
        commonProps.rangeColors.length
      );
    });

    it('should render colors style', () => {
      const wrapper = shallow(<MapLeyend {...commonProps} />);
      const colors = wrapper.find('MapLeyend__StyledRangeColors');
      expect(colors.children().find('MapLeyend__StyledColor').first().props().color).toEqual(
        commonProps.rangeColors[0]
      );
    });

    it('should render min text', () => {
      const wrapper = shallow(<MapLeyend {...commonProps} />);
      const minMaxText = () => wrapper.find('MapLeyend__StyledMinMaxText');
      expect(minMaxText().children().first().text()).toBe(commonProps.rangeTextMin);
    });

    it('should render max text', () => {
      const wrapper = shallow(<MapLeyend {...commonProps} />);
      const minMaxText = () => wrapper.find('MapLeyend__StyledMinMaxText');
      expect(minMaxText().children().last().text()).toBe(commonProps.rangeTextMax);
    });

    it('should render loading Skeleton', () => {
      const wrapper = shallow(<MapLeyend isLoading {...commonProps} />);
      const skeleton = () => wrapper.find(MapLeyendSkeleton);
      expect(skeleton().exists()).toBe(true);
    });
  });
});
