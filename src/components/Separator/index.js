import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  margin: ${({ theme }) => theme.spacings.medium1} 0;
  position: relative;
  width: ${({ width }) => (width ? width : '100%')};
  margin: 0 auto;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.charcoal400};
  width: 100%;
`;

const StyledLabel = styled.div`
  text-align: center;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > span {
    ${({ theme }) => theme.texts.p2b};
    color: ${({ theme }) => theme.color.charcoal600};
    background-color: white;
    padding: 0 12px;
  }
`;

const Separator = props => {
  const { label, width } = props;

  return (
    <StyledContainer width={width}>
      {label ? (
        <StyledLabel>
          <span>{label}</span>
        </StyledLabel>
      ) : null}
      <StyledWrapper>
        <StyledLine />
      </StyledWrapper>
    </StyledContainer>
  );
};

Separator.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string
};

Separator.displayName = 'Separator';

export default Separator;
