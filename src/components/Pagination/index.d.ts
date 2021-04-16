export interface PaginationProps {
  currentCount: number;
  isLoading: boolean;
  label: string;
  moreLabel: string;
  onLoadMore: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  totalCount: number;
}

declare const Pagination: React.FunctionComponent<PaginationProps>;

export default Pagination;
