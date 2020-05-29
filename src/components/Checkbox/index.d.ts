export interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  size?: 'medium' | 'small';
  tabIndex?: string;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>, isChecked: boolean) => void;
}

declare const Checkbox: React.FunctionComponent<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>>;

export default Checkbox;
