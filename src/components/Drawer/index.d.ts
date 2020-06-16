export interface Props {
  children: React.ReactNode;
  position: 'left' | 'right';
  open: boolean;
  header: React.ReactNode;
  subHeader?: React.ReactNode;
  onClose?: () => void;
  showOverlay?: boolean;
  width?: string;
  offsetTop?: string;
  offsetLeft?: string;
  offsetRight?: string;
  offsetBottom?: string;
}

declare const Drawer: React.FunctionComponent<Props>;

export default Drawer;
