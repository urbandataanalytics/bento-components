export interface InfinitiPaginationProps {
  currentCount: number;
  label: string;
  totalCount: number;
}

declare const InfinitePagination: React.FunctionComponent<InfinitiPaginationProps>;

export default InfinitePagination;
