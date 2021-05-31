export interface ButtonLinkProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  size: 'small' | 'medium' | 'large';
  tabIndex?: string;
  variant: 'primary' | 'secondary', 'danger';
}

declare const ButtonLink: React.FunctionComponent<ButtonLinkProps  & React.ButtonHTMLAttributes<HTMLButtonElement>>;

export default ButtonLink;
