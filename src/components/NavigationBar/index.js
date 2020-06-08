import * as React from 'react';
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
  border-bottom: 1px solid ${({ theme }) => theme.color.charcoal300};
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme
};

const NavigationLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 0 17px;
`;

NavigationLeftHeader.defaultProps = {
  theme: defaultTheme
};

const StyledMenu = styled.div`
  padding: 20px ${({ theme }) => theme.spacings.small4};
  background-color: ${({ theme }) => theme.color.charcoal300};

  &:hover {
    background-color: ${({ theme }) => theme.color.charcoal400};
  }
`;

StyledMenu.defaultProps = {
  theme: defaultTheme
};

const NavigationContent = styled.div`
  margin-right: 42px;
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
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
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
  const { children, header, dropdownMenu, rightContent, iconMenu, linkList, ...other } = props;

  const Menu = () => <StyledMenu>{iconMenu ? iconMenu : <IconMove size="large" />}</StyledMenu>;

  return (
    <StyledNavigation {...other}>
      <NavigationLeft>
        {dropdownMenu && <Dropdown label={<Menu />}>{dropdownMenu}</Dropdown>}
        {header && <NavigationLeftHeader>{header}</NavigationLeftHeader>}
      </NavigationLeft>

      <NavigationRight>
        {children && (
          <NavigationContent>
            <NavigationLink>
              {Children.map(children, child => (
                <NavigationLinkItem>{React.cloneElement(child)}</NavigationLinkItem>
              ))}
            </NavigationLink>
          </NavigationContent>
        )}
        {rightContent && <NavigationRightContent>{rightContent}</NavigationRightContent>}
      </NavigationRight>
    </StyledNavigation>
  );
};

NavigationBar.propTypes = {
  header: PropTypes.node,
  dropdownMenu: PropTypes.node,
  rightContent: PropTypes.node,
  children: PropTypes.node
};

export default NavigationBar;
