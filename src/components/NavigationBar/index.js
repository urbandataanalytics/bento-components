import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import IconMove from '../../icons/Move';
import Dropdown from '../Dropdown';
import { Children } from 'react';

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.components.navigationBackgroundColor};
  border-bottom: ${({ theme }) => theme.components.navigationBorder};
  ${({ dropdownMenu, header, theme }) =>
    !dropdownMenu || !header ? `height: ${theme.components.navigationMaxHeight}` : ''}
  transition: ${props => props.theme.global.transitionM};
  ${({ sticky }) => sticky && `position: sticky; top: 0; z-index: 1;`};
  height: ${({ theme, sticked }) =>
    `${sticked ? theme.components.navigationMinHeight : theme.components.navigationMaxHeight}`};
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme
};

const NavigationLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

NavigationLeft.defaultProps = {
  theme: defaultTheme
};

const NavigationRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

NavigationRight.defaultProps = {
  theme: defaultTheme
};

const NavigationLeftHeader = styled.div`
  padding: ${({ theme }) => theme.components.navigationHeaderPadding};
  line-height: 50%;
`;

NavigationLeftHeader.defaultProps = {
  theme: defaultTheme
};

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.components.navigationMenuBackgroundColor};
  transition: ${props => props.theme.global.transitionM};
  ${({ theme, isOpenDropdown }) =>
    isOpenDropdown && `background-color: ${theme.components.navigationMenuOpenBackgroundColor};`}
  width: ${({ theme }) => theme.spacings.medium5};
  height: 100%;

  &:hover {
    background-color: ${({ theme, isOpenDropdown }) =>
      !isOpenDropdown && theme.components.navigationMenuHoverBackgroundColor};
  }
`;

StyledMenu.defaultProps = {
  theme: defaultTheme
};

const NavigationContent = styled.div`
  margin: ${({ theme }) => theme.components.navigationContentMargin};
  display: flex;
  align-items: center;
`;

NavigationContent.defaultProps = {
  theme: defaultTheme
};

const NavigationLink = styled.ul`
  display: flex;
  align-items: center;
`;

NavigationLink.defaultProps = {
  theme: defaultTheme
};

const NavigationLinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.components.navigationLinkMargin};

  > a {
    font-size: ${({ theme }) => theme.components.textLinkFontSizeMedium};
    color: ${({ theme }) => theme.components.textLinkSecondaryColor};
    font-weight: ${props => props.theme.global.fontWeightMedium};

    &.active {
      color: ${({ theme }) => theme.components.textLinkPrimaryColor};
    }

    &:hover {
      color: ${({ theme }) => theme.components.textLinkPrimaryHoverColor};
    }
  }

  &:last-child {
    margin: 0;
  }
`;

NavigationLinkItem.defaultProps = {
  theme: defaultTheme
};

const NavigationRightContent = styled.div``;

NavigationRightContent.defaultProps = {
  theme: defaultTheme
};

const NavigationBar = props => {
  const {
    children,
    header,
    dropdownMenu,
    rightContent,
    iconMenu,
    sticky,
    linkList,
    ...other
  } = props;
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [sticked, setSticked] = useState(false);

  useEffect(() => {
    if (sticky) {
      const onScroll = e => {
        setSticked(e.target.documentElement.scrollTop > 0 ? true : false);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [sticky]);

  const handleDropdown = isOpen => {
    setOpenDropdown(isOpen);
  };

  const Menu = ({ sticked }) => (
    <StyledMenu sticked={sticked} isOpenDropdown={isOpenDropdown}>
      {iconMenu ? iconMenu : <IconMove size="large" />}
    </StyledMenu>
  );

  return (
    <StyledNavigation
      sticked={sticked}
      sticky={sticky}
      header={header}
      dropdownMenu={dropdownMenu}
      {...other}
    >
      <NavigationLeft>
        {dropdownMenu && (
          <Dropdown onChange={handleDropdown} label={<Menu />}>
            {dropdownMenu}
          </Dropdown>
        )}
        {header && (
          <NavigationLeftHeader>
            {React.cloneElement(header, {
              sticked
            })}
          </NavigationLeftHeader>
        )}
      </NavigationLeft>

      <NavigationRight>
        {children && (
          <NavigationContent>
            <NavigationLink>
              {Children.map(children, child => (
                <NavigationLinkItem>{React.cloneElement(child, { sticked })}</NavigationLinkItem>
              ))}
            </NavigationLink>
          </NavigationContent>
        )}
        {rightContent && (
          <NavigationRightContent>
            {React.cloneElement(rightContent, {
              sticked
            })}
          </NavigationRightContent>
        )}
      </NavigationRight>
    </StyledNavigation>
  );
};

NavigationBar.propTypes = {
  header: PropTypes.node,
  dropdownMenu: PropTypes.node,
  rightContent: PropTypes.node,
  children: PropTypes.node,
  iconMenu: PropTypes.node
};

export default NavigationBar;
