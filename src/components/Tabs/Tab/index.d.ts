export interface TabProps {
  active?: boolean;
  badge?: string | number | React.ReactNode;
  disabled?: boolean;
  label: string | React.ReactNode;
  onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>,
    value: string | number
  ) => void | Promise<any>;
  value?: string | number;
}

declare const Tab: React.FunctionComponent<TabProps>;

export default Tab;
