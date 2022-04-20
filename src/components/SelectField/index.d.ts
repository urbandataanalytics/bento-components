export interface SelectFieldProps {
  className?: string;
  defaultLabel?: string;
  disabled?: boolean;
  error?: boolean;
  help?: string;
  label?: string | React.ReactNode;
  name?: string;
  onChange: (ev: SyntheticSelectEvent<HTMLSelectElement>) => void | Promise<any>;
  options: Array<T>;
  tabIndex?: string;
  value: string | number | Array<string> | Array<number> | null;
}

declare const SelectField: React.FunctionComponent<
  SelectFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>
>;

export default SelectField;
