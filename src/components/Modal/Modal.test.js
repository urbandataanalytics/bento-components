import React from 'react';
import { shallow } from 'enzyme';
import Modal from '.';

describe(`Modal`, () => {
  const onClose = jest.fn();

  it('should not render header content', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose}>
        Message
      </Modal>
    );
    const message = () => wrapper.find('Modal__StyleHeading');
    expect(message().exists()).toBe(false);
  });

  it('should not render closable button', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose} closable={false}>
        Message
      </Modal>
    );
    const message = () => wrapper.find('Modal__StyledHeader button');
    expect(message().exists()).toBe(false);
  });

  it('should render children content', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose}>
        Message
      </Modal>
    );
    const message = () => wrapper.find('Modal__StyledContent');
    expect(message().text()).toBe('Message');
  });

  it('should render footer content', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose} footer={<p>Footer</p>}>
        Message
      </Modal>
    );
    const message = () => wrapper.find('Modal__StyledFooter p');
    expect(message().text()).toBe('Footer');
  });

  it('should close the modal when clicking close button', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose} footer={<p>Footer</p>}>
        Message
      </Modal>
    );

    wrapper.find('Modal__StyledHeader button').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('should close the modal when clicking outside modal content', () => {
    const wrapper = shallow(
      <Modal isOpen={true} onClose={onClose} footer={<p>Footer</p>}>
        Message
      </Modal>
    );

    wrapper.find('Modal__StyledOverlay').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
