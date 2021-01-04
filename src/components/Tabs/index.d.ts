export interface TabsProps {
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>,
    value: string | number
  ) => void | Promise<any>;
  value?: string | number;
}

declare const Tabs: React.FunctionComponent<TabsProps>;

export default Tabs;
