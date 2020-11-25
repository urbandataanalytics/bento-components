export interface TabsProps {
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  align: string;
  value: string | number;
  onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>,
    value: string | number
  ) => void | Promise<any>;
}

declare const Tabs: React.FunctionComponent<TabsProps>;

export default Tabs;
