export interface InfinitiPaginationProps {
  label: string;
  totalCount: number;
  currentCount: number;
}

declare const InfinitePagination: React.FunctionComponent<InfinitiPaginationProps>;

export default InfinitePagination;
