import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-gap: ${props => props.gap};
`;

const Grid = React.forwardRef((props, ref) => {
  const { children, className, columns, gap, ...other } = props;

  return (
    <StyledGrid columns={columns} gap={gap} className={className} {...other}>
      {children}
    </StyledGrid>
  );
});

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string.isRequired,
  gap: PropTypes.string
};

Grid.defaultProps = {
  columns: 'repeat(2, 1fr)',
  gap: '0px'
};

Grid.displayName = 'Grid';

export default Grid;
