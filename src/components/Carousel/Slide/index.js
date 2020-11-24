import React, { useCallback, useState } from 'react';
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
  transition: ${props => props.theme.components.carouselSlideTransition};
  opacity: ${props => (props.loaded ? 1 : 0)};
`;
StyledSlideImage.defaultProps = {
  theme: defaultTheme
};

const CarouselSlide = React.forwardRef((props, ref) => {
  const { src, visible, ...other } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (visible) setHasLoaded(true);
  }, [visible, setHasLoaded]);

  return (
    <StyledSlideContainer>
      <StyledCarouselSlide src={src}>
        {visible ? (
          <StyledSlideImage loaded={hasLoaded} src={src} onLoad={setLoaded} />
        ) : (
          <Skeleton variant="text" height="100%" width="100%" />
        )}
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
