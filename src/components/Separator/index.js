import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSeparator = styled.i`
  position: relative;
  display: block;
  margin: ${({ theme }) => theme.spacings.medium1} 0;
  ${({ theme }) => theme.texts.p2b};
  color: ${({ theme }) => theme.color.charcoal600};
  text-align: center;
  top: 9px;

  > span {
    background-color: white;
    padding: 0 12px;
    position: relative;
    top: -9px;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.charcoal400};
  }
`;

const Separator = props => {
  const { label, ...other } = props;

  return <StyledSeparator>{label ? <span>{label}</span> : null}</StyledSeparator>;
};

Separator.propTypes = {
  label: PropTypes.string
};

Separator.displayName = 'Separator';

export default Separator;
