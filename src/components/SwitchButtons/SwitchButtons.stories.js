import React, { useState } from 'react';
import SwitchButtons from './index';
import ButtonLink from '../ButtonLink/index.js';

export default {
  title: 'SwitchButtons',
  component: SwitchButtons
};

export const Playground = () => {
  const [value, setValue] = useState('first');
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <SwitchButtons value={value} onChange={(e, value) => setValue(value)}>
        <ButtonLink value="first">First</ButtonLink>
        <ButtonLink value="second">Second</ButtonLink>
        <ButtonLink value="third">Value</ButtonLink>
      </SwitchButtons>
    </div>
  );
};
