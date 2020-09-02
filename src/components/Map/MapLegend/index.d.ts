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
}

interface Action {
  label: string;
  value: string | number;
}

declare const MapLegend: React.FunctionComponent<Props>;

export default MapLegend;
