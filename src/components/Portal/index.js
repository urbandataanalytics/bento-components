import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default ({ children, renderInto }) => {
  let [node] = useState(
    renderInto && document.getElementById(renderInto)
      ? document.getElementById(renderInto)
      : document.body
  );
  let [el] = useState(document.createElement('div'));

  useEffect(() => {
    if (node && el) {
      node.appendChild(el);
    }
    return () => {
      if (node && el) {
        node.removeChild(el);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof window !== 'undefined' && el) {
    return ReactDOM.createPortal(children, el);
  }
  return null;
};
