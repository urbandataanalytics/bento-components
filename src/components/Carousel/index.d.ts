export interface CarouselProps {
  slides: string[];
  loop?: boolean;
  draggable?: boolean;
  onChange?: (selectedIndex: number) => void;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
  controlOffset?: string;
}

declare const Carousel: React.FunctionComponent<CarouselProps>;

export default Carousel;
