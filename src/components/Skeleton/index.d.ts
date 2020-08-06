export interface SkeletonProps {
  height: string;
  width: string;
  variant?: 'square' | 'circular' | 'rounded' | 'text';
}

declare const Skeleton: React.FunctionComponent<SkeletonProps>;

export default Skeleton;
