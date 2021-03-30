import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from 'styled-components';
import CarouselSlide from './Slide';
import { IconChevronLeft, IconChevronRight } from '../../icons';
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
  border-radius: ${({ rounded, theme }) => (rounded ? theme.spacings.small1 : 0)};
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
    controlOffset,
    draggable,
    loop,
    nextButton,
    onChange,
    onClick,
    onThumbClick,
    prevButton,
    rounded,
    slides,
    startIndex,
    thumbCount,
    thumbnailStartIndex,
    thumbnailsEnabled,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (!embla || (thumbnailsEnabled && !emblaThumbs)) return;
    if (thumbnailsEnabled) emblaThumbs.scrollNext();
    embla.scrollNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on('select', onSelect);

    embla.on('select', findSlidesInView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {...other}
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
          <ThumbsContainer ref={thumbViewportRef} rounded={rounded}>
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
  controlOffset: PropTypes.string,
  draggable: PropTypes.bool,
  loop: PropTypes.bool,
  nextButton: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onThumbClick: PropTypes.func,
  prevButton: PropTypes.node,
  rounded: PropTypes.bool,
  slides: PropTypes.array.isRequired,
  startIndex: PropTypes.number,
  thumbCount: PropTypes.number,
  thumbnailStartIndex: PropTypes.number,
  thumbnailsEnabled: PropTypes.bool
};

Carousel.defaultProps = {
  controlOffset: '10px',
  draggable: false,
  loop: true,
  onChange: () => {},
  onClick: () => {},
  onThumbClick: () => {},
  rounded: false,
  slides: [],
  startIndex: 0,
  thumbCount: 3,
  thumbnailStartIndex: 1,
  thumbnailsEnabled: false
};

Carousel.displayName = 'Carousel';

export default Carousel;
