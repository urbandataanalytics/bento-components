export interface DropdownProps {
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  closeOnClickInside?: boolean;
  closeOnClickOutside?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  label: React.ReactNode;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  position?: 'top' | 'bottom';
  portalClassName?: string;
  portalStyle?: React.CSSProperties;
}

declare const Dropdown: React.FunctionComponent<DropdownProps>;

export default Dropdown;
