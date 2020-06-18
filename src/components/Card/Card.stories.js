import React from 'react';
import { text } from '@storybook/addon-knobs';
import Card from './index';
import CardHeader from './CardHeader/index';
import CardContent from './CardContent/index';

export default {
  title: 'Card',
  component: Card
};

const getCommonProps = () => {
  return {
    content: text('Content', 'Lorem ipsum dolor sit amet')
  };
};

export const Playground = () => {
  const containerStyle = {
    padding: '2rem'
  };

  return (
    <div style={containerStyle}>
      <Card {...getCommonProps()}>
        <CardHeader leftContent="Left" rightContent="Right" title="Title" subheader="Subtitle">
          Extra content
        </CardHeader>
        <CardContent>{getCommonProps().content}</CardContent>
      </Card>
    </div>
  );
};
