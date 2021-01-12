import React from 'react';
import Card from './index';
import CardHeader from './CardHeader/index';
import CardContent from './CardContent/index';

export default {
  title: 'Card',
  component: Card,
  subcomponents: { CardHeader, CardContent },
  argTypes: {
    children: {
      description:
        'The content of the Card. You can use `<CardHeader>` or `<CardContent>` Components',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'Specific class name to pass down to the Card component',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    loading: {
      description: 'Shows skeleton version of the card',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    loading: false
  }
};

const containerStyle = {
  padding: '2rem'
};

export const Playground = args => {
  return (
    <div style={containerStyle}>
      <Card {...args}>
        <CardHeader leftContent="Left" rightContent="Right" title="Title" subheader="Subtitle">
          Extra content
        </CardHeader>
        <CardContent>Lorem Ipsum</CardContent>
      </Card>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={containerStyle}>
      <Card loading></Card>
    </div>
  );
};
