import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledLinkListItem = styled.li`
  display: flex;
  align-items: center;
  align-content: center;
  margin: ${props => props.theme.components.linkListMargin};
  border-radius: ${props => props.theme.components.linkListBorderRadius};
  ${props => props.active && `background: ${props.theme.components.linkListActiveBackground}`};

  &:hover {
    background-color: ${props =>
      props.active
        ? props.theme.components.listItemColorActiveHover
        : props.theme.components.listItemColorDefaultHover};
  }

  > a {
    flex-shrink: 0;
    flex-grow: 1;
    padding: ${props => props.theme.components.linkListPadding};
    color: ${props =>
      props.active
        ? props.theme.components.linkListActiveColor
        : props.theme.components.linkListColor};
    ${props => props.disabled && `color: ${props.theme.components.linkListDisabledColor}`}
    ${props => props.disabled && `pointer-events: none`}
    
    &:hover {
      color: ${props =>
        props.active
          ? props.theme.components.listItemColorActive
          : props.theme.components.listItemColorDefault};
    }
  }
`;

StyledLinkListItem.defaultProps = {
  theme: defaultTheme
};

const StyledActiveIcon = styled.span`
  color: ${props => props.theme.components.linkListActiveIconColor};
  margin: ${props => props.theme.components.linkListActiveIconMargin};
`;

StyledActiveIcon.defaultProps = {
  theme: defaultTheme
};

const LinkListItem = props => {
  const { children, active, disabled, ...other } = props;
  return (
    <StyledLinkListItem active={active} disabled={disabled} {...other}>
      {children}
      {active && <StyledActiveIcon>&#8226;</StyledActiveIcon>}
    </StyledLinkListItem>
  );
};

export default LinkListItem;
