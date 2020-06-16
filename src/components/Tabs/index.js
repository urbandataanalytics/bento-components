import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledTabsContainer = styled.div`
  width: 100%;
  height: 39px;
  border-bottom: 1px solid ${props => props.theme.components.tabsBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
StyledTabsContainer.defaultProps = {
  theme: defaultTheme
};

const Tabs = props => {
  const { value, onChange, children: childrenProp, ...other } = props;
  const children = React.Children.map(childrenProp, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    const active = childValue === value;

    return React.cloneElement(child, {
      active,
      onChange,
      value: childValue
    });
  });

  return <StyledTabsContainer {...other}>{children}</StyledTabsContainer>;
};

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.node
};

Tabs.displayName = 'Tabs';

export default Tabs;