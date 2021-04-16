export interface Props {
  actions?: Array<Action>;
  activeAction?: string;
  description?: string | React.ReactNode;
  isLoading?: boolean;
  offsetBottom?: string;
  offsetLeft?: string;
  onChangeAction?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  points?: Array<Point>;
  rangeColors?: Array<string>;
  rangeTextMax?: string;
  rangeTextMin?: string;
  title?: string | React.ReactNode;
  variant?: 'range' | 'points';
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
