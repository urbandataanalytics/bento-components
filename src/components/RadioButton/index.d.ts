export interface RadioButtonProps {
  checked?: boolean;
  customLabelColor?: string;
  disabled?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>;
  size?: 'small' | 'medium';
  tabIndex?: string;
  value?: string;
}

declare const RadioButton: React.FunctionComponent<
  RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>
>;

export default RadioButton;
