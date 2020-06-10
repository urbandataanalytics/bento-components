import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

const componentSizes = theme => ({
  medium: {
    padding: theme.components.listItemPaddingMedium,
    fontSize: theme.components.listItemFontSizeMedium
  },
  large: {
    padding: theme.components.listItemPaddingLarge,
    fontSize: theme.components.listItemFontSizeLarge
  }
});

const StyledLeftContent = styled.div`
  margin-right: 19px;
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}

  > svg {
    fill: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
    ${props => props.disabled && `fill: ${props.theme.components.listItemDisabledColor}`}
  }

  > * {
    ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}
  }
`;

const StyledComponent = styled(({ className, children, as: Component, ...props }) =>
  Component ? (
    <Component className={className} {...props}>
      {children}
    </Component>
  ) : (
    <div className={className}>{children}</div>
  )
)``;

StyledComponent.defaultProps = {
  theme: defaultTheme
};

const StyledContent = styled.div`
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}

  > svg {
    fill: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};

    &:hover {
      fill: ${props =>
        props.active
          ? props.theme.components.listItemColorActive
          : props.theme.components.listItemColorDefault};
    }
  }

  > * {
    color: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
    ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}
    ${props => props.disabled && `pointer-events: none`}

    &:hover {
      color: ${props =>
        props.active
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
  ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}

  > svg {
    fill: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
    ${props => props.disabled && `fill: ${props.theme.components.listItemDisabledColor}`}
  }

  > * {
    ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}
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

const StyledListItem = styled.li`
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
  margin: ${props => props.theme.components.listItemMargin};
  ${props => props.disabled && `color: ${props.theme.components.listItemDisabledColor}`}

  &:hover {
    background-color: ${props =>
      props.active
        ? props.theme.components.listItemColorActiveHover
        : props.theme.components.listItemColorDefaultHover};
    color: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
  }

  > ${StyledComponent} {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    align-content: center;
    ${props => componentSizes(props.theme)[props.size]};
  }
`;

StyledListItem.defaultProps = {
  theme: defaultTheme
};

const ListItem = React.forwardRef((props, ref) => {
  const {
    children,
    as: Component,
    leftContent,
    rightContent,
    separator,
    size,
    active,
    disabled,
    ...other
  } = props;

  return separator ? (
    <StyledListSeparator />
  ) : (
    <StyledListItem active={active} disabled={disabled} size={size}>
      <StyledComponent {...other} as={Component}>
        {leftContent && (
          <StyledLeftContent active={active} disabled={disabled}>
            {leftContent}
          </StyledLeftContent>
        )}

        {children}

        {rightContent && (
          <StyledRightContent active={active} disabled={disabled}>
            {rightContent}
          </StyledRightContent>
        )}
      </StyledComponent>
    </StyledListItem>
  );
});

ListItem.displayName = 'ListItem';

ListItem.defaultProps = {
  separator: false,
  active: false,
  asComponent: 'div'
};

export default ListItem;
