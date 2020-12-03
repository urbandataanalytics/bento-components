export interface CardHeaderProps {
  children?: React.ReactNode;
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  title?: React.ReactNode;
  subheader?: React.ReactNode;
}

declare const CardHeader: React.FunctionComponent<CardHeaderProps>;

export default CardHeader;
