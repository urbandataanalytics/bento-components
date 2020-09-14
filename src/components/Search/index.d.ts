export interface Props {
  className?: string;
  closable?: boolean;
  disabled?: boolean;
  enableClickOutside?: boolean;
  error?: boolean;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>,
  onClose: () => void;
  leftContent?: string;
  placeholder?: string;
  tabIndex?: string;
  value?: string;
}

declare const Search: React.FunctionComponent<Props>;

export default Search;
