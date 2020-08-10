import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledTabsContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.components.tabsBorderColor};
  background-color: ${({ theme }) => theme.components.tabsBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 56px;
`;
StyledTabsContainer.defaultProps = {
  theme: defaultTheme
};

const StyledLeftContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledRightContent = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledTabsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tabs = props => {
  const { value, leftContent, rightContent, onChange, children: childrenProp, ...other } = props;
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

  return (
    <StyledTabsContainer {...other}>
      {leftContent && <StyledLeftContent>{leftContent}</StyledLeftContent>}
      <StyledTabsContent>{children}</StyledTabsContent>
      {rightContent && <StyledRightContent>{rightContent}</StyledRightContent>}
    </StyledTabsContainer>
  );
};

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.node
};

Tabs.displayName = 'Tabs';

export default Tabs;
