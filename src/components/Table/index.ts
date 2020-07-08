export interface TableProps {
  height?: string;
  onClose?: () => void;
}

declare const Table: React.FunctionComponent<TableProps>;

export default Table;