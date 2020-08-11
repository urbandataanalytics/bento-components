export interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  open: boolean;
  closable: boolean;
}

declare const Modal: React.FunctionComponent<Props>;

export default Modal;
