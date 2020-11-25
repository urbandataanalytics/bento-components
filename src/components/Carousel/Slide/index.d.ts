export interface CarouselSlideProps {
  src: string;
  visible?: boolean;
  onClick: (index: number) => void;
  index: number;
}

declare const CarouselSlide: React.FunctionComponent<CarouselSlideProps>;

export default CarouselSlide;
