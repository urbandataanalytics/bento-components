import Modal from './index';
import React, { useState } from 'react';
import Button from '../Button';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal',
  component: Modal
};

export const Playground = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>

      <Modal
        closable={boolean('Closable', true)}
        full={boolean('Full', false)}
        isOpen={isOpen}
        header={<h4>{text('Title', 'Title')}</h4>}
        enableClickOutside={boolean('Enable Click Outside')}
        footer={<Button onClick={() => setIsOpen(!isOpen)}>Close</Button>}
        onClose={handleClose}
      >
        <p>{text('Content', 'Lorem ipsum dolor sit amet')}</p>
      </Modal>
    </>
  );
};
