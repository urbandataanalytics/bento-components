export interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  offsetBottom?: string;
  offsetLeft?: string;
  offsetRight?: string;
  offsetTop?: string;
  onClose?: () => void;
  open: boolean;
  position: 'left' | 'right';
  showOverlay?: boolean;
  subHeader?: React.ReactNode;
  width?: string;
}

declare const Drawer: React.FunctionComponent<Props>;

export default Drawer;
