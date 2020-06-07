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
    height: theme.components.avatarSizeSmall
  },
  medium: {
    width: theme.components.avatarSizeMedium,
    height: theme.components.avatarSizeMedium
  },
  large: {
    width: theme.components.avatarSizeLarge,
    height: theme.components.avatarSizeLarge
  }
});

const StyledAvatar = styled.div`
  ${props => componentSizes(props.theme)[props.size]};
  border-radius: ${({ theme }) => theme.components.avatarBorderRadius};
  background-color: ${({ theme }) => theme.components.avatarBackgroundColor};
  color: ${({ theme }) => theme.components.avatarColor};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

StyledAvatar.defaultProps = {
  theme: defaultTheme
};

const StyledImg = styled(({ className, ...props }) => <img className={className} {...props} />)`
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
    color,
    customColor,
    initialsNum,
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
    children = getInitials(alt, initialsNum);
  } else if (childrenProp != null) {
    children = getInitials(childrenProp, initialsNum);
  } else {
    children = <IconUser size={size} />;
  }

  return (
    <StyledAvatar size={size} {...other}>
      {children}
    </StyledAvatar>
  );
});

Avatar.defaultProps = {
  size: 'medium'
};

Avatar.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  initialsNum: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  imgProps: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string,
  customColor: PropTypes.string
};

export default Avatar;
