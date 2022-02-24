const calculatePosition = ({ align, position, dimensions, offset }) => {
  const {
    containerHeight,
    containerLeft,
    containerTop,
    containerWidth,
    popperHeight,
    popperWidth,
    windowWidth,
    windowHeight
  } = dimensions;

  let top = 0;
  let left = 0;

  const bottomPosition = containerTop + containerHeight + 10;
  const topPosition = containerTop - popperHeight - 10;

  if (position === 'bottom') {
    top = bottomPosition + popperHeight > windowHeight ? topPosition : bottomPosition;
  } else {
    top = topPosition <= 0 ? bottomPosition : topPosition;
  }

  if (align === 'left') {
    left = containerLeft;
    if (left <= offset) {
      left = offset;
    }
    if (left + popperWidth >= windowWidth - offset) {
      left = windowWidth - popperWidth - offset;
    }
  } else if (align === 'center') {
    left = containerLeft + containerWidth / 2 - popperWidth / 2;
  } else if (align === 'right') {
    left = containerLeft + containerWidth - popperWidth;
    if (left + popperWidth >= windowWidth - offset) {
      left = windowWidth - popperWidth - offset;
    }
  }

  return { top, left };
};

export default calculatePosition;
