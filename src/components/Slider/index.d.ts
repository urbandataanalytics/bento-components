export interface SliderProps {
  name?: string;
  prefix?: string;
  sufix?: string;
  variant?: 'slider' | 'range';
  min?: number;
  max?: number;
  value: number | Array<number>;
  step?: number;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: number) => void | Promise<any>;
  disabled?: boolean;
  isLoading?: boolean;
}

declare const Slider: React.FunctionComponent<
  SliderProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default Slider;
