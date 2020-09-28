export interface TooltipProps {
  children: React.ReactNode;
  title: string | React.ReactNode | Array;
  value?: string;
  position?: 'top' | 'right' | 'left' | 'bottom';
}

declare const Tooltip: React.FunctionComponent<TooltipProps>;

export default Tooltip;
