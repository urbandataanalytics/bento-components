import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import PropTypes from 'prop-types';

const StyledFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.components.formGroupMarginBottom};
`;

StyledFormGroup.defaultProps = {
  theme: defaultTheme
};

const FormGroup = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <StyledFormGroup className={className} {...other}>
      {children}
    </StyledFormGroup>
  );
});

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
