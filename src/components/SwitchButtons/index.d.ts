export interface SwitchButtonsProps {
  children?: React.ReactNode;
  value: string | number;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>, value: string | number) => void | Promise<any>;
}

declare const SwitchButtons: React.FunctionComponent<SwitchButtonsProps>;

export default SwitchButtons;