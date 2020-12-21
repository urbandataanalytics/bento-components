import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import { forwardRef } from 'react';
import { IconUser } from '../../icons';
import { getInitials } from '../../utils/initials';
import useLoadedImage from '../../hooks/useLoadedImage';

const componentSizes = theme => ({
  small: {
    width: theme.components.avatarSizeSmall,
    height: theme.components.avatarSizeSmall,
    fontSize: theme.components.avatarFontSizeSmall
  },
  medium: {
    width: theme.components.avatarSizeMedium,
    height: theme.components.avatarSizeMedium,
    fontSize: theme.components.avatarFontSizeMedium
  },
  large: {
    width: theme.components.avatarSizeLarge,
    height: theme.components.avatarSizeLarge,
    fontSize: theme.components.avatarFontSizeLarge
  },
  extralarge: {
    width: theme.components.avatarSizeExtralarge,
    height: theme.components.avatarSizeExtralarge,
    fontSize: theme.components.avatarFontSizeExtralarge
  }
});

const StyledAvatar = styled.div`
  ${({ theme }) => theme.texts.p2b}
  border-radius: ${({ theme }) => theme.components.avatarBorderRadius};
  background-color: ${({ theme, customColor }) =>
    customColor || theme.components.avatarBackgroundColor};
  color: ${({ theme, customTextColor }) => customTextColor || theme.components.avatarColor};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.global.transitionM};
  ${({ theme, size }) => componentSizes(theme)[size]};
`;

StyledAvatar.defaultProps = {
  theme: defaultTheme
};

const StyledImg = styled(({ className, alt, ...props }) => (
  <img className={className} alt={alt} {...props} />
))`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`;

const Avatar = forwardRef((props, ref) => {
  const {
    children: childrenProp,
    src,
    srcSet,
    alt,
    size,
    customColor,
    initialsNum = 2,
    imgProps,
    ...other
  } = props;
  let children = null;
  const imageLoaded = useLoadedImage({ src, srcSet });
  const hasImg = src || srcSet;
  const hasImageAndLoaded = hasImg && imageLoaded !== 'error';

  if (hasImageAndLoaded) {
    children = <StyledImg alt={alt} src={src} size={size} {...imgProps} />;
  } else if (hasImg && alt) {
    children =
      initialsNum > 0 ? getInitials(childrenProp ? childrenProp : alt, initialsNum) : childrenProp;
  } else if (childrenProp != null) {
    const childrenString = Array.isArray(childrenProp) ? childrenProp.join(' ') : childrenProp;
    children = initialsNum > 0 ? getInitials(childrenString, initialsNum) : childrenProp;
  } else {
    children = <IconUser size={size} />;
  }

  return (
    <StyledAvatar size={size} customColor={customColor} {...other}>
      {children}
    </StyledAvatar>
  );
});

Avatar.defaultProps = {
  size: 'medium',
  initialsNum: 2
};

Avatar.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  initialsNum: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
  imgProps: PropTypes.object,
  children: PropTypes.node,
  customColor: PropTypes.string,
  customTextColor: PropTypes.string
};

export default Avatar;
