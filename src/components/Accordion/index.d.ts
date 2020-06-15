export interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  subHeader?: React.ReactNode;
}

declare const Accordion: React.FunctionComponent<Props>;

export default Accordion;
