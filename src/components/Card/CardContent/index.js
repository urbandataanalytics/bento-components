import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../themes/defaultTheme';

const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacings.small3} ${({ theme }) => theme.spacings.small4};
  background-color: ${({ contentBackgroundColor, theme }) =>
    contentBackgroundColor ? contentBackgroundColor : theme.color.charcoal300};
  color: ${({ contentFontColor }) => contentFontColor};
`;

StyledCardContent.defaultProps = {
  theme: defaultTheme
};

const CardContent = React.forwardRef((props, ref) => {
  const { children, className, contentBackgroundColor, contentFontColor, ...other } = props;

  return (
    <StyledCardContent
      className={className}
      contentBackgroundColor={contentBackgroundColor}
      contentFontColor={contentFontColor}
      {...other}
    >
      {children}
    </StyledCardContent>
  );
});

CardContent.defaultProps = {
  contentBackgroundColor: defaultTheme.color.charcoal300
};

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentFontColor: PropTypes.string
};
CardContent.displayName = 'CardContent';

export default CardContent;
