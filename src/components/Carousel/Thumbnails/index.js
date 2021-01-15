import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';
import Skeleton from '../../Skeleton/index';

const StyledThumbContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.small3};
  height: ${({ thumbCount }) => `calc((100% / ${thumbCount}) + 4px)`};
  position: relative;
`;
StyledThumbContainer.defaultProps = {
  theme: defaultTheme
};

const StyledThumbButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  background-image: url(${({ src }) => src});
  background-size: cover;
  height: 100%;
  border-radius: ${({ rounded, theme }) => (rounded ? theme.spacings.small1 : 0)};
`;
StyledThumbButton.defaultProps = {
  theme: defaultTheme
};

export const Thumb = ({ onClick, imgSrc, index, thumbCount, rounded, visible }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(false);

  const setLoaded = useCallback(() => {
    if (visible) setHasLoaded(true);
  }, [visible, setHasLoaded]);

  useEffect(() => {
    if (visible && !backgroundImage) {
      const image = new Image();
      image.src = imgSrc;
      image.onload = setLoaded;
      setBackgroundImage(image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <StyledThumbContainer thumbCount={thumbCount}>
      {visible ? (
        <StyledThumbButton
          rounded={rounded}
          onClick={() => onClick(index)}
          src={backgroundImage ? backgroundImage.src : ''}
        />
      ) : (
        <Skeleton variant="text" height="100%" width="100%" />
      )}
    </StyledThumbContainer>
  );
};
