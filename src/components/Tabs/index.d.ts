export interface TabsProps {
  children?: React.ReactNode;
  value: string | number;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: string | number) => void | Promise<any>;
}

declare const Tabs: React.FunctionComponent<TabsProps>;

export default Tabs;