import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledSwitchButtonsContainer = styled.div`
  > button.switch__button {
    ${({ theme }) => theme.texts.p1}
    padding: ${({ theme }) => `${theme.spacings.small2} ${theme.spacings.small3}`};
    margin-right: ${({ theme }) => theme.spacings.small2};
    border: 2px solid transparent;
    color: ${({ theme }) => theme.color.charcoal600};
    &.active {
      ${({ theme }) => theme.texts.p1b}
      color: ${({ theme }) => theme.color.primary500};
      border: 2px solid ${({ theme }) => theme.color.primary500};
    }
  }
`;

StyledSwitchButtonsContainer.defaultProps = {
  theme: defaultTheme
};

const SwitchButtons = props => {
  const { variant, value, onChange, children: childrenProp, ...other } = props;
  const children = React.Children.map(childrenProp, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;

    return React.cloneElement(child, {
      className:
        variant === 'buttons'
          ? value === childValue
            ? 'switch__button active'
            : 'switch__button'
          : null,
      variant: value === childValue ? 'primary' : 'secondary',
      value: childValue,
      onClick: event => onChange(event, childValue)
    });
  });

  return (
    <StyledSwitchButtonsContainer variant={variant} {...other}>
      {children}
    </StyledSwitchButtonsContainer>
  );
};

SwitchButtons.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['tabs', 'buttons']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SwitchButtons.displayName = 'SwitchButtons';

SwitchButtons.defaultProps = {
  variant: 'tabs'
};

export default SwitchButtons;
