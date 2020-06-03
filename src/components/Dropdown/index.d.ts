export interface DropdownProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  className?: string;
  autoClose?: boolean;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
