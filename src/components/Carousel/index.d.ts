export interface CarouselProps {
  slides: string[];
  loop?: boolean;
  draggable?: boolean;
  isLoading?: boolean;
  onChange?: (selectedIndex: number) => void;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
}

declare const Carousel: React.FunctionComponent<CarouselProps>;

export default Carousel;
