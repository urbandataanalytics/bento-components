export interface Props {
  title? : string | React.ReactNode;
  description? : string | React.ReactNode;
  rangeColors: Array<string>;
  rangeTextMin: string;
  rangeTextMax: string;
  offsetLeft?: string;
  offsetBottom?: string;
  isLoading?: boolean;
  activeAction? : string;
  actions?: Array<Action>;
  onChangeAction?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  variant?: 'range' | 'points';
  points?: Array<Point>;
}

interface Action {
  label: string;
  value: string | number;
}

interface Point {
  label: string;
  color: string;
}

declare const MapLegend: React.FunctionComponent<Props>;

export default MapLegend;
