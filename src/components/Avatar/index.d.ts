export interface Props {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  customTextColor?: string;
  customColor?: string;
  src?: string;
  srcSet?: string;
  alt?: string;
  initialsNum?: number;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  children: React.ReactNode;
}

declare const Avatar: React.FunctionComponent<Props>;

export default Avatar;
