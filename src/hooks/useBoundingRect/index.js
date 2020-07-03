import React from 'react';

const useBoundingRect = initialValue => {
  const [state, setState] = React.useState(() => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...initialValue
  }));

  const ref = React.useRef(null);

  React.useEffect(() => {
    const calculate = () => {
      if (ref && ref.current) {
        const dimensions = ref.current.getBoundingClientRect();
        setState(dimensions);
      }
    };

    calculate();

    window.addEventListener('resize', calculate);

    return () => {
      window.removeEventListener('resize', calculate);
    };
  }, []);
  return [state, ref];
};

export default useBoundingRect;
