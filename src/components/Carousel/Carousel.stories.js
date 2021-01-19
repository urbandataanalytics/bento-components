import React from 'react';
import Carousel from './index';

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    controlOffset: {
      description:
        'Defines the separation of the `next` and `previous` controls from the edge of the image',
      table: {
        category: 'format'
      }
    },
    draggable: {
      description: 'Allows to drag the image and slide to the sides without click the buttons',
      table: {
        category: 'behaviour'
      }
    },
    loop: {
      description:
        'Makes the carousel to start over again from the first slide when it arrives to the last one',
      table: {
        category: 'behaviour'
      }
    },
    nextButton: {
      description: 'Allows to define a custom `next` button ',
      control: 'none',
      table: {
        category: 'behaviour'
      }
    },
    onChange: {
      description: 'Handles behaviour lauched with event',
      action: 'onChange',
      table: {
        category: 'events'
      }
    },
    onClick: {
      description: '',
      table: {
        category: 'events'
      }
    },
    onThumbClick: {
      description: ' Handles behaviour lauched with event',
      action: 'clickedOnThumbnail',
      table: {
        category: 'events'
      }
    },
    prevButton: {
      description: ' Allows to define a custom `previous` button                   ',
      table: {
        category: 'events'
      }
    },
    rounded: {
      description: ' Applies rounded corners',
      table: {
        category: 'format'
      }
    },
    slides: {
      description: 'Array of images used by the Carousel',
      table: {
        category: 'content'
      }
    },
    startIndex: {
      description: 'Sets the starting image to the position of the array `slides`defined',
      table: {
        category: 'behaviour'
      }
    },
    thumbCount: {
      description: 'Quantity of thumbnail images to be shown next to the main image',
      table: {
        category: 'behaviour'
      }
    },
    thumbnailStartIndex: {
      description: 'Sets the starting image for the thumbnails according to he ',
      table: {
        category: 'behaviour'
      }
    },
    thumbnailsEnabled: {
      description:
        'Enables the thumbnail preview of the images of the `slideds`array next to the carousel ',
      table: {
        category: 'behaviour'
      }
    }
  },
  args: {
    slides: [
      'https://images.adsttc.com/media/images/59a7/3256/b22e/3828/7b00/0277/slideshow/4.jpg?1504129602',
      'https://images.adsttc.com/media/images/59a7/3400/b22e/3828/7b00/0280/slideshow/21.jpg?1504130037',
      'https://images.adsttc.com/media/images/59a7/33f3/b22e/38a3/0300/04a3/slideshow/20.jpg?1504130022',
      'https://images.adsttc.com/media/images/59a7/3495/b22e/3828/7b00/0283/slideshow/30.jpg?1504130176',
      'https://images.adsttc.com/media/images/59a7/3466/b22e/3828/7b00/0282/slideshow/28.jpg?1504130127'
    ],
    draggable: false,
    controlOffset: '10px',
    loop: false,
    rounded: false,
    startIndex: 0,
    thumbnailsEnabled: false,
    thumbnailStartIndex: 0,
    thumbCount: 3
  }
};

const containerStyle = {
  padding: '2rem',
  width: '50%',
  height: '250px'
};

export const Playground = args => {
  return (
    <div style={containerStyle}>
      <Carousel {...args}></Carousel>
    </div>
  );
};

export const withThumbnailsEnabled = args => {
  return (
    <div style={containerStyle}>
      <Carousel {...args}></Carousel>
    </div>
  );
};

withThumbnailsEnabled.args = {
  thumbnailsEnabled: true
};
