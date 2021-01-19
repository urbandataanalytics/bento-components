export interface Props {
  children?: React.ReactNode;
  dropdownMenu?: React.ReactNode;
  header?: React.ReactNode;
  iconMenu?: React.ReactNode;
  linkList?: React.ReactNode;
  loading?: boolean;
  rightContent?: React.ReactNode;
  sticked?: boolean;
}

declare const NavigationBar: React.FunctionComponent<Props>;

export default NavigationBar;
