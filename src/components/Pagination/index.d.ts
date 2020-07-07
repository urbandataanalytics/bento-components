export interface PaginationProps {
  label: string;
  moreLabel: string;
  totalCount: number;
  currentCount: number;
  onLoadMore: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

declare const Pagination: React.FunctionComponent<PaginationProps>;

export default Pagination;
