import React from 'react';
import styled from 'styled-components';

import DefaultTheme from '../../../themes/defaultTheme';
import IconLoader from '../../../icons/Loader';

const StyledText = styled.span`
  margin-left: 10px;
`;

const StyledLoader = styled.span`
  background-color: ${({ theme }) => theme.components.buttonPrimaryDisabledBackgroundColor};
  position: absolute;
  z-index: 1;
  transform: translateX(${props => (props.loading ? 0 : '-100%')});
  transition: all 300ms ease-in-out;
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
    <StyledLoader loading={loading}>
      <IconLoader size="small" custoColor="white" />
      <StyledText>{loadingText}</StyledText>
    </StyledLoader>
  );
};

StyledLoader.defaultProps = {
  theme: DefaultTheme
};

export default Loader;
