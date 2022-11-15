import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const Container = styled.span`
  font-size: ${({ theme }) => theme.components.TagFontSize};
  font-weight: ${({ theme }) => theme.components.TagFontWeight};
  background-color: ${({ theme, customColor }) => customColor || theme.components.TagBackground};
  color: ${({ theme }) => theme.components.TagColor};
  border-radius: ${({ theme }) => theme.components.TagBorderRadius};
  padding: ${({ theme }) => theme.components.TagPadding};
  line-height: ${({ theme }) => theme.components.TagLineHeight};
  display: inline-block;
`;

Container.defaultProps = {
  theme: defaultTheme
};

const Tag = ({ children, customColor }) => (
  <Container customColor={customColor}>{children}</Container>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  customColor: PropTypes.string
};

export default Tag;
