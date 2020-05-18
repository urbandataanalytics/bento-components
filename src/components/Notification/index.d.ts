export interface NotificationProps {
  children?: React.ReactNode;
  variant: 'normal' | 'success' | 'error';
  showIcon?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

declare const Notification: React.FunctionComponent<NotificationProps>;

export default Notification;