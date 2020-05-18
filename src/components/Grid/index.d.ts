export interface GridProps {
  children?: React.ReactNode;
  className?: string;
  columns: string;
  gap?: string;
}

declare const Grid: React.FunctionComponent<GridProps>;

export default Grid;
