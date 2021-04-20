export interface CardContentProps {
  children?: React.ReactNode;
  className?: string;
  contentBackgroundColor?: string;
  contentFontColor?: string;
}

declare const CardContent: React.FunctionComponent<CardContentProps>;

export default CardContent;
