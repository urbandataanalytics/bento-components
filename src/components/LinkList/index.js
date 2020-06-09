import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledLinkList = styled.ul`
  list-style: none;
`;

StyledLinkList.defaultProps = {
  theme: defaultTheme
};

const LinkList = props => {
  const { children, ...other } = props;

  return <StyledLinkList {...other}>{children}</StyledLinkList>;
};

export default LinkList;
