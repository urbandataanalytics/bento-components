export interface InputFieldProps {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  help?: string;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>;
  placeholder?: string;
  tabIndex?: string;
  type: string;
  labelIcon: React.ReactNode;
  textAlign: 'left' | 'right';
  value?: string;
}

declare const InputField: React.FunctionComponent<
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default InputField;
