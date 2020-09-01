import PropTypes from 'prop-types';

export interface ListItemProps {
  children?: React.ReactNode;
  separator?: boolean;
  active?: boolean;
  disabled?: boolean;
  focusContent?: boolean,
  focusLeftContent?: boolean,
  focusRightContent?: boolean,
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  as?: React.ReactElement,
  onClick?: () => void;
  size?: 'medium' | 'large';
}

declare const ListItem: React.FunctionComponent<ListItemProps>;

export default ListItem;
