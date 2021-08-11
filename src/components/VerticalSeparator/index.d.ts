export interface VerticalSeparator {
  separatorLocation?: 'right' | 'left';
  customColor?: string;
  width?: string;
  height?: string;
}

declare const VerticalSeparator: React.FunctionComponent<VerticalSeparator>;

export default VerticalSeparator;
