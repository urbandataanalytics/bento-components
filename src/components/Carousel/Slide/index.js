import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from '../../Skeleton/index';
import defaultTheme from '../../../themes/defaultTheme';

const StyledSlideContainer = styled.div`
  min-width: 100%;
  position: relative;
  height: 100%;
`;
StyledSlideContainer.defaultProps = {
  theme: defaultTheme
};

const StyledCarouselSlide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  &:hover {
    cursor: pointer;
  }
`;
StyledCarouselSlide.defaultProps = {
  theme: defaultTheme
};

const StyledSlideImage = styled.img`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
  transition: ${({ theme }) => theme.components.carouselSlideTransition};
`;
StyledSlideImage.defaultProps = {
  theme: defaultTheme
};

const CarouselSlide = React.forwardRef((props, ref) => {
  const { src, visible, onClick, index, ...other } = props;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(false);

  const setLoaded = useCallback(() => {
    if (visible) setHasLoaded(true);
  }, [visible, setHasLoaded]);

  useEffect(() => {
    if (visible && !backgroundImage) {
      const image = new Image();
      image.src = src;
      image.onload = setLoaded;
      setBackgroundImage(image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <StyledSlideContainer>
      {visible ? (
        <StyledCarouselSlide
          imageSrc={backgroundImage ? backgroundImage.src : ''}
          loaded={hasLoaded}
          onClick={() => onClick(index)}
          {...other}
        />
      ) : (
        <Skeleton variant="text" height="100%" width="100%" />
      )}
    </StyledSlideContainer>
  );
});

CarouselSlide.propTypes = {
  src: PropTypes.string.isRequired,
  visible: PropTypes.bool
};

CarouselSlide.displayName = 'CarouselSlide';

export default CarouselSlide;
