export interface NotificationProps {
  children?: React.ReactNode;
  closable?: boolean;
  icon?: React.ReactNode;
  onClose?: () => void;
  showIcon?: boolean;
  variant: 'normal' | 'info' | 'success' | 'warning' | 'error';
}

declare const Notification: React.FunctionComponent<NotificationProps>;

export default Notification;
