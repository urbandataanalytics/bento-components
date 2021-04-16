export interface TextareaFieldProps {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  help?: string;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>;
  placeholder?: string;
  tabIndex?: string;
  value?: string;
}

declare const TextareaField: React.FunctionComponent<
  TextareaFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default TextareaField;
