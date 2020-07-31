import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DefaultTheme from '../../themes/defaultTheme';
import useDimensions from '../../hooks/useDimensions';

const arrowPosition = theme => ({
  top: {
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: `3.5px solid ${theme.color.charcoal800}`,
    bottom: '-3.5px',
    left: 'calc((100% / 2) - 4px)'
  },
  bottom: {
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderBottom: `3.5px solid ${theme.color.charcoal800}`,
    top: '-3.5px',
    left: 'calc((100% / 2) - 4px)'
  },
  left: {
    borderTop: '4px solid transparent',
    borderBottom: '4px solid transparent',
    borderLeft: `3.5px solid ${theme.color.charcoal800}`,
    right: '-3.5px',
    top: 'calc((100% / 2) - 4px)'
  },
  right: {
    borderTop: '4px solid transparent',
    borderBottom: '4px solid transparent',
    borderRight: `3.5px solid ${theme.color.charcoal800}`,
    left: '-3.5px',
    top: 'calc((100% / 2) - 4px)'
  }
});

const StyledTooltip = styled.div`
  position: relative;
`;
StyledTooltip.defaultProps = {
  theme: DefaultTheme
};

const StyledTooltipLabel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacings.small1} 12px;
  background: ${({ theme }) => theme.color.charcoal800};
  opacity: 0.9;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  ${({ theme }) => theme.texts.p2};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  z-index: 1;
  transition: ${props => props.theme.global.transitionS};
  &:after {
    content: '';
    margin: auto;
    display: block;
    position: absolute;
    height: 0px;
    width: 0px;
    ${({ position, theme }) => arrowPosition(theme)[position]}
  }
`;
StyledTooltipLabel.defaultProps = {
  theme: DefaultTheme
};

const calculatePosition = (position, dimensions) => {
  const {
    containerHeight,
    containerLeft,
    containerLeftPure,
    containerTop,
    containerTopPure,
    containerWidth,
    contentHeight,
    tooltipHeight,
    tooltipWidth,
    windowHeight,
    windowWidth
  } = dimensions;

  let top = null;
  let left = null;
  let bottom = null;
  let right = null;

  if (position === 'top') {
    top = 0 - tooltipHeight - 8;
    left = containerWidth / 2 - tooltipWidth / 2;
  } else if (position === 'bottom') {
    bottom = 0 - tooltipHeight - 8;
    left = containerWidth / 2 - tooltipWidth / 2;
  } else if (position === 'left') {
    top = containerHeight / 2 - tooltipHeight / 2;
    left = 0 - tooltipWidth - 8;
  } else if (position === 'right') {
    top = containerHeight / 2 - tooltipHeight / 2;
    right = 0 - tooltipWidth - 8;
  }
  return { top, left, bottom, right };
};

let hystersisOpen = false;
let hystersisTimer = null;

export function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}

const Tooltip = ({
  children,
  title,
  position,
  enterDelay = 100,
  enterNextDelay = 0,
  enterTouchDelay = 700,
  leaveDelay = 0,
  leaveTouchDelay = 1500,
  onOpen,
  onClose
}) => {
  const container = useRef(null);
  const tooltip = useRef(null);
  const content = useRef(null);
  const dimensions = useDimensions({ containerRef: container, tooltip, content }, title, children);
  const tooltipPosition = calculatePosition(position, dimensions);

  const closeTimer = React.useRef();
  const enterTimer = React.useRef();
  const leaveTimer = React.useRef();
  const touchTimer = React.useRef();
  const ignoreNonTouchEvents = React.useRef(false);

  const [openState, setOpenState] = useState(false);
  let open = openState;

  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  const handleOpen = event => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);

    if (onOpen && typeof onOpen === 'function') {
      onOpen(event);
    }
  };

  const handleEnter = (forward = true) => event => {
    const childrenProps = children.props;

    if (event.type === 'mouseover' && childrenProps.onMouseOver && forward) {
      childrenProps.onMouseOver(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay || (hystersisOpen && enterNextDelay)) {
      event.persist();
      enterTimer.current = setTimeout(
        () => {
          handleOpen(event);
        },
        hystersisOpen ? enterNextDelay : enterDelay
      );
    } else {
      handleOpen(event);
    }
  };

  const handleClose = event => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose && typeof onClose === 'function') {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, 120);
  };

  const handleLeave = (forward = true) => event => {
    const childrenProps = children.props;

    // if (event.type === 'blur') {
    //   if (childrenProps.onBlur && forward) {
    //     childrenProps.onBlur(event);
    //   }
    //   handleBlur();
    // }

    if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
      childrenProps.onMouseLeave(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  // There is no point in displaying an empty tooltip.
  if (title === '') {
    open = false;
  }

  const childrenProps = {
    ...children.props,
    onMouseOver: handleEnter(),
    onMouseLeave: handleLeave()
  };

  const interactiveWrapperListeners = {
    onMouseOver: handleEnter(false),
    onMouseLeave: handleLeave(false)
  };

  return (
    <StyledTooltip ref={container}>
      {React.cloneElement(children, childrenProps)}
      <StyledTooltipLabel
        ref={tooltip}
        position={position}
        style={{ ...tooltipPosition, opacity: open ? '.9' : '0' }}
        {...interactiveWrapperListeners}
      >
        <div ref={content}>{title}</div>
      </StyledTooltipLabel>
    </StyledTooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  arrow: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium'])
};

Tooltip.defaultProps = {
  position: 'top'
};

export default Tooltip;
