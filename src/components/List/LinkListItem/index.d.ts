export interface LinkListItemProps {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}

declare const LinkListItem: React.FunctionComponent<LinkListItemProps>;

export default LinkListItem;
