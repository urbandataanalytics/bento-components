import { useState, useEffect } from 'react';

const throttle = (func, timeFrame) => {
  let lastTime = 0;
  return function () {
    let now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
};

const getDeviceConfig = width => {
  if (width < 719) {
    return 's'; // mobile
  } else if (width >= 720 && width <= 1023) {
    return 'm'; // tablet vertical
  } else if (width >= 1024 && width <= 1439) {
    return 'l'; // tablet horizontal - small screen
  } else if (width >= 1440 && width <= 1919) {
    return 'xl'; // desktop
  } else if (width >= 1920) {
    return 'xxl'; // desktop retina ++
  }
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakpoint;
};
