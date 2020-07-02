export interface Props {
  children?: React.ReactNode;
  rightContent?: React.ReactNode;
  dropdownMenu?: React.ReactNode;
  header?: React.ReactNode;
  sticky?: boolean;
  iconMenu?: React.ReactNode;
}

declare const NavigationBar: React.FunctionComponent<Props>;

export default NavigationBar;
