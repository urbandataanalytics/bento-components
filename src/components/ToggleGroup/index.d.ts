export interface ToggleGroupProps {
  children?: React.ReactNode;
  onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>,
    value: string | number
  ) => void | Promise<any>;
  value?: string | number;
  variant?: 'tabs' | 'button';
}

declare const ToggleGroup: React.FunctionComponent<ToggleGroupProps>;

export default ToggleGroup;
