export interface ChipProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconCheck?: React.ReactNode;
  value?: boolean;
  options?: [string];
  defaultOptions?: string;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  size: 'small' | 'medium' | 'large';
  tabIndex?: string;
  variant?: 'rounded';
  children: React.ReactNode;
  customColor: string;
}

declare const Chip: React.FunctionComponent<ChipProps & React.ChipHTMLAttributes<HTMLChipElement>>;

export default Chip;
