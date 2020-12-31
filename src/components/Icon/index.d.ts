export interface Props {
  color?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'critical';
  size?: 'small' | 'medium' | 'large' | 'extralarge';
  customColor?: string;
  viewBox?: string;
  children: React.ReactNode;
}

declare const Icon: React.FunctionComponent<Props>;

export default Icon;
