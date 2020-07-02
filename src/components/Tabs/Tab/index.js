import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const tabStyles = theme => ({
  normal: {
    color: theme.components.tabColor,
    borderBottom: `3px solid ${theme.components.tabBorderColor}`
  },
  active: {
    color: theme.components.tabColorActive,
    borderBottom: `3px solid ${theme.components.tabBorderColorActive}`
  },
  disabled: {
    color: theme.components.tabColorDisabled,
    borderBottom: `3px solid ${theme.components.tabBorderColor}`,
    cursor: 'default',
    pointerEvents: 'none'
  }
});

const badgeStyles = theme => ({
  normal: {
    background: theme.components.tabBadgeBackground,
    color: theme.components.tabBadgeColor
  },
  active: {
    background: theme.components.tabBadgeBackgroundActive,
    color: theme.components.tabBadgeColorActive
  }
});

const StyledTabLabel = styled.span`
  font-size: ${({ theme }) => theme.components.tabFontSize};
  line-height: 22px;
  font-weight: ${({ theme }) => theme.components.tabFontWeight};
  letter-spacing: 0.6px;
`;
StyledTabLabel.defaultProps = {
  theme: defaultTheme
};

const StyledTabBadge = styled.span`
  font-size: ${({ theme }) => theme.components.tabBadgeFontSize};
  line-height: 18px;
  padding: ${({ theme }) => theme.components.tabBadgePadding};
  font-weight: ${({ theme }) => theme.components.tabBadgeFontWeight};
  border-radius: 100px;
  display: inline-block;
  margin-left: 8px;
  height: 22px;
  transition: ${({ theme }) => theme.global.transitionS};
  ${props => (props.active ? badgeStyles(props.theme).active : badgeStyles(props.theme).normal)}
`;
StyledTabBadge.defaultProps = {
  theme: defaultTheme
};

const StyledTabContainer = styled.div`
  text-transform: uppercase;
  margin: 0 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  display: flex;
  border-bottom: 3px solid transparent;
  transition: ${({ theme }) => theme.global.transitionS};

  ${props => {
    if (props.active) return tabStyles(props.theme).active;
    if (props.disabled) return tabStyles(props.theme).disabled;
    return tabStyles(props.theme).normal;
  }}

  ${props =>
    !props.active &&
    css`
      &:hover {
        color: ${({ theme }) => theme.components.tabColorHover};
        border-bottom-color: ${({ theme }) => theme.components.tabBorderColorHover};
        ${StyledTabBadge} {
          background-color: ${({ theme }) => theme.components.tabBadgeBackgroundHover};
          color: ${({ theme }) => theme.components.tabBadgeColorHover};
        }
      }
    `}
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
    <StyledTabContainer active={active} disabled={disabled} onClick={handleClick}>
      <StyledTabLabel>{label}</StyledTabLabel>
      {badge && !disabled ? (
        <StyledTabBadge active={active} disabled={disabled}>
          {badge}
        </StyledTabBadge>
      ) : null}
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
