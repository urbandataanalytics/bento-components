export interface ColumnProps {
  headerName: string;
  field: string;
  align: 'left' | 'center' | 'right';
  highlight?: boolean;
  variant?: 'primary' | 'secondary';
  cellRenderer?: string;
}

export interface TableProps {
  columns: ColumnProps[];
  height?: string | number;
  loading?: boolean;
  rows: any[];
  striped?: boolean;
  variant?: 'small' | 'medium';
}

declare const Table: React.FunctionComponent<TableProps>;

export default Table;
