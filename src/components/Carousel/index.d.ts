export interface CarouselProps {
  controlOffset?: string;
  draggable?: boolean;
  gap?: string;
  loop?: boolean;
  nextButton?: React.ReactNode;
  onChange?: (selectedIndex: number) => void;
  onClick?: (index: number) => void;
  onThumbClick?: (index: number) => void;
  prevButton?: React.ReactNode;
  rounded?: boolean;
  slides: string[];
  startIndex?: number;
  thumbCount?: number;
  thumbnailStartIndex?: number;
  thumbnailsEnabled?: boolean;
}

declare const Carousel: React.FunctionComponent<CarouselProps>;

export default Carousel;
