import { useEffect, useState } from 'react';

import boundingClientRect from '../../utils/boundingClientRect';

const useDimensions = ({ container, popper, content }, children, parent, open) => {
  const [dimensions, setDimensions] = useState({
    containerTop: 0,
    containerTopPure: 0,
    containerLeft: 0,
    containerLeftPure: 0,
    containerHeight: 0,
    containerWidth: 0,
    popperWidth: 0,
    popperHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const containerDimensions = boundingClientRect(container);
      const popperDimensions = boundingClientRect(popper);
      const contentDimensions = boundingClientRect(content);
      if (
        containerDimensions &&
        popperDimensions &&
        contentDimensions &&
        typeof window !== 'undefined'
      ) {
        setDimensions({
          containerTop: containerDimensions.top,
          containerTopPure: containerDimensions.top - (window.scrollY || window.pageYOffset),
          containerLeft: containerDimensions.left,
          containerLeftPure: containerDimensions.left - (window.scrollX || window.pageXOffset),
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          popperWidth: popperDimensions.width,
          popperHeight: popperDimensions.height,
          windowWidth: document.body.clientWidth,
          windowHeight: window.innerHeight,
          contentHeight: contentDimensions.height
        });
      }
    };

    calculateDimensions();

    window.addEventListener('resize', calculateDimensions);
    window.addEventListener('scroll', calculateDimensions);
    return () => {
      window.removeEventListener('resize', calculateDimensions);
      window.removeEventListener('scroll', calculateDimensions);
    };
  }, [container, content, popper, children, parent, open]);

  return dimensions;
};

export default useDimensions;
