import React from 'react';
import Carousel from './index';

export default {
  title: 'Carousel',
  component: Carousel
};

const getCommonProps = () => {
  return {
    slides: [
      'https://picsum.photos/id/237/200',
      'https://picsum.photos/id/247/200',
      'https://picsum.photos/id/217/200'
    ]
  };
};

export const Normal = () => {
  const containerStyle = {
    padding: '2rem'
  };
  return (
    <div style={containerStyle}>
      <Carousel {...getCommonProps()}></Carousel>
    </div>
  );
};
