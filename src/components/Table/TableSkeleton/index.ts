export interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  variant?: 'small' | 'medium';
  striped?: boolean;
}

declare const TableSkeleton: React.FunctionComponent<TableSkeletonProps>;

export default TableSkeleton;
