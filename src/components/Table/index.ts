export interface ColumnProps {
  headerName: string;
  field: string;
  align: 'left' | 'center' | 'right';
  highlight?: boolean;
  variant?: 'primary' | 'secondary';
  cellRenderer?: string;
}

export interface TableProps {
  height?: string | number;
  columns: ColumnProps[];
  rows: any[];
}

declare const Table: React.FunctionComponent<TableProps>;

export default Table;
