export interface ListItemProps {
  children?: React.ReactNode;
  className?: string;
  separator?: boolean;
  active?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

declare const ListItem: React.FunctionComponent<ListItemProps>;

export default ListItem;
