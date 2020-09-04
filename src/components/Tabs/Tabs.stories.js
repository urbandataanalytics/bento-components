import React, { useState } from 'react';
import Tabs from './index';
import Tab from './Tab/index';

export default {
  title: 'Tabs',
  component: Tabs
};

const NormalComponent = () => {
  const [value, setValue] = useState(0);
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tabs value={value} onChange={(e, value) => setValue(value)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" disabled />
      </Tabs>
    </div>
  );
};
export const Normal = () => <NormalComponent />;

const WithBadgeComponent = () => {
  const [value, setValue] = useState(0);
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Tabs value={value} onChange={(e, value) => setValue(value)}>
        <Tab label="Tab 1" badge="12" />
        <Tab label="Tab 2" badge="9" />
        <Tab label="Tab 3" badge="9" disabled />
      </Tabs>
    </div>
  );
};
export const WithBadge = () => <WithBadgeComponent />;
