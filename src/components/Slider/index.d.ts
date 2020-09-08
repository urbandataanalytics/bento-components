export interface SliderProps {
  name?: string;
  variant?: 'slider' | 'range';
  min?: number;
  max?: number;
  value: number | Array<number>;
  step?: number;
  format?: void;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: number) => void | Promise<any>;
  disabled?: boolean;
}

declare const Slider: React.FunctionComponent<
  SliderProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default Slider;
