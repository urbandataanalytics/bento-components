import Modal from './index';
import React, { useState } from 'react';
import Button from '../Button';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal',
  component: Modal
};

const getCommonProps = () => {
  return {
    closable: boolean('Closable', true)
  };
};

export const Normal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>

      <Modal
        {...getCommonProps()}
        isOpen={isOpen}
        header={<h4>{text('Title', 'Title')}</h4>}
        footer={<Button onClick={() => setIsOpen(!isOpen)}>Close</Button>}
        onClose={handleClose}
      >
        <p>{text('Content', 'Lorem ipsum dolor sit amet')}</p>
      </Modal>
    </>
  );
};
