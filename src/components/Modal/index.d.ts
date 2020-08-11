export interface Props {
  children: React.ReactNode;
  closable?: boolean;
  enableClickOutside?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

declare const Modal: React.FunctionComponent<Props>;

export default Modal;
