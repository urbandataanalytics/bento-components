export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
}

declare const Card: React.FunctionComponent<CardProps>;

export default Card;
