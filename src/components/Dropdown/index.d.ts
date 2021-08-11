export interface DropdownProps {
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  closeOnClickInside?: boolean;
  closeOnClickOutside?: boolean;
  isOpen?: boolean;
  label: React.ReactNode;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  position?: 'top' | 'bottom';
  className?: string;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
