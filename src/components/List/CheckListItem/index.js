import React from 'react';
import ListItem from '../../List/ListItem';
import styled from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';
import IconCheck from '../../../icons/Check/index';

const StyledCheckListItem = styled(({ component, ...props }) => {
  const { active } = props;
  return <ListItem as={component} {...props} rightContent={active ? <IconCheck /> : null} />;
})``;

StyledCheckListItem.defaultProps = {
  theme: defaultTheme
};

const CheckListItem = props => {
  const { as, ...other } = props;

  return <StyledCheckListItem component={as} {...other} />;
};

CheckListItem.propTypes = ListItem.propTypes;

export default CheckListItem;
