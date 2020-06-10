export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'medium' | 'large';
}

declare const List: React.FunctionComponent<ListProps>;

export default List;
