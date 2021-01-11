import Modal from './index';
import React, { useState } from 'react';
import Button from '../Button';
import List, { ListItem } from '../List';
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
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>

      <Modal
        closable={boolean('Closable', true)}
        full={boolean('Full', false)}
        isOpen={isOpen}
        header={<p>{text('Title', 'Title')}</p>}
        enableClickOutside={boolean('Enable Click Outside')}
        footer={<Button onClick={() => setIsOpen(!isOpen)}>Close</Button>}
        onClose={handleClose}
      >
        <p>{text('Content', 'Lorem ipsum dolor sit amet')}</p>
      </Modal>
    </>
  );
};

export const WithOverflow = () => {
  return (
    <Modal
      closable={false}
      full={false}
      isOpen={true}
      header={<p>Title</p>}
      enableClickOutside={false}
      footer={<Button onClick={action('close')}>Close</Button>}
      onClose={action('close')}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem turpis, dignissim et
        ultrices vitae, condimentum in mauris. Maecenas pharetra pulvinar massa, tincidunt porta
        risus congue non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Duis a est vehicula, aliquam lectus ut, sollicitudin enim. Quisque convallis
        arcu turpis, quis scelerisque nisi lobortis fringilla. Sed rhoncus varius enim vel
        efficitur. Nullam consequat rhoncus magna, semper bibendum lacus iaculis dapibus. Donec sed
        diam sed risus tempus maximus. Fusce neque nulla, accumsan vitae hendrerit ac, convallis
        eget sem. Curabitur pretium rhoncus dapibus. Nulla non suscipit purus. Suspendisse porta non
        sapien placerat condimentum. Sed dignissim fermentum erat eget mattis. Integer nunc tortor,
        rhoncus sed viverra euismod, lobortis quis justo. Integer consectetur sapien at lobortis
        commodo. Proin in aliquam tortor. Nullam tristique felis eros, in porttitor justo gravida
        vel. Ut id tortor nec magna tempus pharetra. Aliquam pulvinar imperdiet arcu, nec
        condimentum erat laoreet nec. Proin lobortis nunc non eros laoreet lobortis. Sed tempus enim
        ac purus consequat, eu scelerisque risus pharetra. Maecenas auctor quam vehicula massa
        congue mattis et a ante. Ut tincidunt a libero sit amet accumsan. Vivamus elit odio,
        ultricies et luctus quis, molestie id metus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris pellentesque viverra magna, ut condimentum lectus imperdiet ut. Cras
        scelerisque euismod neque, a scelerisque dolor efficitur sit amet. In tempus malesuada
        pretium. In turpis velit, aliquam quis laoreet in, semper commodo turpis. Fusce a ipsum
        ante. Quisque tincidunt cursus erat nec cursus. Suspendisse aliquet tincidunt enim, eget
        rutrum nulla volutpat sed. Curabitur vitae elit et turpis commodo facilisis feugiat eu
        sapien. Integer porttitor feugiat rhoncus. Aliquam laoreet, arcu eu sollicitudin tempor,
        nunc sapien sollicitudin lorem, vitae condimentum massa enim pharetra sem. Donec eu neque
        eros. Nulla maximus dictum est, sed sagittis tellus bibendum sit amet. Sed sed mattis metus.
        Proin vehicula, ligula at maximus malesuada, sapien mi iaculis libero, nec pharetra nisl
        nisi et diam. Fusce vestibulum in neque vel pulvinar. Donec justo arcu, varius vel purus ut,
        suscipit tristique urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        laoreet in lacus et vehicula. Nam dapibus sapien id felis dapibus, et volutpat massa
        vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis cursus
        mauris, nec porta sapien tincidunt eget. Nunc rhoncus a dolor ut imperdiet. Cras vitae eros
        placerat, facilisis lectus non, viverra urna. Aenean et dolor tortor. Proin varius varius
        orci non hendrerit. Suspendisse pharetra erat vel erat laoreet, sit amet cursus diam
        ullamcorper. Etiam placerat libero in auctor laoreet. Fusce lacinia lacus sit amet diam
        suscipit, non viverra sem finibus. Morbi lorem felis, tempor nec interdum id, elementum et
        neque. Donec consequat sapien at elit pellentesque, eget pellentesque augue placerat. Nunc
        rutrum purus et metus blandit, ut malesuada justo dapibus. Sed accumsan at magna in aliquet.
        Maecenas massa eros, rutrum eget accumsan non, dapibus lacinia augue.
      </p>
    </Modal>
  );
};

export const WithoutHeader = () => {
  return (
    <Modal
      closable={true}
      full={false}
      isOpen={true}
      enableClickOutside={false}
      footer={<Button onClick={action('close')}>Close</Button>}
      onClose={action('close')}
    >
      <p>{text('Content', 'Lorem ipsum dolor sit amet')}</p>
    </Modal>
  );
};

export const WithFullBorders = () => {
  return (
    <Modal
      closable={true}
      full={true}
      isOpen={true}
      header={<p>Full True</p>}
      enableClickOutside={false}
      footer={<Button onClick={action('close')}>Close</Button>}
      onClose={action('close')}
    >
      <p>{text('Content', 'Lorem ipsum dolor sit amet')}</p>
    </Modal>
  );
};
