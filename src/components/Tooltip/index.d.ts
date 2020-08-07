export interface TooltipProps {
  children: React.ReactNode;
  title: string;
  value?: string;
  position?: 'top' | 'right' | 'left' | 'bottom';
}

declare const Tooltip: React.FunctionComponent<TooltipProps>;

export default Tooltip;
