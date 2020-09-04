import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledTabLabel = styled.span`
  font-size: ${props => props.theme.components.tabFontSize};
  line-height: 22px;
  font-weight: ${props => props.theme.components.tabFontWeight};
`;
StyledTabLabel.defaultProps = {
  theme: defaultTheme
};

const StyledTabBadge = styled.span`
  background: ${props => props.theme.components.tabBadgeBackground};
  font-size: ${props => props.theme.components.tabBadgeFontSize};
  line-height: 18px;
  padding: ${props => props.theme.components.tabBadgePadding};
  font-weight: ${props => props.theme.components.tabBadgeFontWeight};
  border-radius: 100px;
  display: inline-block;
  margin-left: 8px;
  color: ${props => props.theme.components.tabBadgeColor};
`;
StyledTabBadge.defaultProps = {
  theme: defaultTheme
};

const StyledTabContainer = styled.div`
  color: ${props => props.theme.components.tabColor};
  text-transform: uppercase;
  margin: 0 20px;
  border-bottom: 3px solid ${props => props.theme.components.tabBorderColor};
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${props => props.theme.components.tabColorHover};
    border-bottom: 3px solid ${props => props.theme.components.tabBorderColorHover};
    ${StyledTabBadge} {
      background-color: ${props => props.theme.components.tabBadgeBackgroundHover};
      color: ${props => props.theme.components.tabBadgeColorHover};
    }
  }

  &.active {
    color: ${props => props.theme.components.tabColorActive};
    border-bottom: 3px solid ${props => props.theme.components.tabBorderColorActive};
    ${StyledTabBadge} {
      background-color: ${props => props.theme.components.tabBadgeBackgroundActive};
      color: ${props => props.theme.components.tabBadgeColorActive};
    }
  }

  &.disabled {
    color: ${props => props.theme.components.tabColorDisabled};
    cursor: default;
    border-bottom: 3px solid ${props => props.theme.components.tabBorderColor};
  }
`;
StyledTabContainer.defaultProps = {
  theme: defaultTheme
};

const Tab = ({ label, badge, active, disabled, value, onChange }) => {
  const handleClick = event => {
    if (!disabled && onChange) {
      onChange(event, value);
    }
  };

  return (
    <StyledTabContainer
      className={`${active ? 'active' : ''} ${disabled ? 'disabled' : null}`}
      onClick={handleClick}
    >
      <StyledTabLabel>
        {label}
        {badge && !disabled ? <StyledTabBadge>{badge}</StyledTabBadge> : null}
      </StyledTabLabel>
    </StyledTabContainer>
  );
};

Tab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tab.defaultProps = {
  label: ''
};

Tab.displayName = 'Tab';

export default Tab;
