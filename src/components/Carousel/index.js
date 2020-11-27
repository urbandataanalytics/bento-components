import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components';
import CarouselSlide from './Slide';
import { IconChevronRight, IconChevronLeft } from '../../icons';
import useTheme from '../../hooks/useTheme/index';
import defaultTheme from '../../themes/defaultTheme';
import { Thumb } from './Thumbnails';

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
  border-radius: ${({ rounded, theme }) => (rounded ? theme.spacings.small1 : 0)};
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

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: ${({ thumbnailsEnabled }) => (thumbnailsEnabled ? '75% 1fr' : '100% 1fr')};
  grid-gap: ${({ theme }) => theme.spacings.small3};
`;
CarouselWrapper.defaultProps = {
  theme: defaultTheme
};

const ThumbsContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Thumbs = styled.div`
  height: 100%;
  margin-bottom: -${({ theme }) => theme.spacings.small3};
`;
Thumbs.defaultProps = {
  theme: defaultTheme
};

const Carousel = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    slides,
    loop,
    draggable,
    rounded,
    prevButton,
    nextButton,
    onChange,
    controlOffset,
    thumbnailsEnabled,
    onThumbClick,
    thumbCount,
    onClick,
    startIndex,
    thumbnailStartIndex,
    ...other
  } = props;
  const [emblaRef, embla] = useEmblaCarousel({ loop, draggable, startIndex });
  const [slidesInView, setSlidesInView] = useState([]);
  const [thumbSlidesInView, setThumbSlidesInView] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    axis: 'y',
    loop: true,
    startIndex: thumbnailStartIndex,
    align: 'start'
  });

  const scrollPrev = useCallback(() => {
    if (!embla || (thumbnailsEnabled && !emblaThumbs)) return;
    if (thumbnailsEnabled) emblaThumbs.scrollPrev();
    embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (!embla || (thumbnailsEnabled && !emblaThumbs)) return;
    if (thumbnailsEnabled) emblaThumbs.scrollNext();
    embla.scrollNext();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla || (thumbnailsEnabled && !emblaThumbs)) return;
    onChange(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla, emblaThumbs]);

  const findSlidesInView = useCallback(() => {
    if (!embla) return;

    setSlidesInView(slidesInView => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }
      const inView = embla.slidesInView(true).filter(index => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
    if (thumbnailsEnabled) {
      setThumbSlidesInView(thumbSlidesInView => {
        const inView = emblaThumbs
          .slidesInView(true)
          .filter(index => thumbSlidesInView.indexOf(index) === -1);
        return thumbSlidesInView.concat(inView);
      });
    }
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on('select', onSelect);

    embla.on('select', findSlidesInView);
  }, [embla, onSelect, findSlidesInView]);

  return (
    <CarouselWrapper thumbnailsEnabled={thumbnailsEnabled}>
      <CarouselComponent>
        <CarouselContainer ref={emblaRef} rounded={rounded}>
          <CarouselSlidesContainer>
            {slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                index={index}
                src={slide}
                visible={slidesInView.indexOf(index) > -1}
                rounded={rounded}
                onClick={onClick}
              />
            ))}
          </CarouselSlidesContainer>
        </CarouselContainer>
        {prevButton ? (
          prevBtnEnabled ? (
            React.cloneElement(prevButton, { onClick: scrollPrev })
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
      {thumbnailsEnabled ? (
        <>
          <ThumbsContainer ref={thumbViewportRef}>
            <Thumbs>
              {slides.map((slide, index) => (
                <Thumb
                  key={index}
                  index={index}
                  imgSrc={slide}
                  onClick={onThumbClick}
                  rounded={rounded}
                  thumbCount={thumbCount}
                  visible={thumbSlidesInView.indexOf(index) > -1}
                />
              ))}
            </Thumbs>
          </ThumbsContainer>
        </>
      ) : (
        <></>
      )}
    </CarouselWrapper>
  );
});

Carousel.propTypes = {
  loop: PropTypes.bool,
  draggable: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
  prevButton: PropTypes.node,
  nextButton: PropTypes.node,
  controlOffset: PropTypes.string,
  thumbnailsEnabled: PropTypes.bool,
  thumbCount: PropTypes.number,
  onThumbClick: PropTypes.func,
  onClick: PropTypes.func,
  startIndex: PropTypes.number,
  thumbnailStartIndex: PropTypes.number
};

Carousel.defaultProps = {
  loop: true,
  draggable: false,
  slides: [],
  onChange: () => {},
  controlOffset: '10px',
  thumbnailsEnabled: false,
  rounded: false,
  thumbCount: 3,
  onThumbClick: () => {},
  onClick: () => {},
  startIndex: 0,
  thumbnailStartIndex: 1
};

Carousel.displayName = 'Carousel';

export default Carousel;
