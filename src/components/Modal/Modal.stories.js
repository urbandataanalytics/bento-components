import Modal from './index';
import React from 'react';
import Button from '../Button';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      description: 'Content of the modal',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    closable: {
      description: 'Shows `x` icon in the top right corner to close it',
      table: {
        category: 'behaviour'
      }
    },
    enableClickOutside: {
      description: 'Allows to close the modal or not when user clicks outside the modal window',
      table: {
        category: 'behaviour'
      }
    },
    footer: {
      description: 'Content for the footer of the modal',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    header: {
      description: 'Content for the header of the modal',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    onClose: {
      description: 'Handles behaviour on close event',
      action: 'onClose Event',
      table: {
        category: 'events'
      }
    },
    isOpen: {
      description: 'The modal is shown',
      table: {
        category: 'behaviour'
      }
    },
    full: {
      description: 'Removes all padding and makes the content fill the modal',
      table: {
        category: 'format'
      }
    },
    zIndex: {
      description: 'Allows to set a custom z-index property',
      table: {
        category: 'format'
      }
    },
    opacity: {
      description: 'Changes the opacity of the backing overlay',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    children: 'Lorem Ipsum dolor',
    closable: true,
    full: false,
    isOpen: false,
    header: <p>Title</p>,
    enableClickOutside: true,
    onClose: () => {}
  }
};

export const Playground = ({ onClose, footer, ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });

  return (
    <div>
      <Button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</Button>
      <Modal
        onClose={handleClose}
        footer={<Button onClick={handleClose}>Close</Button>}
        {...args}
      />
    </div>
  );
};

export const WithOverflow = ({ footer, ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <>
      <Button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</Button>
      <Modal footer={<Button onClick={handleClose}>Close</Button>} {...args}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem turpis, dignissim
          et ultrices vitae, condimentum in mauris. Maecenas pharetra pulvinar massa, tincidunt
          porta risus congue non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Duis a est vehicula, aliquam lectus ut, sollicitudin enim. Quisque
          convallis arcu turpis, quis scelerisque nisi lobortis fringilla. Sed rhoncus varius enim
          vel efficitur. Nullam consequat rhoncus magna, semper bibendum lacus iaculis dapibus.
          Donec sed diam sed risus tempus maximus. Fusce neque nulla, accumsan vitae hendrerit ac,
          convallis eget sem. Curabitur pretium rhoncus dapibus. Nulla non suscipit purus.
          Suspendisse porta non sapien placerat condimentum. Sed dignissim fermentum erat eget
          mattis. Integer nunc tortor, rhoncus sed viverra euismod, lobortis quis justo. Integer
          consectetur sapien at lobortis commodo. Proin in aliquam tortor. Nullam tristique felis
          eros, in porttitor justo gravida vel. Ut id tortor nec magna tempus pharetra. Aliquam
          pulvinar imperdiet arcu, nec condimentum erat laoreet nec. Proin lobortis nunc non eros
          laoreet lobortis. Sed tempus enim ac purus consequat, eu scelerisque risus pharetra.
          Maecenas auctor quam vehicula massa congue mattis et a ante. Ut tincidunt a libero sit
          amet accumsan. Vivamus elit odio, ultricies et luctus quis, molestie id metus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Mauris pellentesque viverra magna, ut
          condimentum lectus imperdiet ut. Cras scelerisque euismod neque, a scelerisque dolor
          efficitur sit amet. In tempus malesuada pretium. In turpis velit, aliquam quis laoreet in,
          semper commodo turpis. Fusce a ipsum ante. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam lorem turpis, dignissim et ultrices vitae, condimentum in mauris.
          Maecenas pharetra pulvinar massa, tincidunt porta risus congue non. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a est vehicula,
          aliquam lectus ut, sollicitudin enim. Quisque convallis arcu turpis, quis scelerisque nisi
          lobortis fringilla. Sed rhoncus varius enim vel efficitur. Nullam consequat rhoncus magna,
          semper bibendum lacus iaculis dapibus. Donec sed diam sed risus tempus maximus. Fusce
          neque nulla, accumsan vitae hendrerit ac, convallis eget sem. Curabitur pretium rhoncus
          dapibus. Nulla non suscipit purus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aliquam lorem turpis, dignissim et ultrices vitae, condimentum in mauris. Maecenas
          pharetra pulvinar massa, tincidunt porta risus congue non. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Duis a est vehicula, aliquam
          lectus ut, sollicitudin enim. Quisque convallis arcu turpis, quis scelerisque nisi
          lobortis fringilla. Sed rhoncus varius enim vel efficitur. Nullam consequat rhoncus magna,
          semper bibendum lacus iaculis dapibus. Donec sed diam sed risus tempus maximus. Fusce
          neque nulla, accumsan vitae hendrerit ac, convallis eget sem. Curabitur pretium rhoncus
          dapibus. Nulla non suscipit purus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aliquam lorem turpis, dignissim et ultrices vitae, condimentum in mauris. Maecenas
          pharetra pulvinar massa, tincidunt porta risus congue non. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Duis a est vehicula, aliquam
          lectus ut, sollicitudin enim. Quisque convallis arcu turpis, quis scelerisque nisi
          lobortis fringilla. Sed rhoncus varius enim vel efficitur. Nullam consequat rhoncus magna,
          semper bibendum lacus iaculis dapibus. Donec sed diam sed risus tempus maximus. Fusce
          neque nulla, accumsan vitae hendrerit ac, convallis eget sem. Curabitur pretium rhoncus
          dapibus. Nulla non suscipit purus.
        </p>
      </Modal>
    </>
  );
};

WithOverflow.args = {
  enableClickOutside: false
};
export const WithoutHeader = args => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <>
      <Button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</Button>
      <Modal footer={<Button onClick={handleClose}>Close</Button>} {...args}>
        <p>'Lorem ipsum dolor sit amet'</p>
      </Modal>
    </>
  );
};

WithoutHeader.args = {
  header: '',
  enableClickOutside: false
};
export const WithFullBorders = args => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <>
      <Button onClick={() => updateArgs({ isOpen: !isOpen })}>Open Modal</Button>
      <Modal footer={<Button onClick={handleClose}>Close</Button>} {...args}>
        <p>'Lorem ipsum dolor sit amet'</p>
      </Modal>
    </>
  );
};

WithFullBorders.args = {
  full: true,
  enableClickOutside: false
};
