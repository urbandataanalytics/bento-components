import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledSwitchButtonsContainer = styled.div``;
StyledSwitchButtonsContainer.defaultProps = {
  theme: defaultTheme
};

const SwitchButtons = props => {
  const { value, onChange, children: childrenProp, ...other } = props;
  const children = React.Children.map(childrenProp, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;

    return React.cloneElement(child, {
      variant: value === childValue ? 'primary' : 'secondary',
      value: childValue,
      onClick: event => onChange(event, childValue)
    });
  });

  return <StyledSwitchButtonsContainer {...other}>{children}</StyledSwitchButtonsContainer>;
};

SwitchButtons.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwitchButtons.displayName = 'SwitchButtons';

export default SwitchButtons;
