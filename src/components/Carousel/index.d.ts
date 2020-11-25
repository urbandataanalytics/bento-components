export interface CarouselProps {
  slides: string[];
  loop?: boolean;
  draggable?: boolean;
  onChange?: (selectedIndex: number) => void;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
  controlOffset?: string;
  rounded: boolean;
  thumbnailsEnabled: boolean;
  thumbCount: number;
  onThumbClick: (index: number) => void;
  onClick: (index: number) => void;
}

declare const Carousel: React.FunctionComponent<CarouselProps>;

export default Carousel;
