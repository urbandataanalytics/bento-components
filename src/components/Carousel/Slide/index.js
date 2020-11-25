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
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
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

  let backgroundImage = null;

  // backgroundImage.src = src;

  // backgroundImage.onload = () => {
  //   setHasLoaded(true);
  // };

  const setLoaded = useCallback(() => {
    if (visible) setHasLoaded(true);
  }, [visible, setHasLoaded]);

  useEffect(() => {
    if (visible && !backgroundImage) {
      backgroundImage = new Image();
      backgroundImage.src = src;
      backgroundImage.onload = setLoaded;
    }
  }, [visible]);

  console.log(backgroundImage);
  return (
    <StyledSlideContainer>
      <StyledCarouselSlide
        src={backgroundImage ? backgroundImage.src : ''}
        loaded={hasLoaded}
        onClick={() => onClick(index)}
      >
        {/* {visible ? (
          <StyledSlideImage loaded={hasLoaded} src={src} onLoad={setLoaded} />
        ) : (
          <Skeleton variant="text" height="100%" width="100%" />
        )} */}
      </StyledCarouselSlide>
    </StyledSlideContainer>
  );
});

CarouselSlide.propTypes = {
  src: PropTypes.string.isRequired,
  visible: PropTypes.bool
};

CarouselSlide.displayName = 'CarouselSlide';

export default CarouselSlide;
