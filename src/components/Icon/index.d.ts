export interface Props {
  ariaHidden?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary';
  customColor?: string;
  size?: 'small' | 'medium' | 'large';
  viewBox?: string;
}

declare const Icon: React.FunctionComponent<Props>;

export default Icon;
