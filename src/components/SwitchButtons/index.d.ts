export interface SwitchButtonsProps {
  children?: React.ReactNode;
  onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>,
    value: string | number
  ) => void | Promise<any>;
  value?: string | number;
  variant?: 'tabs' | 'button';
}

declare const SwitchButtons: React.FunctionComponent<SwitchButtonsProps>;

export default SwitchButtons;
