export interface TabProps {
  label: string | React.ReactNode;
  badge?: string | number | React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  value?: string | number;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: string | number) => void | Promise<any>;
}

declare const Tab: React.FunctionComponent<TabProps>;

export default Tab;