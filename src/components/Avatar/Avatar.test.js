import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Avatar from './index';
import useLoadedImage from '../../hooks/useLoadedImage';
jest.mock('../../hooks/useLoadedImage');

describe('Avatar', () => {
  it('should render with only initials when avatar image is NOT found', async () => {
    useLoadedImage.mockReturnValue('error');

    const wrapper = shallow(<Avatar src="testfail.jpg" alt="Test Name" />);
    expect(wrapper.find('Avatar__StyledAvatar').children().text()).toEqual('TN');
  });

  it('should render full children text when initials 0', async () => {
    useLoadedImage.mockReturnValue('error');

    const wrapper = shallow(
      <Avatar initialsNum={0} src="testfail.jpg" alt="Test Name">
        Children Text
      </Avatar>
    );
    expect(wrapper.find('Avatar__StyledAvatar').text()).toEqual('Children Text');
  });

  it('should render initials of children if alt and children are defined and image fails', async () => {
    useLoadedImage.mockReturnValue('error');

    const wrapper = shallow(
      <Avatar src="testfail.jpg" alt="Text Alt">
        Test Children
      </Avatar>
    );
    expect(wrapper.find('Avatar__StyledAvatar').text()).toEqual('TC');
  });

  it('should render fullChildren concatenated text if no props are defined, and initials are 0', () => {
    const childrenTest = 'Testing Text';
    const wrapper = shallow(<Avatar initialsNum={0}>{childrenTest}</Avatar>);
    expect(wrapper.find('Avatar__StyledAvatar').text()).toEqual('Testing Text');
  });

  it('returns initials', () => {
    const altString = 'Test Name';
    const wrapper = mount(<Avatar initialsNum={2}>{altString}</Avatar>);
    expect(wrapper.find('Avatar__StyledAvatar').children().text()).toEqual('TN');
  });

  it('returns IconUser when nothing else is defined', () => {
    const altString = 'Test Name';
    const wrapper = shallow(<Avatar></Avatar>);
    expect(wrapper.find('IconUser').exists()).toBe(true);
  });
});
