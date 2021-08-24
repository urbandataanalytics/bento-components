export interface SliderProps {
  disabled?: boolean;
  isLoading?: boolean;
  max: number;
  maxPrefix?: string;
  maxSuffix?: string;
  min: number;
  minPrefix?: string;
  minSuffix?: string;
  name?: string;
  onChange: (ev: SyntheticInputEvent<HTMLInputElement>, value: number) => void | Promise<any>;
  onAfterChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: number) => void | Promise<any>;
  prefix?: string;
  step: number;
  suffix?: string;
  value: number | Array<number>;
  variant: 'slider' | 'range';
  railSize?: 'regular' | 'slim';
  size?: 'medium' | 'large';
}

declare const Slider: React.FunctionComponent<
  SliderProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default Slider;
