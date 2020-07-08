export interface ColumnProps {
  headerName: string;
  field: string;
  highlight?: boolean;
  variant?: string;
  cellRenderer?: string;
};

export interface TableProps {
  height?: string | number;
  columns: ColumnProps[];
  rows: any[];
}

declare const Table: React.FunctionComponent<TableProps>;

export default Table;
