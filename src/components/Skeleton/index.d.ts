export interface SkeletonProps {
  height?: string;
  variant: 'square' | 'circular' | 'rounded' | 'text';
  width: string;
}

declare const Skeleton: React.FunctionComponent<SkeletonProps>;

export default Skeleton;
