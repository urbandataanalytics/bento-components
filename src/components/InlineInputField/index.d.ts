export interface InputFieldProps {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  help?: string;
  inputBackground?: string;
  label?: string | React.ReactNode;
  labelIcon?: React.ReactNode;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  tabIndex?: string;
  textAlign?: 'left' | 'right';
  type: string;
  value?: string | number;
  narrow?: boolean;
  boldContent?: boolean;
}

declare const InputField: React.FunctionComponent<
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default InputField;
