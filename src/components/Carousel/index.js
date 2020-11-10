import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components';
import CarouselSlide from './Slide';
import { IconChevronRight, IconChevronLeft } from '../../icons';
import useTheme from '../../hooks/useTheme/index';
import defaultTheme from '../../themes/defaultTheme';

const ControlButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: calc(50% - 16px);
  left: ${prop => prop.left};
  right: ${prop => prop.right};
  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const CarouselComponent = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    ${ControlButton} {
      opacity: 1;
    }
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselSlidesContainer = styled.div`
  display: flex;
  user-select: none;
`;

const Carousel = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const { slides, loop, draggable, prevButton, nextButton, onChange, ...other } = props;
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
        React.cloneElement(prevButton, { onClick: scrollPrev, enabled: prevBtnEnabled })
      ) : (
        <ControlButton onClick={scrollPrev} enabled={prevBtnEnabled} left="10px">
          <IconChevronLeft customColor={theme.color.charcoal800} />
        </ControlButton>
      )}
      {nextButton ? (
        React.cloneElement(nextButton, { onClick: scrollNext, enabled: nextBtnEnabled })
      ) : (
        <ControlButton onClick={scrollNext} enabled={nextBtnEnabled} right="10px">
          <IconChevronRight customColor={theme.color.charcoal800} />
        </ControlButton>
      )}
    </CarouselComponent>
  );
});

Carousel.propTypes = {
  isLoading: PropTypes.bool,
  loop: PropTypes.bool,
  draggable: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  prevButton: PropTypes.node,
  nextButton: PropTypes.node
};

Carousel.defaultProps = {
  loop: true,
  draggable: false,
  slides: [],
  onChange: () => {}
};

Carousel.displayName = 'Carousel';

export default Carousel;
