import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledThumbContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.small2};
  height: ${({ thumbCount }) => `calc((100% / ${thumbCount}) + 2.5px)`};
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

export const Thumb = ({ onClick, imgSrc, index, thumbCount, rounded }) => (
  <StyledThumbContainer thumbCount={thumbCount}>
    <StyledThumbButton rounded={rounded} onClick={() => onClick(index)} src={imgSrc} />
  </StyledThumbContainer>
);
