import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components';
import CarouselSlide from './Slide';
import { IconChevronRight, IconChevronLeft } from '../../icons';
import useTheme from '../../hooks/useTheme/index';
import defaultTheme from '../../themes/defaultTheme';

const ControlButton = styled.button`
  width: ${props => props.theme.components.carouselButtonSize};
  height: ${props => props.theme.components.carouselButtonSize};
  border-radius: 50%;
  background: ${props => props.theme.components.carouselButtonBackground};
  position: absolute;
  top: calc(50% - 16px);
  left: ${props => props.left};
  right: ${props => props.right};
  opacity: 0;
  transition: ${props => props.theme.components.carouselButtonTransition};

  &:hover {
    background: ${props => props.theme.components.carouselButtonHoverBackground};
  }
`;
ControlButton.defaultProps = {
  theme: defaultTheme
};

const CarouselComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    ${ControlButton} {
      opacity: 1;
    }
  }
`;
CarouselComponent.defaultProps = {
  theme: defaultTheme
};

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
CarouselContainer.defaultProps = {
  theme: defaultTheme
};

const CarouselSlidesContainer = styled.div`
  display: flex;
  user-select: none;
  height: 100%;
`;
CarouselSlidesContainer.defaultProps = {
  theme: defaultTheme
};

const Carousel = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    slides,
    loop,
    draggable,
    prevButton,
    nextButton,
    onChange,
    controlOffset,
    ...other
  } = props;
  const [emblaRef, embla] = useEmblaCarousel({ loop, draggable });
  const [slidesInView, setSlidesInView] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    onChange(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);

  const findSlidesInView = useCallback(() => {
    if (!embla) return;

    setSlidesInView(slidesInView => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }
      const inView = embla.slidesInView(true).filter(index => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on('select', onSelect);

    embla.on('select', findSlidesInView);
  }, [embla, onSelect, findSlidesInView]);

  return (
    <CarouselComponent>
      <CarouselContainer ref={emblaRef}>
        <CarouselSlidesContainer>
          {slides.map((slide, index) => (
            <CarouselSlide key={index} src={slide} visible={slidesInView.indexOf(index) > -1} />
          ))}
        </CarouselSlidesContainer>
      </CarouselContainer>
      {prevButton ? (
        prevBtnEnabled ? (
          React.cloneElement(prevButton, {
            onClick: scrollPrev
          })
        ) : null
      ) : prevBtnEnabled ? (
        <ControlButton onClick={scrollPrev} left={controlOffset}>
          <IconChevronLeft customColor={theme.color.charcoal800} />
        </ControlButton>
      ) : null}
      {nextButton ? (
        nextBtnEnabled ? (
          React.cloneElement(nextButton, {
            onClick: scrollNext
          })
        ) : null
      ) : nextBtnEnabled ? (
        <ControlButton onClick={scrollNext} right={controlOffset}>
          <IconChevronRight customColor={theme.color.charcoal800} />
        </ControlButton>
      ) : null}
    </CarouselComponent>
  );
});

Carousel.propTypes = {
  loop: PropTypes.bool,
  draggable: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  prevButton: PropTypes.node,
  nextButton: PropTypes.node,
  controlOffset: PropTypes.string
};

Carousel.defaultProps = {
  loop: true,
  draggable: false,
  slides: [],
  onChange: () => {},
  controlOffset: '10px'
};

Carousel.displayName = 'Carousel';

export default Carousel;
