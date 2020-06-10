import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledListItem = styled.li`
  padding: 11px 19px;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.components.listItemColorActiveHover : props.theme.color.white};
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  font-size: 14px;
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightMedium};
  transition: ${props => props.theme.global.transition};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${props =>
      props.disabled
        ? props.theme.color.white
        : props.active
        ? props.theme.components.listItemColorActiveHover
        : props.theme.components.listItemColorDefaultHover};
  }
`;

StyledListItem.defaultProps = {
  theme: defaultTheme
};

const StyledLeftContent = styled.div`
  margin-right: 19px;
  color: ${props =>
    props.disabled
      ? props.theme.components.listItemColorDisabled
      : props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};

  > svg {
    fill: ${props =>
      props.disabled
        ? props.theme.components.listItemColorDisabled
        : props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
  }
`;

StyledLeftContent.defaultProps = {
  theme: defaultTheme
};

const StyledContent = styled.div`
  color: ${props =>
    props.disabled
      ? props.theme.components.listItemColorDisabled
      : props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};

  > a {
    color: ${props =>
      props.disabled
        ? props.theme.components.listItemColorDisabled
        : props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};

    &:hover {
      color: ${props =>
        props.disabled
          ? props.theme.components.listItemColorDisabled
          : props.active
          ? props.theme.components.listItemColorActive
          : props.theme.components.listItemColorDefault};
    }
  }

  > svg {
    fill: ${props =>
      props.disabled
        ? props.theme.components.listItemColorDisabled
        : props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};

    &:hover {
      fill: ${props =>
        props.disabled
          ? props.theme.components.listItemColorDisabled
          : props.active
          ? props.theme.components.listItemColorActive
          : props.theme.components.listItemColorDefault};
    }
  }
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const StyledRightContent = styled.div`
  margin-left: auto;
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};

  > svg {
    fill: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
  }
`;

StyledRightContent.defaultProps = {
  theme: defaultTheme
};

const StyledListSeparator = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.components.listItemSeparatorColor};
  margin: 0;
  padding: 0;
`;

StyledListSeparator.defaultProps = {
  theme: defaultTheme
};

const ListItem = React.forwardRef((props, ref) => {
  const { children, leftContent, rightContent, separator, active, disabled, ...other } = props;

  return separator ? (
    <StyledListSeparator />
  ) : (
    <StyledListItem {...other} active={active} disabled={disabled}>
      {leftContent && (
        <StyledLeftContent active={active} disabled={disabled}>
          {leftContent}
        </StyledLeftContent>
      )}
      <StyledContent active={active} disabled={disabled}>
        {children}
      </StyledContent>
      {rightContent && (
        <StyledRightContent active={active} disabled={disabled}>
          {rightContent}
        </StyledRightContent>
      )}
    </StyledListItem>
  );
});

ListItem.displayName = 'ListItem';

ListItem.defaultProps = {
  separator: false,
  active: false
};

export default ListItem;
