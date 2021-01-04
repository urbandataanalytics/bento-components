export interface ListItemProps {
  active?: boolean;
  as?: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  focusContent?: boolean;
  focusLeftContent?: boolean;
  focusRightContent?: boolean;
  focused: boolean;
  leftContent?: React.ReactNode;
  onClick?: () => void;
  rightContent?: React.ReactNode;
  separator?: boolean;
  size?: 'medium' | 'large';
}

declare const ListItem: React.FunctionComponent<ListItemProps>;

export default ListItem;
