export interface DropdownProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
  align?: 'left' | 'right' | 'center';
  closeOnClickOutside?: boolean;
  isOpen?: boolean;
  closeOnClickInside?: boolean;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
