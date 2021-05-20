export interface VerticalSeparator {
  separatorLocation?: 'right' | 'left';
  customColor?: string;
}

declare const VerticalSeparator: React.FunctionComponent<VerticalSeparator>;

export default VerticalSeparator;
