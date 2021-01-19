export interface Props {
  ariaHidden?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'extralarge';
  customColor?: string;
  viewBox?: string;
}

declare const Icon: React.FunctionComponent<Props>;

export default Icon;
