import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const StyledListItem = styled.li`
  padding: 11px 19px;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.color.primary100 : props.theme.color.white};
  color: ${props => (props.active ? props.theme.color.primary500 : props.theme.color.charcoal600)};
  font-size: 14px;
  font-family: ${props => props.theme.global.fontFamilyMedium};
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.primary100};
    color: ${props => props.theme.color.primary500};
  }
`;
StyledListItem.defaultProps = {
  theme: defaultTheme
};

const StyledLeftContent = styled.div`
  margin-right: 19px;

  > svg {
    fill: ${props => (props.active ? props.theme.color.primary500 : props.theme.color.charcoal600)};

    &:hover {
      fill: ${props => props.theme.color.primary500};
    }
  }
`;

StyledLeftContent.defaultProps = {
  theme: defaultTheme
};

const StyledContent = styled.div`
  > a {
    color: ${props =>
      props.active ? props.theme.color.primary500 : props.theme.color.charcoal600};

    &:hover {
      color: ${props => props.theme.color.primary500};
    }
  }
`;

StyledContent.defaultProps = {
  theme: defaultTheme
};

const StyledRightContent = styled.div`
  margin-left: auto;

  > svg {
    fill: ${props => (props.active ? props.theme.color.primary500 : props.theme.color.charcoal600)};

    &:hover {
      fill: ${props => props.theme.color.primary500};
    }
  }
`;

StyledRightContent.defaultProps = {
  theme: defaultTheme
};

const StyledListSeparator = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.color.charcoal300};
  margin: 0;
  padding: 0;
`;
StyledListSeparator.defaultProps = {
  theme: defaultTheme
};

const ListItem = React.forwardRef((props, ref) => {
  const { children, leftContent, rightContent, separator, active, ...other } = props;

  return separator ? (
    <StyledListSeparator />
  ) : (
    <StyledListItem separator={separator} {...other} active={active}>
      {leftContent && <StyledLeftContent>{leftContent}</StyledLeftContent>}
      <StyledContent>{children}</StyledContent>
      {rightContent && <StyledRightContent>{rightContent}</StyledRightContent>}
    </StyledListItem>
  );
});

ListItem.displayName = 'ListItem';

ListItem.defaultProps = {
  separator: false,
  active: false
};

export default ListItem;
