import React from 'react';
import Carousel from './index';
import { action } from '@storybook/addon-actions';
import { number, text, boolean } from '@storybook/addon-knobs';
import Button from './index';
import { string } from 'prop-types';
import { ActionIcon } from '../../icons';
import { IconChevronLeft } from '../../icons';

export default {
  title: 'Carousel',
  component: Carousel
};

export const Playground = () => {
  const slidesImages = [
    'https://images.adsttc.com/media/images/59a7/3256/b22e/3828/7b00/0277/slideshow/4.jpg?1504129602',
    'https://images.adsttc.com/media/images/59a7/3400/b22e/3828/7b00/0280/slideshow/21.jpg?1504130037',
    'https://images.adsttc.com/media/images/59a7/33f3/b22e/38a3/0300/04a3/slideshow/20.jpg?1504130022',
    'https://images.adsttc.com/media/images/59a7/3495/b22e/3828/7b00/0283/slideshow/30.jpg?1504130176',
    'https://images.adsttc.com/media/images/59a7/3466/b22e/3828/7b00/0282/slideshow/28.jpg?1504130127'
  ];

  const containerStyle = {
    padding: '2rem',
    width: '50%',
    height: '250px'
  };
  return (
    <div style={containerStyle}>
      <Carousel
        slides={slidesImages}
        draggable={boolean('Draggable', false)}
        controlOffset={text('Control Offset', '10px')}
        loop={boolean('Loop', false)}
        rounded={boolean('Rounded', false)}
        startIndex={number('Start Index', 0)}
        thumbnailsEnabled={boolean('Thumbnails Enabled', false)}
        thumbnailStartIndex={number('Thumbnails Start Index', 0)}
        thumbCount={number('Thumbnail count', 3)}
      ></Carousel>
    </div>
  );
};

export const withThumbnailsEnabled = () => {
  const slidesImages = [
    'https://images.adsttc.com/media/images/59a7/3256/b22e/3828/7b00/0277/slideshow/4.jpg?1504129602',
    'https://images.adsttc.com/media/images/59a7/3400/b22e/3828/7b00/0280/slideshow/21.jpg?1504130037',
    'https://images.adsttc.com/media/images/59a7/33f3/b22e/38a3/0300/04a3/slideshow/20.jpg?1504130022',
    'https://images.adsttc.com/media/images/59a7/3495/b22e/3828/7b00/0283/slideshow/30.jpg?1504130176',
    'https://images.adsttc.com/media/images/59a7/3466/b22e/3828/7b00/0282/slideshow/28.jpg?1504130127'
  ];

  const containerStyle = {
    padding: '2rem',
    width: '50%',
    height: '250px'
  };
  return (
    <div style={containerStyle}>
      <Carousel
        slides={slidesImages}
        draggable={boolean('Draggable', false)}
        controlOffset={text('Control Offset', '10px')}
        loop={boolean('Loop', false)}
        rounded={boolean('Rounded', true)}
        startIndex={number('Start Index', 0)}
        thumbnailsEnabled={boolean('Thumbnails Enabled', true)}
        thumbnailStartIndex={number('Thumbnails Start Index', 0)}
        thumbCount={number('Thumbnail count', 3)}
      ></Carousel>
    </div>
  );
};
