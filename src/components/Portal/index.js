import React, { useEffect, useState } from 'react';
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
  }, []);

  if (typeof window !== 'undefined' && el) {
    return ReactDOM.createPortal(children, el);
  }
  return null;
};
