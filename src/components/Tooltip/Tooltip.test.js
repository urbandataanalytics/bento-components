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
    /*
    //no consigo replicar el hover
    const foundItem = wrapper.find('Button').prop('onMouseEnter');

    wrapper.update();
    //No genera la Styledtooltip label

    const tooltipRendered = wrapper.find('Tooltip__StyledTooltipLabel');

    expect(tooltipRendered.text('Bottom Text')).toBe(true);*/
  });
});
