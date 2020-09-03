export interface SelectFieldProps {
  disabled?: boolean;
  error?: boolean;
  help?: string;
  className?: string;
  defaultLabel?: string;
  label?: string | React.ReactNode;
  name?: string;
  options: Array<T>;
  onChange?: (ev: SyntheticSelectEvent<HTMLSelectElement>) => void | Promise<any>,
  tabIndex?: string;
  value?: string;
}

declare const SelectField: React.FunctionComponent<SelectFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>>;

export default SelectField;
