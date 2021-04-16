export interface SkeletonProps {
  height?: string;
  variant: 'square' | 'circular' | 'rounded' | 'text';
  width: string;
  opacity?: string;
}

declare const Skeleton: React.FunctionComponent<SkeletonProps>;

export default Skeleton;
