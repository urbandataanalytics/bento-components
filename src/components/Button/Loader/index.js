import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultTheme from '../../../themes/defaultTheme';
import IconLoader from '../../../icons/Loader';

const StyledText = styled.span`
  margin-left: 5px;
`;

const StyledLoader = styled.span`
  background-color: ${({ theme }) => theme.components.buttonPrimaryDisabledBackgroundColor};
  position: absolute;
  z-index: 1;
  transform: translateX(${props => (props.loading === 'true' ? 0 : '-100%')});
  transition: ${({ theme }) => theme.global.transitionM};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    animation: rotation 2s linear infinite;
    display: inline-block;
    transform-origin: center;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = props => {
  const { loading, loadingText } = props;

  return (
    <StyledLoader loading={loading.toString()}>
      <IconLoader size="small" customColor="white" />
      <StyledText>{loadingText}</StyledText>
    </StyledLoader>
  );
};

StyledLoader.defaultProps = {
  theme: DefaultTheme
};

Loader.defaultProps = {
  loading: false,
  loadingText: ''
};

Loader.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.string
};

export default Loader;
