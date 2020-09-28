export interface DropdownProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
  align?: 'left' | 'right' | 'center';
  autoClose?: boolean;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
