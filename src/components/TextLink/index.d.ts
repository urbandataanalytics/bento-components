export interface TextLinkProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  href: string;
  size: 'medium' | 'large';
  tabIndex?: string;
  variant: 'primary' | 'secondary';
}

declare const TextLink: React.FunctionComponent<TextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;

export default TextLink;
