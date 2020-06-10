import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';

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
const StyledComponentT = styled(({ asComponent, children, ...props }) =>
  // React.createElement(asComponent, props, children)
  React.cloneElement('TextLink', props)
)``;

// const StyledComponent = styled.div`
//   display: flex;
//   flex-basis: 100%;
//   align-items: center;
//   align-content: center;
//   padding: 11px 19px;
// `;

const StyledComponent = styled(({ className, children, as: Component, ...props }) =>
  Component ? (
    <Component className={className} {...props}>
      {children}
    </Component>
  ) : (
    <div className={className}>{children}</div>
  )
)``;
// const StyledComponent = styled.div``;
// const StyledComponent = styled(({ asComponent, ...props }) => {
//   return <Component as={asComponent}></Component>;
//   // return React.cloneElement(Component, props);
//   // return (
//   //   <Component {...props}>{props.children}</Component>
//   //   // <Component {...props}>{props.children}</Component>
//   // );
// })``;

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
    padding: 11px 19px;
  }
`;

StyledListItem.defaultProps = {
  theme: defaultTheme
};

// const styledBlock = styled(Block)`
//  background: steelblue;
// `

const ListItem = React.forwardRef((props, ref) => {
  // const DefaultComponent = props => <div {...props} />;

  const {
    children,
    // asComponent = DefaultComponent,
    // as: Component = () => <div />,
    as: Component,
    asProps,
    asComponent = 'div',
    leftContent,
    rightContent,
    separator,
    active,
    disabled,
    ...other
  } = props;

  // let Co = () => <div />;
  // console.log(typeof asC);
  // if (typeof asC === 'string') {
  //   Co = () => asC;
  // }

  return separator ? (
    <StyledListSeparator />
  ) : (
    <StyledListItem active={active} disabled={disabled}>
      {/*<CComponent {...props.asProps}>{children}</CComponent>*/}
      {/*<Component {...asProps}>{children}</Component>*/}
      {/*{Component ? (*/}
      {/*  <Component>*/}
      {/*    <StyledComponent active={active} disabled={disabled}>*/}
      {/*      {leftContent && (*/}
      {/*        <StyledLeftContent active={active} disabled={disabled}>*/}
      {/*          {leftContent}*/}
      {/*        </StyledLeftContent>*/}
      {/*      )}*/}

      {/*      {children}*/}
      {/*    </StyledComponent>*/}
      {/*  </Component>*/}
      {/*) : (*/}
      {/*  <StyledComponent {...props}>{children}</StyledComponent>*/}
      {/*)}*/}
      <StyledComponent {...props} as={Component}>
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
      {/*<Component>{Component().props.children}</Component>*/}
      {/*<Component>YUHU</Component>*/}
      {/*{Component}*/}
      {/*{React.createElement(Component, props)}*/}
      {/*<Component>HOLA</Component>*/}
      {/*<StyledComponent {...props} asComponent={asComponent}>*/}
      {/*  {leftContent && (*/}
      {/*    <StyledLeftContent active={active} disabled={disabled}>*/}
      {/*      {leftContent}*/}
      {/*    </StyledLeftContent>*/}
      {/*  )}*/}

      {/*  <StyledContent active={active} disabled={disabled}>*/}
      {/*    {children}*/}
      {/*  </StyledContent>*/}

      {/*{rightContent && (*/}
      {/*  <StyledRightContent active={active} disabled={disabled}>*/}
      {/*    {rightContent}*/}
      {/*  </StyledRightContent>*/}
      {/*)}*/}
      {/*</StyledComponent>*/}
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
