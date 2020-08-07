export interface DropdownProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'center';
  autoClose?: boolean;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
