import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import useDimensions from '../../hooks/useDimensions';
import Portal from '../Portal/index';
import hexToRgba from '../../utils/hexToRgba';

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
  theme: defaultTheme
};

const StyledTooltipLabel = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? width : '')};
  flex-direction: row;
  padding: ${({ theme }) => theme.spacings.small1} 12px;
  background: ${({ theme }) => hexToRgba(theme.color.charcoal800, 0.9)};
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
  position: fixed;
  z-index: 1000;
  transition: opacity ${props => props.theme.global.transitionS};
  &:after {
    content: '';
    margin: auto;
    display: block;
    position: absolute;
    height: 0px;
    width: 0px;
    ${({ position, theme }) => arrowPosition(theme)[position]}
  }

  p {
    ${({ theme }) => theme.texts.p2};
    color: ${({ theme }) => theme.color.white};
    & + p {
      ${({ theme }) => theme.texts.p2b};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
StyledTooltipLabel.defaultProps = {
  theme: defaultTheme
};

const calculatePosition = (position, dimensions) => {
  const {
    containerHeight,
    containerLeft,
    containerLeftPure,
    containerTopPure,
    containerWidth,
    popperHeight,
    popperWidth
  } = dimensions;

  let top = null;
  let left = null;

  if (position === 'top') {
    top = containerTopPure - popperHeight - 8;
    left = containerLeftPure + containerWidth / 2 - popperWidth / 2;
  } else if (position === 'bottom') {
    top = containerTopPure + containerHeight + 8;
    left = containerLeftPure + containerWidth / 2 - popperWidth / 2;
  } else if (position === 'left') {
    top = containerTopPure + containerHeight / 2 - popperHeight / 2;
    left = containerLeft - popperWidth - 8;
  } else if (position === 'right') {
    top = containerTopPure + containerHeight / 2 - popperHeight / 2;
    left = containerLeft + containerWidth + 8;
  }

  return { top, left };
};

let hystersisOpen = false;
let hystersisTimer = null;

export function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}

const Tooltip = ({
  children,
  enterDelay = 100,
  enterNextDelay = 0,
  leaveDelay = 0,
  width,
  onClose,
  onOpen,
  position,
  title,
  value
}) => {
  const container = useRef(null);
  const tooltip = useRef(null);
  const content = useRef(null);

  const closeTimer = React.useRef();
  const enterTimer = React.useRef();
  const leaveTimer = React.useRef();
  const touchTimer = React.useRef();
  const ignoreNonTouchEvents = React.useRef(false);

  const [openState, setOpenState] = useState(false);
  let open = openState;

  const dimensions = useDimensions({ container, popper: tooltip, content }, title, children, open);
  let tooltipPosition = calculatePosition(position, dimensions);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    tooltipPosition = calculatePosition(position, dimensions);
  }, [open]);

  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {open && (
        <Portal renderInto="tooltips">
          <StyledTooltipLabel
            width={width}
            ref={tooltip}
            position={position}
            style={{ ...tooltipPosition }}
            {...interactiveWrapperListeners}
          >
            <div ref={content}>
              {title && <p>{title}</p>}
              {value && <p>{value}</p>}
            </div>
          </StyledTooltipLabel>
        </Portal>
      )}
    </StyledTooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  width: PropTypes.string
};

Tooltip.defaultProps = {
  position: 'top'
};

export default Tooltip;
