import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Tooltip from './index';
import Button from '../Button';
import { act } from 'react-dom/test-utils';

describe('Tooltip testing', () => {
  it('should render label with styles when opening', () => {
    const wrapper = shallow(
      <Tooltip title="Bottom Position" position="bottom">
        <Button id="triggerbtn" variant="primary" size="medium">
          Bottom
        </Button>
      </Tooltip>
    );

    //@TODO: find out how to render the tooltip on mouseOver. See tried so far:
    //Example found online: https://codesandbox.io/s/festive-leaf-7ko8v?file=/src/MyPopoutMenu.test.js
    //
    //   const foundItem = wrapper.find('Button');
    //   foundItem.simulate('mouseover', { type: 'mouseover', persist: jest.fn() });
    //   wrapper.update();
    //   const tooltipRendered = wrapper.find('Tooltip__StyledTooltipLabel');
    //   expect(tooltipRendered.text('Bottom Position')).toBe(true);
    //
  });
});
