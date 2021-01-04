export interface NotificationProps {
  children?: React.ReactNode;
  closable?: boolean;
  icon?: React.ReactNode;
  onClose?: () => void;
  showIcon?: boolean;
  variant: 'normal' | 'success' | 'error';
}

declare const Notification: React.FunctionComponent<NotificationProps>;

export default Notification;
