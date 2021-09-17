import React from 'react';
import { mount, shallow } from 'enzyme';
import Carousel from '.';

const CAROUSEL_SLIDES = [
  'https://picsum.photos/id/237/200',
  'https://picsum.photos/id/247/200',
  'https://picsum.photos/id/217/200'
];

const TestComponent = () => <div>test</div>;
TestComponent.displayName = 'TestComponent';

describe(`Carousel`, () => {
  it('should render all slides', () => {
    const wrapper = shallow(<Carousel slides={CAROUSEL_SLIDES} />);

    const slides = wrapper.find('CarouselSlide');
    expect(slides).toHaveLength(3);
  });

  it('should have prev button hidden on first slide', () => {
    const wrapper = mount(<Carousel slides={CAROUSEL_SLIDES} loop={false} />);

    const buttons = wrapper.find('Carousel__ControlButton');

    expect(buttons).toHaveLength(1);
  });

  it('should not have control buttons if only 1 slide', () => {
    const wrapper = mount(<Carousel slides={['https://picsum.photos/id/237/200']} />);

    const buttons = wrapper.find('Carousel__ControlButton');

    expect(buttons).toHaveLength(0);
  });

  it('should call onChange when clicking next with active slide', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Carousel thumbnailsEnabled slides={CAROUSEL_SLIDES} onChange={onChange} />
    );

    const buttons = wrapper.find('Carousel__ControlButton');
    buttons.at(1).simulate('click');

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('should call onChange when clicking previous with active slide', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Carousel thumbnailsEnabled slides={CAROUSEL_SLIDES} onChange={onChange} />
    );

    const leftButton = wrapper.find('Carousel__ControlButton');
    leftButton.at(0).simulate('click');

    expect(onChange).toHaveBeenCalled();
  });

  it('should overwrite a control button', () => {
    const wrapper = mount(<Carousel slides={CAROUSEL_SLIDES} prevButton={<TestComponent />} />);

    const prevButton = wrapper.find(TestComponent);
    expect(prevButton.exists()).toBe(true);
  });
});
