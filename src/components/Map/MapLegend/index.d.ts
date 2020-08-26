export interface Props {
  title? : string | React.ReactNode;
  description? : string | React.ReactNode;
  rangeColors: Array<string>;
  rangeTextMin: string;
  rangeTextMax: string;
  offsetLeft?: string;
  offsetBottom?: string;
}

declare const MapLegend: React.FunctionComponent<Props>;

export default MapLegend;
