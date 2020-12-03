import React from 'react';
import Carousel from './index';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Carousel',
  component: Carousel
};

const getCommonProps = () => {
  return {
    slides: [
      'https://images.adsttc.com/media/images/59a7/3256/b22e/3828/7b00/0277/slideshow/4.jpg?1504129602',
      'https://images.adsttc.com/media/images/59a7/3400/b22e/3828/7b00/0280/slideshow/21.jpg?1504130037',
      'https://images.adsttc.com/media/images/59a7/33f3/b22e/38a3/0300/04a3/slideshow/20.jpg?1504130022',
      'https://images.adsttc.com/media/images/59a7/3495/b22e/3828/7b00/0283/slideshow/30.jpg?1504130176',
      'https://images.adsttc.com/media/images/59a7/3466/b22e/3828/7b00/0282/slideshow/28.jpg?1504130127'
    ],
    startIndex: number('Start index', 0)
  };
};

export const Normal = () => {
  const containerStyle = {
    padding: '2rem',
    width: '50%',
    height: '250px'
  };
  return (
    <div style={containerStyle}>
      <Carousel {...getCommonProps()}></Carousel>
    </div>
  );
};

export const Thumbnails = () => {
  const containerStyle = {
    padding: '2rem',
    width: '50%',
    height: '250px'
  };
  return (
    <div style={containerStyle}>
      <Carousel
        {...getCommonProps()}
        thumbnailsEnabled={true}
        rounded={true}
        onThumbClick={action('clicked thumbnail')}
        onClick={action('clicked slide')}
        thumbnailStartIndex={number('Start thumb index', 1)}
      ></Carousel>
    </div>
  );
};
