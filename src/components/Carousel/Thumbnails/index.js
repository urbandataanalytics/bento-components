import React from 'react';
import styled from 'styled-components';

const StyledThumbContainer = styled.div`
  margin-bottom: 8px;
  // height: ${props => `calc((100% / ${props.thumbCount}) - (5.5px}))`};
  height: 100%;
`;

const StyledThumbButton = styled.button`
  touch-action: manipulation;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  // opacity: ${props => (props.selected ? 1 : 0.2)};
  background-image: url(${props => props.src});
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const StyledThumbImage = styled.img`
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: transparent;
  position: relative;
  display: block;
  overflow: hidden;
`;

export const Thumb = ({ selected, onClick, imgSrc, thumbCount = 3 }) => (
  <StyledThumbContainer selected={selected} thumbCount={thumbCount}>
    <StyledThumbButton onClick={onClick} src={imgSrc} />
  </StyledThumbContainer>
);
